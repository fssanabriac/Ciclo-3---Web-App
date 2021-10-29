import 'styles/styles.css';
import HomeLayout from 'layouts/HomeLayout';
import LoginLayout from 'layouts/LoginLayout';
import PrivateLayout from 'layouts/PrivateLayout';

import TestPage from 'pages/test_page';
import Home from 'pages/home';
import Register from 'pages/register';
import Login from 'pages/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inside from 'pages/inside';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/login', '/sign-in']}>
            <LoginLayout>
              <Switch>
                <Route path='/login'>
                  <Login/>
                </Route>
              </Switch>
              <Switch>
                <Route path='/sign-in'>
                  <Register/>
                </Route>
              </Switch>
            </LoginLayout>
          </Route>

          <Route path={['/logged']}>
            <PrivateLayout>
              <Switch>
                <Route>
                  <Inside/>
                </Route>
              </Switch>

            </PrivateLayout>
          </Route>

          <Route path={['/test','/']}>
            <HomeLayout>
              <Switch>
                <Route path='/test'>
                  <TestPage/>
                </Route>
              </Switch>
              <Switch>
                <Route path='/'>
                  <Home/>
                </Route>
              </Switch>
            </HomeLayout>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
