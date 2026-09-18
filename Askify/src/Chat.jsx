import { useState } from 'react'
import './App.css'
import {useNavigate} from "react-router-dom";


function Chat() {

  const navi = useNavigate();  

  return (
    <>
    <html className="smooth">
      <div className="padding">
        <div className="abs">
          <div className="panel2">
            <button onClick={() => document.getElementById("c1").scrollIntoView({behavior:"smooth"})} className="button-hide"><img src="https://www.myany.city/sites/default/files/styles/scaled_cropped_medium__260x260/public/field/image/node-related-images/sample-dwight-k-schrute.jpg?itok=8TfRscbA" className="top-ui chat"></img>Dwight</button>
            <button onClick={() => document.getElementById("c2").scrollIntoView({behavior:"smooth"})} className="button-hide"><img src="https://cdn.britannica.com/63/247263-050-3ABF5622/promotional-still-The-Office-Steve-Carell.jpg" className="top-ui chat"></img>Michael</button>
            <button onClick={() => document.getElementById("c3").scrollIntoView({behavior:"smooth"})} className="button-hide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kvUTxJ9OHlFRmVjRl_WW5KHcYocFSWywvFI-7umEy1wx9hMKols5CgA&s=10" className="top-ui chat"></img>Jim???</button>
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
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        
        <div className="homepage"> 
          
          <h1 className="title">C h a t</h1>
          
          <div className="backgroundcolor2">

          <div className="padding2 right">
            
            <div id="c1" className=" box">
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
        
            <div id="c2" className="box">
              <div className="col">
                <img className="pfp" src="https://cdn.britannica.com/63/247263-050-3ABF5622/promotional-still-The-Office-Steve-Carell.jpg"></img><h2 className="name">Michael</h2> <h3 className="guest ocupation">Identity Theft Profesor</h3>
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
            
          </div>
          <div className="padding2 right">
            
            <div id="c3" className=" box">
              <div className="col">
                <img className="pfp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kvUTxJ9OHlFRmVjRl_WW5KHcYocFSWywvFI-7umEy1wx9hMKols5CgA&s=10"></img><h2 className="name">Jim</h2> <h3 className="guest ocupation">Identity Theft Pro</h3>
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
          
        </div>
        
      </div>
      </div>
      </html>
    </>
  )
}

export default Chat
