import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';
import './App.scss';
import resultsData from '../../data/repos';

export default function App() {
  console.log("Data : ", resultsData.total_count);
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Message counter={resultsData.total_count} />
      <Repos results={resultsData} />
    </div>
  );
}
