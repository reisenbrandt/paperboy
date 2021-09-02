import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Results from './pages/Results';
import TopHeadlines from './pages/TopHeadlines';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/results/:startDate?/:endDate?/:searchTerm?">
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
