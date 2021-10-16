import './App.css';
import Header from './pages/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Form/Login/Login';
import Singup from './pages/Form/Singup/Singup';
import AuthProvider from './AuthProvider/AuthProvider';
import Footer from './pages/Home/Footer/Footer';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/singup'>
            <Singup />
          </Route>
          <PrivateRoute path='/cart'>
            <Cart />
          </PrivateRoute>
          <Route path='/placeorder'>
            <PlaceOrder />
          </Route>
          <Route path='/food/:foodId'>
            <FoodDetails />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
export default App;
