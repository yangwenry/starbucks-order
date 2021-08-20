import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import Navibar from './views/NavBar/NavBar'
import CoffeePage from './views/CoffeePage/CoffeePage';
import BeveragePage from './views/MenuPage/BeveragePage';
import MenuDetail from './views/MenuDetail/MenuDetail';

function App() {
  return (
    <div>
      <Navibar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/coffee" component={CoffeePage} />
        <Route exact path="/menu/beverage" component={BeveragePage} />
        <Route exact path="/detail/:coffeeId" component={MenuDetail} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>  
    </div>  
  );
}

export default App;
