// == Import
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { resultsDataFiltered as cleanRepos } from "../../selectors/data";

import Header from "../Header";
import SearchBar from "../SearchBar";
import Message from "../Message";
import Repos from "../Repos";
import Loader from "../Loader";
import Faq from "../FAQ";
import Menu from "../Menu";
import NotFound from "../NotFound";
import LoadMore from "../LoadMore";

import "./App.scss";

export default function App() {
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const nbResultsDisplayedPerPage = 9;

  const loadData = async () => {
    // loading status
    setLoading(true);

    try {
      // Github API call with axios
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page}&per_page=${nbResultsDisplayedPerPage}`
      );

      let compiledResults = [...results, ...response.data.items];
      setResults(compiledResults);
      setTotal(response.data.total_count);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loaderJsx = (
    <>
      {total > 0 && <Message counter={total} />}
      {<Repos results={cleanRepos(results)} />}
      {loading && <Loader />}
    </>
  );

  useEffect(() => {
    if (query) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const handleSubmit = () => {
    // new request => infos reset
    setPage(1);
    setTotal(0);
    setResults([]);
    setQuery(input);
  };

  // preparation of LoadMore display conditions
  const hasRepos = total - results.length > 0;
  const isLoadMoreVisible = !loading && hasRepos;

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
                onFormSubmit={handleSubmit}
                noEmpty
                minCharacter={3}
              />
              {loaderJsx}
              {isLoadMoreVisible && (
                <LoadMore
                  onBtnClick={() => {
                    setPage(page + 1);
                  }}
                />
              )}
            </>
          }
        ></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
