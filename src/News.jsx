import React, { useState, useEffect } from "react";
import "./News.css";

function News() {
  const [currentNews, setCurrentNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5050/getUrgentNews');
        const data = await response.json();
        setCurrentNews(data);
        console.log(currentNews)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleRefreshClick = async () => {
    try {
      const response = await fetch('http://localhost:5050/getUrgentNews');
      const data = await response.json();
      setCurrentNews(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="news-container">
      <h1 className="news-header">Current News</h1>
      <div className="news-list">
        {currentNews.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <h2 className="news-title">{newsItem.title}</h2>
            <p className="news-content">{newsItem.content}</p>
          </div>
        ))}
      </div>
      <button className="refresh-button" onClick={handleRefreshClick}>
        Refresh
      </button>
    </div>
  );
}

export default News;