import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SongList from './components/SongList';
import CreateSong from './components/CreateSong';
import EditSong from './components/EditSong';
import Home from './components/Home';
import ShowList from './components/ShowList';
import CreateShow from './components/CreateShow';
import EditShow from './components/EditShow';
import Navigation from './components/Navigation';
import Merch from './components/Merch';


//Main app component. Holds all the routes to the other parent components.
//Footer attached to the bottom that displays on all pages
function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/setlist" element={<SongList />}></Route>
          <Route path="/song/create" element={<CreateSong />}></Route>
          <Route path="/song/edit/:songid" element={<EditSong />}></Route>
          <Route path="/shows" element={<ShowList />}></Route>
          <Route path="/shows/create" element={<CreateShow />}></Route>
          <Route path="/shows/edit/:showid" element={<EditShow />}></Route>
          <Route path="/merch" element={<Merch />}></Route>

        </Routes>
      </BrowserRouter>
      <div className="footer bg-dark">
        <h5 id="footerText" className="text-light text-center">Band management app prototype developed by Brad Mohoric</h5>
      </div>
    </div>
  );
}

export default App;
