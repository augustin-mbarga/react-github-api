import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Message />
      <Repos />
    </div>
  );
}
