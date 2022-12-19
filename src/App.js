
import { Provider } from 'react-redux';
import './App.css';
import MapView from './components/map/MapView';
import store from './components/redux/store';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
       {/*  <SignUp></SignUp>*/}
       {/* <SignIn></SignIn>   
       <Dashboard></Dashboard> */}
      <Provider store = {store}>
      {/* <SignIn></SignIn>  */}

      <MapView></MapView>

      </Provider>
    </div>
  );
}

export default App;