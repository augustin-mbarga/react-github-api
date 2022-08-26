// == Import
import { useState } from 'react';
import { resultsDataFiltered as cleanRepos } from '../../selectors/data';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';

import resultsData from '../../data/repos';
import './App.scss';

export default function App() {
  const [results, setResults] = useState(resultsData.items);
  const [total, setTotal] = useState(resultsData.total_count);

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Message counter={total} />
      <Repos results={cleanRepos(results)} />
    </div>
  );
}
