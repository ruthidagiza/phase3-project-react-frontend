import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { productionUrl } from "../models/constants";
import { Link } from "react-router-dom";

function ArticleComponent() {
  const [deleting, setDeleting] = useState(false);
  const deleteArticle = async () => {
    setDeleting(true);
    try {
      let res = await axios.delete(`${productionUrl}/article/id`);
      if (res.status == 200) {
        //fetch updated articles
      }
    } catch (e) {
      console.log(e);
    } finally {
      setDeleting(false);
    }
  };
  const [likes, setLikes] = useState(10);
  return (
    <div className="flex flex-col p-1 m-1 rounded-lg border-[0.5px] border-gray-400 w-6/6">
      <div className="flex justify-between items-center w-6/6">
        {" "}
        <h2 className="text-xl">Anim et sunt eiusmod consectetur.</h2>
        <p className="text-xs">{moment("2022-9-13").fromNow()}</p>
      </div>

      <div className="text-sm leading-4 text-gray-700">
        Cillum duis ea est commodo sint occaecat sunt ut labore pariatur.
        Nostrud ipsum id tempor adipisicing ex dolor dolor irure sit minim
        cupidatat dolor. Ea duis Lorem ipsum ullamco voluptate amet irure id.
        Sint culpa elit ipsum nulla aliquip adipisicing ullamco. Labore duis
        dolore occaecat in voluptate cupidatat anim tempor occaecat laboris
        ipsum officia. Excepteur ullamco aliquip sit voluptate officia voluptate
        sunt anim sit qui do qui est.
      </div>
      <div className="flex justify-between w-6/6 pr-5">
        <div className="flex items-end">
          <p className="text-sm">Written By {"ruth "}</p>
          <div
            onClick={() => setLikes(likes + 1)}
            className="flex ml-4 text-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>
            {likes} likes
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/update_article">
            <div className="text-xs p-0.5 px-2 rounded-lg bg-teal-600 text-white cursor-pointer">
              Update
            </div>
          </Link>
          <div
            onClick={deleteArticle}
            className="text-xs p-0.5 px-2 rounded-lg bg-red-500 text-white cursor-pointer"
          >
            {deleting ? "deleting ..." : "Delete"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleComponent;
