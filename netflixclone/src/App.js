import './App.css';
import Row from './Row';
import requests from './Request';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Top Horror movies" fetchUrl={requests.fetchHororMovies}/>
      <Row title="Top Action Movies" fetchUrl={requests.fetchActionMovies}/>
      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> */}

      
    </div>
  );
}

export default App;
