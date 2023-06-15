import React from "react";
import { Link } from "react-router-dom";

function ReTop(props) {
  const { data1, data2, data3, data4 } = props.props;
  return (
    <div className="rightSide">
      <div className="hunter">
      <div className="ADD"><h1 className="myad">Advertisement</h1></div>
        <h1>Top Post</h1>

        <div className="firstPage">
          <img
            src={data4[28].urlToImage}
            alt={<img src="" alt="TheSiren" />}
            className="mypic"
          />
          <Link to={`/ClickPage/${data4[28].title}`} state={data4[28]}>
            <h4 className="heading">{data4[28].title} </h4>
          </Link>
          <p className="side-diff">{data4[28].content}</p>
        </div>

        {/* Down Tree */}

        <div className="pikachu">
          <img className="repic" src={data1[88].urlToImage} alt="loding...." />
          <div className="side-cont">
            <Link to={`/ClickPage/${data1[88].title}`} state={data1[88]}>
              <h5 className="heading">{data1[88].title} </h5>
            </Link>
            <p>{data1[88].content}</p>
            <br />
          </div>
          <hr />
        </div>
        <div className="pikachu">
          <img className="repic" src={data3[64].urlToImage} alt="loding...." />
          <div className="side-cont">
            <Link to={`/ClickPage/${data3[64].title}`} state={data3[64]}>
              <h5 className="heading">{data3[64].title} </h5>
            </Link>
            <p>{data3[64].content}</p>
            <br />
          </div>
          <hr />
        </div>
        <div className="pikachu">
          <img className="repic" src={data2[91].urlToImage} alt="loding...." />
          <div className="side-cont">
            <Link to={`/ClickPage/${data2[91].title}`} state={data2[91]}>
              <h5 className="heading">{data2[91].title} </h5>
            </Link>
            <p>{data2[91].content}</p>
            <br />
          </div>
          <hr />
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
}

export default ReTop;
