import { useState } from 'react'
import './App.css'
import {useNavigate} from "react-router-dom";

function Chat() {

  const navi = useNavigate();  

  return (
    <>
      <div className="padding">
        <div className="abs">
          <div className="panel2">
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/61/61582.png" className="top-ui chat"></img>Chat</button>
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/61/61582.png" className="top-ui chat"></img>Chat</button>
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/61/61582.png" className="top-ui chat"></img>Chat</button>
          </div>
        </div>
        <div className="center blbg">
          <div className="panel">
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/61/61582.png" className="top-ui chat home"></img>Chat</button>
            <button onClick={() => navi("/FAQ")} className="button-hide"><img src="https://static.thenounproject.com/png/7526862-200.png" className="top-ui chat"></img>FAQ</button>
            <button onClick={() => navi("/")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="top-ui chat"></img>Home</button>
            <button onClick={() => navi("/Post")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="top-ui chat"></img>Post</button>
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat"></img>Notes</button>
            <button className="button-hide"><img src="https://img.icons8.com/ios7/512/search--v3.png" className="top-ui chat"></img>Search</button>
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5599/5599504.png" className="top-ui chat"></img>Sign Up</button>
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        
        <div className="homepage"> 
          
          <h1 className="title">C h a t</h1>
          
          <div className="backgroundcolor2">

          <div className="padding2 right">
            
            <div className=" box">
              <div className="col">
                <img className="pfp" src="https://www.myany.city/sites/default/files/styles/scaled_cropped_medium__260x260/public/field/image/node-related-images/sample-dwight-k-schrute.jpg?itok=8TfRscbA"></img><h2 className="name">Dwight</h2> <h3 className="guest ocupation">Identity Theft Profesor</h3>
              </div>
                <div className="ytcontainer">
                  <p className="yt">Hey!</p>
                </div>
                <div>
                <div className="ttcontainer">
                  <p className="tt">Hi! :D</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">Would you like to learn about identity theft and how people suffer from it yearly?</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">Sure!</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">Identity theft happens when someone steals your personal information—like your Social Security number, name, or bank details—to commit fraud or other crimes.People suffer from identity theft in profound financial, emotional, and practical ways.</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">I think I got the gist of identity theft, could you explain more in a more expressive way?</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">Sure! Give me a sec!</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">
                    <img src="https://media.tenor.com/5gn9KBCPM9sAAAAM/not-a-joke-dwight.gif"></img>
                  </p>
                </div>






                </div>
            </div>
          </div>
          <div className="padding4">
            <div className="right">
        
            <div className="box">
            
             
            </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Chat
