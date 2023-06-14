import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SinglePage from "./SinglePage";
import Navbar from "./Navbar";
import './responsive.css'
import notloading from "./videos/cached_FILL0_wght400_GRAD0_opsz48.svg";

function OpenPage() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  var stringTitle = params.category;
  stringTitle = stringTitle.toUpperCase();

  const [count, setCount] = useState(7);

  const date = new Date();
  const dateString = "2022-05-31";

  useEffect(() => {
    var url = "https://blog-projectby-narendra.onrender.com/" + params.category;

    // "https://newsapi.org/v2/everything?q=" +
    // params.category +
    // "&from=" +
    // dateString +
    // "&sortBy=publishedAt&language=en&apiKey=7c175424d17e40a3ae9481bc10d85a8f";

    var req = new Request(url);
    fetch(req).then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoaded(true);
        console.log(data);
      });
    });
  }, [params]);

  if (loaded) {
    return (
      <>
        <Navbar />
        <div className="Main">
          <div className="NewsPage">
            <h1>{stringTitle}</h1>
            {data.map((article, index) => {
              // console.log(count, index);

              if (index < count) {
                return (
                  <div className="articuno" key={index}>
                    <img className="pic" src={article.urlToImage} alt="Load" />

                    <div className="text-content">
                      <Link to={`/CLickPage/${article.title} `} state={article}>
                        <h4 className="heading">{article.title}</h4>
                      </Link>

                      <p className="content">{article.content}</p>

                      <p className="published">{article.publishedAt}</p>
                    </div>
                  </div>
                );
              }
            })}
            <p
              className="lM"
              onClick={() => {
                setCount(count + 7);
              }}
            >
              Load More ⬇️
            </p>
          </div>
          <SinglePage />
        </div>
      </>
    );
  } else {
    return (
      <div className="lodwalpart">
        <h1 className="loading">Loading...</h1>;
      </div>
    );
  }
}

export default OpenPage;
