import { useState } from 'react'
import './App.css'
import {useNavigate} from "react-router-dom";

function Logsigin() {

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
          
          <h1 className="title">L O G I N  &  S I G N I N</h1>
          
          <div className="backgroundcolor2">

          <div className="right">




            <div className=" bbox">
              <div className="bbbox">
                <div className="col frt">
                  <div>
                    <div className="stitle">Sign In</div>
                    <img className="qrc" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20200615212723"></img>
                  </div>
                  <div className="mrt">
                      
                    <input className="textbox" placeholder=" Email or Username" type="text"></input>
                    <input className="textbox" placeholder="Password" type="text"></input>
                    
                    <label>
                      <input type="checkbox"></input>
                      Remember me
                    </label>
                    
                  </div>
                </div>
                <div className="row">
                  <div>
                    <button className="button1">Sign In</button>
                    <div className="cen">Help sign in</div>
                  </div>
                </div>
              </div>
            </div>




          </div>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default Logsigin