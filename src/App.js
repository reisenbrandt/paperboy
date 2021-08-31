import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Results from './pages/Results';
import TopHeadlines from './pages/TopHeadlines';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/topHeadlines">
            <TopHeadlines />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
