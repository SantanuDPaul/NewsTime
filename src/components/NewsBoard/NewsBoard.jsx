import { useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem';

const NewsBoard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])

    return (
        <div>
            <h2 className="text-center my-2">Latest <span className='badge text-bg-danger fs-4'>News</span>
            </h2>
            <div
                className="mx-auto mt-2"
                style={{ width: "205px", height: "4px", backgroundColor: "#ff0000ff" }}
            ></div>

            {articles.map((news, index) => {
                return <NewsItem key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url} />
            })}
        </div>
    )
}

export default NewsBoard