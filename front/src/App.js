
import './App.css';
import MovieList from './composants/movieList/MovieList';
import MovieAdd from './composants/movieAdd/MovieAdd'
import Register from './composants/auth/Register';
import Login from './composants/auth/Login'
import PrivateRoute from "./composants/auth/PrivateRoute"
//partie route , navigation 
import {Routes,Route} from 'react-router-dom'
import Update from './composants/uodateMovie/Update';
function App() {
  return (
    <div> 
      

      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/private" element={<PrivateRoute/>} />
        <Route path='/movieList' element={ <MovieList/>} />
        <Route path='/add' element={<MovieAdd/>}/>
        <Route path="/updateMovie/:id" element={<Update/>}/>
      </Routes>
     
      
      
      </div>
  );
}

export default App;
