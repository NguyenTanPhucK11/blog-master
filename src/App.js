import { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/detail';
import HomePage from './pages/home';
import LayoutPage from './pages/layout';
import LoginPage from './pages/login';

function App() {
  const [id, setId] = useState(0);

  return (
    <div className="App">
      <LayoutPage />
      <PostIdContext.Provider value={{ id, setId }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </PostIdContext.Provider>
    </div>
  );
}
export const PostIdContext = createContext();

export default App;
