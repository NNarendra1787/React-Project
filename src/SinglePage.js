import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import myAdd from './videos/'
// import './mainpart.css'
// import AD from './videos/notworkin.jpg'

function SinglePage() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  const [count, setCount] = useState(4);
  const [cot, setCot] = useState(1);

  const date = new Date();
  const dateString =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  useEffect(() => {
    // var url =
    //   "https://newsapi.org/v2/everything?q=" +
    //   params.category +
    //   "&from=" +
    //   dateString +
    //   "&sortBy=publishedAt&language=en&apiKey=7c175424d17e40a3ae9481bc10d85a8f";

    var url = "https://blog-projectby-narendra.onrender.com/" + params.category;

    // var url = 'https://newsapi.org/v2/top-headlines?'+
    //       'country=us&' +
    //       'apiKey=7c175424d17e40a3ae9481bc10d85a8f';

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
      <div className="sideNews">
        <div className="Richu">
          <h1>Top Post</h1>
          {/* {data.articles.map((sd, index) => {  */}
          {data.map((sd, index) => {
            // console.log(count, index);
            if (index < cot) {
              return (
                <div key={index} className="first">
                  <img
                    src={sd.urlToImage}
                    alt={<img src="" alt="TheSiren" />}
                    className="mypic"
                  />
                  <Link to={`/ClickPage/${sd.title}`} state={sd}>
                    <h4 className="heading">{sd.title} </h4>
                  </Link>
                  <p className="St-cont">{sd.content}</p>
                </div>
              );
            }
            if (index < count) {
              return (
                <div className="pikachu" key={index}>
                  <img
                    className="repic"
                    src={sd.urlToImage}
                    alt={<img src="./videos/notworking.jpg" alt="TheSiren" />}
                  />
                  <div className="side-cont">
                    <Link to={`/ClickPage/${sd.title}`} state={sd}>
                      <h5 className="heading">{sd.title} </h5>
                    </Link>
                    <p>{sd.content}</p>
                    <br />
                  </div>
                  <hr />
                </div>
              );
            }
          })}
          <div className="AD">
          {/* <img src={AD} alt="not show" />  */}
          
          </div>
        </div>
        {/* <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Lode More
        </button> */}
      </div>
    );
  } else {
    return (
      <div className="lodwalpart">
        <h1 className="loading">Loading...</h1>;
      </div>
    );
  }
}

export default SinglePage;
