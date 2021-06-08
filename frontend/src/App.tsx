import { Route, Switch } from 'react-router';
import LoginPage from './pages/LoginPage';

import './styles/base.css';

export default function App() {
  return (
    <Switch>
      <Route path='/login' exact component={LoginPage} />
    </Switch>
  );
}
