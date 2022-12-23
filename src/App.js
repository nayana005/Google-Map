
import { Provider } from 'react-redux';
import './App.css';
import MapView from './components/map/MapView';
import store from './components/redux/store';
import Router1 from './components/router/router';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import MapTab from './components/tabs/Tab';
import TabularView from './components/tabular/TabularView';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
    
      <Provider store = {store}>
        <Router1></Router1>
     </Provider>

    </div>
  );
}

export default App;