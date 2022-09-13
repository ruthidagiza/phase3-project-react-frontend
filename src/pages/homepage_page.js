import axios from "axios";
import React, { useState } from "react";

import ArticleComponent from "../components/article_component";
import { productionUrl } from "../models/constants";

function Homepage() {
  const [artcles, setArtcles] = useState([]);
  const fetchArticlesFromBackend = async () => {
    try {
      let res = await axios.get(`${productionUrl}/articles`);
      setArtcles(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col w-full">
      {Array(4)
        .fill(1)
        .map((e, i) => (
          <ArticleComponent key={i} />
        ))}
    </div>
  );
}

export default Homepage;
