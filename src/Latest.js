import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Latest(props) {
  // const [data, setData] = useState();
  // const [loaded, setLoaded] = useState(false);
  // const params = useParams();
  // console.log(params.category);
  const [cot, setCot] = useState(4);

  // useEffect(() => {
    // var url =
    //   "https://newsapi.org/v2/top-headlines?" +
    //   "country=us&" +
    //   "apiKey=7c175424d17e40a3ae9481bc10d85a8f";
    // var url  = "https://blog-projectby-narendra.onrender.com/" + params.category
    // var req = new Request(url);
    // fetch(req).then((resp) => {
    //   resp.json().then((data) => {
    //     setData(data);
    //     setLoaded(true);
    //     console.log(data);
    //   });
    // });
  // }, [params]);
  console.log("Props", props.props);

  const {data1, data2, data3, data5} = props.props
  // if (loaded) {
  return (
    <div>
      <div>
        <h1>Latest Articles</h1>
        <hr className="myhr" />

        <div className="mainFirst">
          <img className="mmypic" src={data1[55].urlToImage} alt="lod.." />
          <div className="sistum">
            <Link to={`/ClickPage/${data1[55].title}`} state={data1[55]}>
              <h4 className="heading">{data1[55].title} </h4>
            </Link>
            <p>{data1[55].content}</p>
          </div>
        </div>
        <div className="mainFirst">
          <img className="mmypic" src={data3[55].urlToImage} alt="lod.." />
          <div className="sistum">
            <Link to={`/ClickPage/${data3[55].title}`} state={data3[55]}>
              <h4 className="heading">{data3[55].title} </h4>
            </Link>
            <p>{data3[55].content}</p>
          </div>
        </div>
        <div className="mainFirst">
          <img className="mmypic" src={data5[55].urlToImage} alt="lod.." />
          <div className="sistum">
            <Link to={`/ClickPage/${data5[55].title}`} state={data5[55]}>
              <h4 className="heading">{data5[55].title} </h4>
            </Link>
            <p>{data5[55].content}</p>
          </div>
        </div>
        <div className="mainFirst">
          <img className="mmypic" src={data2[55].urlToImage} alt="lod.." />
          <div className="sistum">
            <Link to={`/ClickPage/${data2[55].title}`} state={data2[55]}>
              <h4 className="heading">{data2[55].title} </h4>
            </Link>
            <p>{data2[55].content}</p>
          </div>
        </div>
      </div>
      <p
        onClick={() => {
          setCot(cot + 4);
        }}
        className="lM"
      >
        Load More ⬇️
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

export default Latest;
