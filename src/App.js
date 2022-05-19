import { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/detail';
import HomePage from './pages/home';

function App() {
  const [id, setId] = useState(0);

  return (
    <div className="App">
      <PostIdContext.Provider value={{ id, setId }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </PostIdContext.Provider>
    </div>
  );
}
export const PostIdContext = createContext();

export default App;
