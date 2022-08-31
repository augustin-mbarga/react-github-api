// == Import
import { useState } from "react";
import { resultsDataFiltered as cleanRepos } from "../../selectors/data";
import axios from "axios";

import Header from "../Header";
import SearchBar from "../SearchBar";
import Message from "../Message";
import Repos from "../Repos";

import "./App.scss";

export default function App() {
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState(false);

  async function loadData() {
    // using from the 2nd research of the user
    if (tag) {
      setTag(false);
      setResults([]);
      setTotal(0);
    }
    // Github API call with axios
    try {
      if (input === "") return alert("Saisissez votre recherche");

      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${input}`
      );

      setResults(cleanRepos(response.data.items));
      setTotal(response.data.total_count);
      setTag(true);
      setInput("");
    } catch (error) {
      console.error(error);
    }
  }

  // Page display
  return (
    <div className="app">
      <Header />
      <SearchBar
        inputValue={input}
        onChangeInputValue={(e, data) => setInput(data.value)}
        onFormSubmit={loadData}
      />
      {tag && <Message counter={total} />}
      <Repos results={results} />
    </div>
  );
}
