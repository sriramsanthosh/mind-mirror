import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import { useParams } from 'react-router-dom';
import UserSession from './pages/user-session';
import NewEntry from './components/user-session/new-entry';
import ViewEntry from './components/user-session/view-entry';


function App() {

  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/user-session/:user_id' element={<UserSession />} />
        <Route exact path='/user-session/:user_id/new-entry' element={<NewEntry />} />
        <Route exact path='/user-session/:user_id/view-entry/:entry_id' element={<ViewEntry />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
