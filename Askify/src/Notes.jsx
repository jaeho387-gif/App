import { useState } from 'react'
import './App.css'
import {useNavigate} from "react-router-dom";

function Notes() {

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
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat home"></img>Notes</button>
            <button className="button-hide"><img src="https://img.icons8.com/ios7/512/search--v3.png" className="top-ui chat"></img>Search</button>
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage"> 
          
          <h1 className="title">N o t e s</h1>
          
          <div className="backgroundcolor2">

          <div className="right">




            <div className="bbbbox">
              <div className="bbbbbbox">
                <div className="note1">
                  <img className="pfp" src="https://cdn.britannica.com/63/247263-050-3ABF5622/promotional-still-The-Office-Steve-Carell.jpg"></img><h3 className="name">Michael</h3> <h3 className="firefighter ocupation">Paper Waste Proffesor</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://cdn.britannica.com/63/247263-050-3ABF5622/promotional-still-The-Office-Steve-Carell.jpg"></img><h3 className="name">Michael</h3> <h3 className="guest ocupation">Paper Waste Professor</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                <div className="note1">
                  <img className="pfp" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"></img><h3 className="name">Kevin</h3> <h3 className="firefighter ocupation">Firefighter</h3>
                </div>
                
              </div>
              <div className="bbbbbbbox">
                <div className="col">
                <img className="pfp" src="https://cdn.britannica.com/63/247263-050-3ABF5622/promotional-still-The-Office-Steve-Carell.jpg"></img><h2 className="name">Michael</h2> <h3 className="guest ocupation">Paper Waste Professor</h3>
              </div>
                <div className="ytcontainer">
                  <p className="yt">Paper waste is basically the massive amount of paper, cardboard, and paper products that get thrown away every year instead of being reused or properly recycled. It actually makes up a huge percentage of all municipal solid waste in landfills. Producing all that paper consumes insane amounts of trees, energy, and water, and then when paper sits in landfills and rots without oxygen, it releases methane gas which is a super potent greenhouse gas.

The main culprits are everywhere in daily life. Junk mail is a massive one because tons of credit card offers and promotional flyers go straight from the mailbox into the trash without ever being read. Then there's unnecessary office printing, paper receipts (which usually have BPA chemical coatings so you can't even recycle them anyway), paper towels and napkins, endless cardboard boxes from online shopping, and school or work notebooks that get half-used and tossed out.

The environmental impact goes way beyond just cutting down trees, though deforestation is obviously a huge part of it. The paper manufacturing industry is actually one of the highest industrial users of water and energy. Making a single sheet of standard paper can take anywhere from 2 to 10 liters of water depending on the factory setup. On top of that, when paper gets contaminated by food—like a greasy pizza box or used paper towels—it ruins the recycling process and has to go straight to the landfill.

To actually reduce paper waste, switching to digital options for bills, receipts, and note-taking is the biggest step. You can also opt out of physical junk mail lists through online registries, switch to cloth rags or microfiber towels instead of paper towels around the house, print double-sided if you really need physical copies, and make sure to only recycle clean paper. Buying post-consumer recycled paper products when you do need paper also helps drive demand for recycled materials.</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">
                    Paper waste makes up a huge portion of landfill garbage, driven by everyday stuff like junk mail, single-use paper towels, online shipping boxes, receipts, and unnecessary printing. Producing all this paper consumes millions of trees alongside massive amounts of water and energy, only for most of it to end up rotting in landfills and releasing methane gas. Plus, items contaminated by food—like greasy pizza boxes or used napkins—can't even be recycled and end up straight in the trash. Cutting down comes down to going paperless for bills and notes, swapping paper towels for reusable cloth rags, opting out of physical junk mail, and making sure to only recycle paper that is completely clean.
                  </p>
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

export default Notes