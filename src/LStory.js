import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function LStory(props) {
  // const [data, setData] = useState();
  // const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const nav = useNavigate();

  // const [count, setCount] = useState(3);

  // const date = new Date();
  // const dateString =
  //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  useEffect(() => {
    // var url =
    // "https://newsapi.org/v2/everything?q=" +
    // params.category +
    // "&from=" +
    // dateString +
    // "&sortBy=publishedAt&language=en&apiKey=7c175424d17e40a3ae9481bc10d85a8f";
    // var url  = "https://blog-projectby-narendra.onrender.com/" + params.category
    // var url = "https://blogdata.onrender.com/" + params.category;
    // var url =
    //   "https://newsapi.org/v2/top-headlines?" +
    //   "sources=bbc-news&" +
    //   "apiKey=7c175424d17e40a3ae9481bc10d85a8f";
  }, [params]);

  console.log("Props", props.props);
  const { data1, data2} = props.props;
  console.log("Data1", data1);
  // if (loaded) {
  return (
    <div className="DownSide">
      <hr className="shiro" />
      <h1>Latest Stories</h1>
      <div className="gasli">
        <div className="kasama">
          <div className="side-box">
            <Link to={`/ClickPage/${data1[0].title}`} state={data1[0]}>
              <h3 className="heading">{data1[0].title} </h3>
            </Link>
            <p className="cont">{data1[0].content}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link to={`/ClickPage/${data2[0].title}`} state={data2[0]}>
              <h3 className="heading">{data2[0].title} </h3>
            </Link>
            <p className="cont">{data2[0].content}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link to={`/ClickPage/${data1[59].title}`} state={data1[0]}>
              <h3 className="heading">{data1[59].title} </h3>
            </Link>
            <p className="cont">{data1[59].content}</p>
            <br />
          </div>
        </div>
      </div>
      <hr className="shiro" />
      <p
        className="lM"
        onClick={() => {
          nav("/bollywood");
        }}
      >
        View More ➡️
      </p>
    </div>
  );
  // } else {
  //   return (
  //     <div className="lodwalpart">
  //       <h1 className="loading">Loading...</h1>;
  //     </div>
  //   );
  // }
}

export default LStory;
