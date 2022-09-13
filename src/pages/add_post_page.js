import React, { useState } from "react";

function AddNewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writersName, setWritersName] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl">Add new Article page</h2>
      <div className="flex flex-col md:w-[700px] w-full p-2 text-gray-800 ">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none rounded-lg ring-1 focus:ring-teal-700  text-sm p-1 ring-gray-400  my-1"
          placeholder="article title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={7}
          className="outline-none rounded-lg ring-1 focus:ring-teal-700  text-sm p-1 ring-gray-400  my-1"
          placeholder="article content"
        />
        <input
          value={writersName}
          onChange={(e) => setWritersName(e.target.value)}
          className="outline-none rounded-lg ring-1 focus:ring-teal-700  text-sm p-1 ring-gray-400  my-1"
          placeholder="writer name"
        />
        <div className="flex justify-end w-full px-2">
          <div className="px-5 cursor-pointer py-1 rounded-lg bg-teal-700 text-white mt-5 text-sm ">
            Save Article
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewPostPage;
