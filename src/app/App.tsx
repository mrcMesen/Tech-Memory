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
            <Route path='/'>
              <Game />
            </Route>
            <Route path='/records'>
              <Records />
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </MemoryProvider>
  );
}
