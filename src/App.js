import './App.css';
import Row from './components/Row';
import requests from './function-modules/requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRated} />

    </div>
  );
}

export default App;
