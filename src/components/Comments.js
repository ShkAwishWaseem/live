import React, { useState , useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken"
import { secret } from "@/services/authentication";
import Usercomments from "./Usercomments";
import EmojiPicker from 'emoji-picker-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = () => {
  const router = useRouter();
  const { id } = router.query;

  const [comment, setComment] = useState("");
  const [username, setUsername] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [isToggled, setToggled] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              if (id) {
                  // Fetch comments for the specific blog using Axios GET request
                  const response = await axios.get(`/api/get-comments/${id}`);
                  console.log(response.data);
                  setCommentsData(response.data);
                }
            } catch (error) {
                console.error("Error fetching comments", error);
            }
        };

        fetchData(); 
    }, [id]);
    
    const commentLength = commentsData.length
//   Hnadler Function :
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // Get user name from localStorage
    const Token = JSON.parse(localStorage.getItem("token"));
    const decodedToken = jwt.decode(Token, secret);
    const name = decodedToken.name;
    const email = decodedToken.email;
    setUsername(name);
    setUserEmail(email);

    

    try {
      // Make an Axios POST request
      if(id) {
      const response = await axios.post(
        "/api/comment",
        {
          BlogId : id,
          userName : username,
          content : comment,
          email : useremail
        }
      );
      
      // console.log(response)
      console.log("Comment posted successfully", response.data);
      
      if(response.status == 200) {
        toast("Comment Posted Successfully 👍");
        setComment("")
        setToggled(false)
      }
    }
    // Handle the response as needed
    } catch (error) {
      // Handle errors
      console.error("Error posting comment", error);
    }
  };
  function emojiHandler(e) {
    setComment((prevComment) => prevComment + e.emoji);
    
  }
  const toggle = () => {
    setToggled(!isToggled);
  };
  return (
    <>
     <ToastContainer />
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion {commentLength}
            </h2>
          </div>

          <form className="mb-6" onSubmit={handleCommentSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                asd
              </label>
              {isToggled && (
              <EmojiPicker
                disableAutoFocus={true}
                onEmojiClick={emojiHandler}
                groupVisibility={{
                  recently_used: false,
                }}
              />
            )}
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white    rounded-lg primary-btn"
            >
              Post comment
            </button>
          </form>
          {isToggled ?  
          (
            <button
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg bg-blue-900"
            onClick={toggle}
            >
              Close emojis
            </button>
            
            ):  <button
            className=" inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg bg-blue-900"
            onClick={toggle}
            >
              Open emojis
            </button>}



      {/* Arrays Sections / OR comments data :  */}


    {Array.isArray(commentsData) && 
            commentsData.map((item) => {
                return(
                    <div key={item._id}>
                        <Usercomments  name={item.userName} time={item.createdAt} comment={item.content}
                        />
                    </div>
                
                )
            })
    }

     
    
    
    </div>
      </section>
    </>
  );
};

export default Comments;

