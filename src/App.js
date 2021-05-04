import { Route,NavLink,Switch } from 'react-router-dom';
import './App.css'
import TrendingFilms from './Components/TrendingFilms/TrendingFilms'
import SearchFilms from './Components/SearchFilms/SearchFilms'
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage'
import './styles/base.css'
import Actors from './Components/AdditionalComponents/Actors/Actors';
import Reviews from './Components/AdditionalComponents/Rewievs/Reviews'
const listStyles = {
  base: {
    color:'black'
  },
  active: {
    color:'red'
  }
}
function App() {
  return (
    <>
      <ul className="NavUL">
        <li><NavLink exact className="NavLink" activeClassName="NavLink--active" to="/">Home</NavLink></li>
        <li><NavLink className="NavLink" activeClassName="NavLink--active" to="/searchfilms">Search Films</NavLink></li>
      </ul>
      <Switch>
      <Route exact path="/" component={TrendingFilms} />
        <Route exact path="/searchfilms" component={SearchFilms} />
        
        {/* <Route exact component={TrendingFilms}/> */}
      </Switch>
       <Route  path="/moviedetails/:id" component={MovieDetailsPage} /> 
        <Route  path="/moviedetails/:id/actors" component={Actors} />
        <Route  path="/moviedetails/:id/reviews" component={Reviews}/>
      </>
  );
}

export default App;