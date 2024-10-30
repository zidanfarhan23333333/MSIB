import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const FetchData = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          q: "election",
          "api-key": "gRBRq91XAwa6YaMXi5YoaJ0lNg6VYXMY",
        },
      })
      .then((res) => {
        setNews(res.data.response.docs);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {news.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                src={
                  item.multimedia?.[0]?.url
                    ? `https://www.nytimes.com/${item.multimedia[0].url}`
                    : "https://via.placeholder.com/150"
                }
                className="card-img-top"
                alt="News Image"
              />
              <div className="card-body">
                <h5 className="card-title">{item.abstarck}</h5>
                <p className="card-text">{item.lead_paragraph}</p>
                <p className="card-text">
                  <strong>Status:</strong> Not Completed
                </p>
                <a
                  href={item.web_url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
