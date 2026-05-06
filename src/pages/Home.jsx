import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ articles }) => {
  const navigate = useNavigate();



  return (
    
   
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row ">


      {/* left */}
      <div className="hidden lg:block lg:w-1/4 sticky top-60 h-fit pr-4">
        <h2 className="font-serif font-black uppercase border-b-2 border-black mb-4 text-xl">Editorial</h2>
        {articles.slice(1, 4).map((art, i) => (
          <div key={i} className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-serif font-bold text-xs uppercase">{art.title}</h3>
            <button onClick={() => navigate('/article', { state: { article: art } })} className="text-[10px] font-bold border-b border-black uppercase mt-2">Read</button>
          </div>
        ))}
      </div>

      {/* middle */}
      <div className="w-full lg:w-1/2 px-4 lg:border-x lg:border-gray-300 min-h-screen">
        {articles.map((art, i) => (
          <div key={i} className="mb-10 border-b-2 border-black pb-8">

            
            {art.urlToImage && (
              <div
                className="cursor-pointer overflow-hidden border border-black p-1 mb-4 "
                onClick={() => navigate('/article', { state: { article: art } })}
              >
                <img
                  src={art.urlToImage}
                  className="w-full h-56 md:h-120 object-cover  "
                  alt="news"
                />
              </div>
            )}

            <h1
              className="text-2xl md:text-3xl font-serif font-black uppercase  hover:underline cursor-pointer"
              onClick={() => navigate('/article', { state: { article: art } })}
            >
              {art.title}
            </h1>

            <p className="mt-4 font-serif text-sm text-gray-700 ">
              {art.description}
            </p>
          </div>
        ))}
      </div>

      {/* right  */}
      <div className="hidden lg:block lg:w-1/4 sticky top-60 h-fit pl-4 text-right">
        <h2 className="bg-black text-white text-center py-1 text-[14px] font-bold mb-4 ">BRIEFS</h2>
        {articles.slice(4, 10).map((art, i) => (
          <div key={i} className="mb-4 border-b border-gray-100 pb-2">
            <p className="text-[10px] font-bold uppercase cursor-pointer hover:italic" onClick={() => navigate('/article', { state: { article: art } })}>
              {art.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;