import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Game } from '../pages/Game';
import { Records } from '../pages/Records';

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Game />
          </Route>
          <Route path='/records'>
            <Records />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
