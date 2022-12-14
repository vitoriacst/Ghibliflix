import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Location from '../pages/Location';
import People from '../pages/Peoples';
import SearchFilms from '../pages/SearchFilms';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={SearchFilms} />
      <Route exact path="/peoples" component={People} />
      <Route exact path="/locations" component={Location} />
    </Switch>
  );
};

export default Routes;
