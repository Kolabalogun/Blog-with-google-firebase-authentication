import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Backend/Firebase";

const CreatePost = ({ isLogIn }) => {
  const navigate = useNavigate();
  const [title, titleF] = useState("");
  const [postText, postTextF] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isLogIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title :</label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              titleF(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post :</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              postTextF(e.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
