import { useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-2">
        Latest <span className='badge text-bg-danger fs-4'>News</span>
      </h2>
      <div
        className="mx-auto mt-2"
        style={{ width: "205px", height: "4px", backgroundColor: "#ff0000ff" }}
      ></div>

      {error && <p className="text-center text-danger">⚠️ {error}</p>}

      {articles?.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  )
}

export default NewsBoard
