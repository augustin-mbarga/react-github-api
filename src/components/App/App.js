// == Import
import { useState } from "react";
import { resultsDataFiltered as cleanRepos } from "../../selectors/data";

import Header from "../Header";
import SearchBar from "../SearchBar";
import Message from "../Message";
import Repos from "../Repos";

import resultsData from "../../data/repos";
import "./App.scss";

export default function App() {
  const [results, setResults] = useState(cleanRepos(resultsData.items));
  const [total, setTotal] = useState(resultsData.total_count);
  const [input, setInput] = useState("");

  // function handleChange(inputValue) {
  //   setInput(inputValue);
  // }

  function loadData(research) {
    setInput(research);
    const researchResults = cleanRepos(resultsData.items).filter(({ title }) =>
      title.includes(input)
    );
    setResults(researchResults);
    setTotal(researchResults.length);
    // Reset
    setInput("");
  }

  return (
    <div className="app">
      <Header />
      <SearchBar
        inputValue={input}
        onChangeInputValue={(e, data) => setInput(data.value)}
        onFormSubmit={loadData}
      />
      <Message counter={total} />
      <Repos results={results} />
    </div>
  );
}
