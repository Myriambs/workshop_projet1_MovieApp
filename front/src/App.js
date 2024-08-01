
import './App.css';
import MovieList from './composants/movieList/MovieList';
import MovieAdd from './composants/movieAdd/MovieAdd'

//partie route , navigation 
import {Routes,Route} from 'react-router-dom'
import Update from './composants/uodateMovie/Update';
function App() {
  return (
    <div> 
      

      <Routes>
        <Route path='/' element={ <MovieList/>} />
        <Route path='/add' element={<MovieAdd/>}/>
        <Route path="/updateMovie/:id" element={<Update/>}/>
      </Routes>
     
      
      
      </div>
  );
}

export default App;
