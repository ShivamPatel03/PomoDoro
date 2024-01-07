import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './PomodoroLogin/Authenticaion/Login';
import Pomodoro from './PomodoroLogin/Authenticaion/Pomodoro';
function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/timer' element={<Pomodoro/>}></Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
