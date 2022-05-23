import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase-config';
import './App.css';
import DetailPage from './pages/detail';
import HomePage from './pages/home';
import LayoutPage from './pages/layout';
import LoginPage from './pages/login';
import Footer from './pages/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  const [id, setId] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);
  return (
    <div className="App">
      {/* <LayoutPage user={user} /> */}
      <PostIdContext.Provider value={{ id, setId }}>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/home" element={<HomePage user={user} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </PostIdContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}
export const PostIdContext = createContext();

export default App;
