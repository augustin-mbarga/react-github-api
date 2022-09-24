// == Import
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { resultsDataFiltered as cleanRepos } from "../../selectors/data";
import axios from "axios";

import Header from "../Header";
import SearchBar from "../SearchBar";
import Message from "../Message";
import Repos from "../Repos";
import Loader from "../Loader";
import Faq from "../FAQ";
import Menu from "../Menu";
import NotFound from "../NotFound";

import "./App.scss";

export default function App() {
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [isInputOk, setIsInputOk] = useState(true);

  async function loadData() {
    setLoading(true);
    // using from the 2nd research of the user
    if (tag) {
      setTag(false);
      setResults([]);
      setTotal(0);
    }
    // Github API call with axios
    try {
      // The input of user must have at least 3 characters
      if (input.length < 3) {
        setIsInputOk(false);
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`
      );

      setResults(cleanRepos(response.data.items));
      setTotal(response.data.total_count);
      setTag(true);
      setIsInputOk(true);
    } catch (error) {
      console.error(error);
    } finally {
      setInput("");
      setLoading(false);
    }
  }

  const loaderJsx = (
    <>
      {loading && <Loader />}
      {loading || (tag && <Message counter={total} />)}
      {loading || <Repos results={results} />}
    </>
  );

  useEffect(() => {
    if (query) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // Page display
  return (
    <div className="app">
      <Header />
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                inputValue={input}
                onChangeInputValue={(e, data) => setInput(data.value)}
                onFormSubmit={() => setQuery(input)}
                isInputOk={isInputOk}
              />
              {loaderJsx}
            </>
          }
        ></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
