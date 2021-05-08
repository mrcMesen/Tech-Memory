import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Game } from '../pages/Game';
import { Records } from '../pages/Records';
import { MemoryProvider } from '../state/Memory';

export default function App() {
  return (
    <MemoryProvider>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Game />
            </Route>
            <Route exact path='/home'>
              <Game />
            </Route>
            <Route exact path='/records'>
              <Records />
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </MemoryProvider>
  );
}
