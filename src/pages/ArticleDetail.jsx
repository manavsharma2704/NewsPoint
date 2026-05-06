import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  

  return (
    <div className="w-3xl mx-auto px-6 py-10 bg-white border border-black min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-8 font-bold uppercase text-[10px] border border-black px-4 py-2 hover:bg-black hover:text-white transition">
        Back
      </button>

      <div className="text-center border-b-2 border-black pb-6 mb-8">
        <h1 className="text-4xl font-serif font-black uppercase  italic">{article.title}</h1>
        <p className="mt-4 text-[14px] font-bold text-gray-500 uppercase ">{article.source.name}</p>
      </div>

      <div className="space-y-6">
        <img src={article.urlToImage} className="w-full border-2 border-black p-1" />
        <p className="font-serif text-[16px] font-bold italic">{article.description}</p>
        <div className="font-serif text-[18px] text-justify first-letter:text-2xl first-letter:font-black  ">
          {article.content?.split('[')[0]}
          
        </div>
        <div className="pt-10 text-center">
            <a 
              href={article.url} target="_blank" 
              className=" bg-black text-white px-6 py-3 font-bold uppercase text-[12px] hover:bg-gray-800 transition"
            >
              Read Full Article at {article.source?.name}
            </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;