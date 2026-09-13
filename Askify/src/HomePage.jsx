import { useState } from 'react'
import './App.css'
import {useNavigate} from "react-router-dom";

function HomePage() {

  const navi = useNavigate();  

  return (
    <>
      <div className="padding">
        <div className="center blbg">
          <div className="panel">
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/61/61582.png" className="top-ui chat"></img>Chat</button>
            <button onClick={() => navi("/FAQ")} className="button-hide"><img src="https://static.thenounproject.com/png/7526862-200.png" className="top-ui chat"></img>FAQ</button>
            <button onClick={() => navi("/")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="top-ui home chat"></img>Home</button>
            <button onClick={() => navi("/Post")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="top-ui chat"></img>Post</button>
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat"></img>Notes</button>
            <button className="button-hide"><img src="https://img.icons8.com/ios7/512/search--v3.png" className="top-ui chat"></img>Search</button>
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5599/5599504.png" className="top-ui chat"></img>Sign Up</button>
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage"> 
          
          <h1 className="title">A s k i f y</h1>
          
          <div className="backgroundcolor2">

          <div className="padding2 right">
            
            <div className=" box">
            <h2 className=" reco">Recommended!</h2>
              <div>
                <div className="col">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <p className="discription">Hi im Kevin, ask my anything about fire saftey! I can help you answer questions from dangerous situations to daily saftey risks.</p>
              </div>
              <div>
                <div className="col">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Michel</h3> <h3 className="nurse ocupation">Nurse</h3>
                </div>
                <p className="discription">Whats up! Im Michel ask me for information about common medical questions and common health risks. Im free a lot of times so don't hesitate to ask!.</p>
              </div>
            </div>
          </div>
          <div className="padding4">
            <div className="right">
        
            <div className="box">
            <h2 className="post">Posts!</h2>
              <div>
                <div className="col">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">James</h3> <h3 className="guest ocupation">Guest</h3>
                </div>
                <p className="discription">I keep spending more and more time on my phone everyday.</p>
                <div className="col">
                  <img className="pfp smaller" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Tom</h3> <h3 className="therapist ocupation">Therapist</h3>
                </div>
                <p className="discription">Maybe you should distract yourself from the phone and try reading a book!</p>
                
              </div>.
              <div>
                <div className="col">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Michel</h3> <h3 className="guest ocupation">Guest</h3>
                </div>
                <p className="discription">What to do in a flood?</p>
                <div className="col">
                  <img className="pfp smaller" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Robbert</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <p className="discription">First try contacting the Firefighters or the police department, then try to avoid the water.</p>
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

export default HomePage
