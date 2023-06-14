import React, { useEffect, useState } from "react";
import Latest from "./Latest";
import "./Home.css";
import ReTop from "./ReTop";
import LStory from "./LStory";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import './responsive.css'

function Home() {
  const params = useParams();

  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);
  const [loaded5, setLoaded5] = useState(false);


  useEffect(() => {

    var url1 = "https://blog-projectby-narendra.onrender.com/bollywood";
    var url2 = "https://blog-projectby-narendra.onrender.com/hollywood";
    var url3 = "https://blog-projectby-narendra.onrender.com/food";
    var url4 = "https://blog-projectby-narendra.onrender.com/fitness";
    var url5 = "https://blog-projectby-narendra.onrender.com/technology";


    const req1 = new Request(url1);
    fetch(req1).then((resp) => {
      resp.json().then((data1) => {
        setData1(data1);
        setLoaded1(true);
        // console.log(data);
      });
    });
    const req2 = new Request(url2);
    fetch(req2).then((resp) => {
      resp.json().then((data2) => {
        setData2(data2);
        setLoaded2(true);
        // console.log(data2);
      });
    });
    const req3 = new Request(url3);
    fetch(req3).then((resp) => {
      resp.json().then((data3) => {
        setData3(data3);
        setLoaded3(true);
        console.log("Data3", data3);
      });
    });
    const req4 = new Request(url4);
    fetch(req4).then((resp) => {
      resp.json().then((data4) => {
        setData4(data4);
        setLoaded4(true);
        console.log("Data4", data4);
      });
    });
    const req5 = new Request(url5);
    fetch(req5).then((resp) => {
      resp.json().then((data5) => {
        setData5(data5);
        setLoaded5(true);
        console.log("Data3", data5);
      });
    });
  }, [params]);

  if (loaded1 && loaded2 && loaded3 && loaded4 && loaded5) {
    return (
      <>
        <Navbar />
        <div id="SweetHome">
          {/* <h1>Home Page</h1> */}
          <div className="Topper">
            <section className="Topver">
              <aside id="TopLeft">
                <img
                  className="topImg"
                  src={data1[28].urlToImage}
                  alt="load"
                  onError={() => {
                    console.log("Having Error");
                  }}
                />
                <Link to={`/ClickPage/${data1[28].title}`} state={data1[28]}>
                  <h3 className="letfull">{data1[28].title} </h3>
                </Link>
              </aside>
              <section className="RightSideSet">
                <aside id="TopRight">
                  <img
                    className="sideTopImg"
                    src={data2[30].urlToImage}
                    alt="load"
                  />
                  <Link to={`/ClickPage/${data2[30].title}`} state={data2[30]}>
                    <h5 className="topRight">{data2[30].title} </h5>
                  </Link>
                </aside>
                <aside id="BottomRight">
                  <img
                    className="sideImg"
                    src={data3[40].urlToImage}
                    alt="load"
                  />
                  <Link to={`/ClickPage/${data3[40].title}`} state={data3[40]}>
                    <h5 className="bottomright">{data3[40].title} </h5>
                  </Link>
                </aside>
              </section>
            </section>
          </div>

          {/* Latest wala */}
          <div className="UpSide">
            <h1>The Latest</h1>
            <div className="gasli">
              <div className="Top-let">
                <div className="sid-box">
                  <img src={data1[39].urlToImage} alt="go" className="mg" />
                  <Link to={`/ClickPage/${data1[39].title}`} state={data1[39]}>
                    <h4 className="const">{data1[39].title} </h4>
                  </Link>

                  <p className="const">{data3[61].content}</p>
                </div>
                <div className="sid-box">
                  <img src={data3[61].urlToImage} alt="go" className="mg" />
                  <Link to={`/ClickPage/${data3[61].title}`} state={data3[61]}>
                    <h4 className="const">{data3[61].title} </h4>
                  </Link>

                  <p className="const">{data1[17].content}</p>
                </div>
                <div className="sid-box">
                  <img src={data4[11].urlToImage} alt="go" className="mg" />
                  <Link to={`/ClickPage/${data4[11].title}`} state={data4[11]}>
                    <h4 className="const">{data4[11].title} </h4>
                  </Link>

                  <p className="const">{data4[11].content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="midpart">
            <Latest props={{ data1, data2, data3, data4, data5 }} />
            <ReTop props={{ data1, data2, data3, data4, data5 }} />
          </div>
          <section className="BigigImg">
            <div className="Bimg">
              <img src={data5[49].urlToImage} alt="alt" id="bigImg" />
            </div>
          </section>

          <div>
            <LStory props={{ data1, data2, data3, data4, data5 }} />
          </div>
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

export default Home;
