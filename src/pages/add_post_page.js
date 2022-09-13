import React, { useState } from "react";

function AddNewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writersName, setWritersName] = useState("");

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl">Add new post page</h2>
    </div>
  );
}

export default AddNewPostPage;
