import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SearchFilms from '../pages/SearchFilms';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={SearchFilms} />
    </Switch>
  );
};

export default Routes;
