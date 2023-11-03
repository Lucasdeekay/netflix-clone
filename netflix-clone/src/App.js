import './App.css';
import Row from './components/Row';
import request from './functions/requests';
import Banner from './components/Banner';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchTopActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchTopComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchTopHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchTopRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchTopDocumentaries}/>
    </div>
  );
}

export default App;
