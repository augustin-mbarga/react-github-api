import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';
import './App.scss';
import resultsData from '../../data/repos';
import { resultsDataFiltered as dataFiltered } from '../../selectors/data';

export default function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Message counter={resultsData.total_count} />
      <Repos results={dataFiltered(resultsData.items)} />
    </div>
  );
}
