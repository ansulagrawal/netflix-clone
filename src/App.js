import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './function-modules/requests';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargerRow />

      <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Row title="" fetchUrl={requests.} />
      <Row title="" fetchUrl={requests.} />
      <Row title="" fetchUrl={requests.} /> */}

    </div>
  );
}

export default App;
