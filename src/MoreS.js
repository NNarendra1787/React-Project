import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './responsive.css'

function MoreS() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  const [count, setCount] = useState(3);

  useEffect(() => {
    var url = "https://blog-projectby-narendra.onrender.com/technology";

    var req = new Request(url);
    fetch(req).then((res) => {
      res.json().then((data) => {
        setData(data);
        setLoaded(true);
        console.log(data);
      });
    });
  }, [params]);

  if (loaded) {
    return (
      <div className="ReDown">
        <h3>More From The Siren</h3>
        <hr />
        <div className="homi">
          <div className="Boxxer">
            <img src={data[27].urlToImage} alt="NoImage" className="minImg" />
            <Link to={`/ClickPage/${data[27].title}`} state={data[27]}>
              <h3 className="text-wid">{data[27].title} </h3>
            </Link>
          </div>
          <div className="Boxxer">
            <img src={data[38].urlToImage} alt="NoImage" className="minImg" />
            <Link to={`/ClickPage/${data[38].title}`} state={data[38]}>
              <h3 className="text-wid">{data[38].title} </h3>
            </Link>
          </div>
          <div className="Boxxer">
            <img src={data[65].urlToImage} alt="NoImage" className="minImg" />
            <Link to={`/ClickPage/${data[65].title}`} state={data[65]}>
              <h3 className="text-wid">{data[65].title} </h3>
            </Link>
          </div>
        </div>
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

export default MoreS;
