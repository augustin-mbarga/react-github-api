// == Import
import { useState } from "react";
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

import "./App.scss";

export default function App() {
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState(false);
  const [loading, setLoading] = useState(false);

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
      if (input === "") {
        setLoading(false);
        return alert("Saisissez votre recherche");
      }

      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${input}`
      );

      setResults(cleanRepos(response.data.items));
      setTotal(response.data.total_count);
      setTag(true);
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

  // Page display
  return (
    <div className="app">
      <Header />
      <Menu />
      <SearchBar
        inputValue={input}
        onChangeInputValue={(e, data) => setInput(data.value)}
        onFormSubmit={loadData}
      />
      {loaderJsx}
      <Faq />
    </div>
  );
}
