import {
  BrowserRouter,
  Routes,
  Route
}               from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/login/Login';
import {store} from './redux/store/store';
import {Provider} from 'react-redux';


function App() {
  
  return (
    <Provider store = { store }>
    <BrowserRouter>
      <Routes>
        {/* <Route path='' element = {<Layout/>} > */}
          <Route path='' element={<Login/>}/>
          <Route path='home'  element={<Home/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
