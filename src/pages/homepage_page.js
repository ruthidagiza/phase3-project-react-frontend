import axios from "axios";
import React, { useState, useEffect } from "react";

import ArticleComponent from "../components/article_component";
import { productionUrl } from "../models/constants";

function Homepage() {
  const [artcles, setArtcles] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchArticlesFromBackend = async () => {
    try {
      let res = await axios.get(`${productionUrl}/articles`);
      setArtcles(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchArticlesFromBackend();
  }, []);
  return (
    <div className="flex flex-col w-full">
      {!loading ||
        (artcles.length < 1 && (
          <div className="flex flex-col justify-center items-center w-full h-[60vh]">
            {!loading && (
              <p className="text-sm text-teal-700">Loading Articles ...</p>
            )}
            {artcles.length < 1 && (
              <p className="text-sm text-red-500">
                No articles saved in the server
              </p>
            )}
          </div>
        ))}

      {!loading &&
        Array(2)
          .fill(1)
          .map((e, i) => <ArticleComponent key={i} />)}
    </div>
  );
}

export default Homepage;
