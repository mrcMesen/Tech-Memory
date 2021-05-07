import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Game } from '../pages/Game';
import { Records } from '../pages/Records';

// import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default App;
