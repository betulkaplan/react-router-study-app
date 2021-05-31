import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Detail from './components/details/Detail';

function App() {
  return (
    <BrowserRouter>
      <h1 style={{ textAlign: 'center' }}>React Router</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
