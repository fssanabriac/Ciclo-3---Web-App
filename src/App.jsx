import 'styles/styles.css';
import HomeLayout from 'layouts/HomeLayout';
import LoginLayout from 'layouts/LoginLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import PrivateLayoutSeller from 'layouts/PrivateLayoutSeller';

import Home from 'pages/Index';
import TestPage from 'pages/test_page';
import Register from 'pages/register';
import Login from 'pages/login';
import Inside from 'pages/private/inside';
import Seller from 'pages/private/seller'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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

          <Route path={['/seller']}>
            <PrivateLayoutSeller>
              <Switch>
                <Route path='/seller'>
                  <Seller/>
                </Route>
              </Switch>
            </PrivateLayoutSeller>
          </Route>

          <Route path={['/test','/admin']}>
            <PrivateLayout>
              <Switch>
                <Route>
                  <Inside/>
                </Route>
              </Switch>
              <Switch>
                <Route path='/test'>
                  <TestPage/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>

          <Route path={['/']}>
            <HomeLayout>
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
