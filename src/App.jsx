import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  

  const api = '1b568a2ea974404cb8ca39d48ae61249';

  useEffect(() => {
    
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        
      })
      .catch(() => console.log("error"));
  }, [category]);

  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      <div className="fixed top-0 left-0 w-full z-1 ">
        <Navbar setCategory={setCategory} activeCategory={category} />
      </div>

      
      <div className="pt-40 md:pt-56 pb-10">
        <Routes>
          <Route path="/" element={<Home articles={articles}/>} />
          <Route path="/article" element={<ArticleDetail/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;