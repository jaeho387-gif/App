import { useState } from 'react'
import './App.css'
import {useNavigate} from "react-router-dom";

function Post() {

  const navi = useNavigate();  

  return (
    <>
      <div className="padding">
        <div className="center blbg">
          <div className="panel">
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/61/61582.png" className="top-ui chat "></img>Chat</button>
            <button onClick={() => navi("/FAQ")} className="button-hide"><img src="https://static.thenounproject.com/png/7526862-200.png" className="top-ui chat"></img>FAQ</button>
            <button onClick={() => navi("/")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="top-ui chat"></img>Home</button>
            <button onClick={() => navi("/Post")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="top-ui chat"></img>Post</button>
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat"></img>Notes</button>
            <button className="button-hide"><img src="https://img.icons8.com/ios7/512/search--v3.png" className="top-ui chat"></img>Search</button>
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat home"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage"> 
          
          <h1 className="title">P O S T</h1>
          
          <div className="backgroundcolor2">

          <div className="right">




            <div className=" bbox">
              <div className="xobb">
                <div className="sectionn1  titttle">
                  <input className="textbox1" placeholder="Title" type="text"></input>
                </div>
                <div className="sectionn2">Body text</div>
                <div className="sectionn1"> options</div>
                <div className="sectionn1">Save Summit</div>

              </div>
            </div>




          </div>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default Post