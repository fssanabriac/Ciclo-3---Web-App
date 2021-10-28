import logo from './logo.svg';
import './App.css';
import TestPage from 'pages/test_page';
import Home from 'pages/home';
import Login from 'pages/login';
import Layout from 'layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/'>
              <TestPage />
            </Route>
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
