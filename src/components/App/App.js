import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';
import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Message content="La recherche a donné 1159901 résultats." />
      <Repos />
    </div>
  );
}
