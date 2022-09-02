import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebsae-config";

const Home = ({isAuth}) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "post", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div
                className="deletePost"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button> &#128465;</button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>posted by {post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
