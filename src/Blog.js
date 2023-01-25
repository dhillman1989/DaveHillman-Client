import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";
import {withStyles} from "@material-ui/styles";

import {setAlert} from "./actions/alert";



//styles
import styles from "./styles/BlogStyles.js";

//components


const Blog = (props) => {
  const {classes} = props;
  const [posts, setPosts] = useState(null);
  const [commentTarget, setCommentTarget] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const getBlogPosts = async () => {
    const res = await axios.get("/blog/post");
    console.log(res.data || "no data");
    setPosts(res.data);
  }
  
  const openCommentForm = (id) => {
    setCommentTarget(id);
    setShowCommentForm(true);
  }

  const addComment = async (e, id) =>{
      e.preventDefault();
      
      const config = {
          headers: {
              "Content-Type": "application/json"
          }
      }

      const body = { email: "email", comment: "comment"};

      try {
          await axios.put(`/blog/post/${id}/comment`, body, config);
      } catch (error) {
          setAlert("Server Error", "danger");
      }
  }



  useEffect(() => {
    getBlogPosts();
  }, []);
  

  return (
    <div className={classes.Blog}>
        <h1>Dave Hillman - Blog</h1>
        {posts ===  null  
          ? <p>Loading...</p> 
          : posts.map(post => 
              <div key={post._id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <h6>{moment(post.date).format('YYYY-MM-DD')}</h6>
                <button onClick={()=>openCommentForm(post._id)}>Add Comment</button>
                
              </div>
            )
        }
        {showCommentForm !== false && 
          <form className={classes.commentForm} onSubmit={(e) => addComment(e, commentTarget)}>
            <input name="email"/>
            <input name="comment"/>
            <button>Submit</button>
          </form>
        }
    </div>
  )
};


export default withStyles(styles)(Blog);

