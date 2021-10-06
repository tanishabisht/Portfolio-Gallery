import { HashRouter, Switch, Route } from 'react-router-dom'
import { Gallery, Slider } from './Pages'
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className='bg'>
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/:name' component={Slider} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;