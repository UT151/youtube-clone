import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Videos from './Components/VideoContent/Videos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<div className="app_content">
            <Sidebar />
            <Videos />
          </div>}>
            {/* <h1>Home Page</h1> */}
          </Route>
          <Route path='/search/:searchTerm' element={<div className="app_content">
            <Sidebar />
            <SearchPage />
          </div>}>
            {/* <h1>Search Page</h1> */}
          </Route>
        </Routes>
      </Router>


    </div >
  );
}

export default App;

