import './App.css';
import AlbumPage from './features/Albums';
import HomePage from './pages/home';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './pages/detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
