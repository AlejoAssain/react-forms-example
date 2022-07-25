import { Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login'


const App = () => {
  return (
    <div id="App">
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
