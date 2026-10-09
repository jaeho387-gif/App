import './App.css'
import {useNavigate} from "react-router-dom";
import SearchModal from './SearchModal'
import OfficeAvatar from './OfficeAvatar'
import {officeCast} from './officeCast'

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
            <SearchModal />
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage home-page"> 
          
          <h1 className="title">A s k i f y</h1>
          
          <div className="backgroundcolor2">

          <div className="padding2 right">
            
            <div className="box home-card home-recommendations">
            <h2 className=" reco">Recommended!</h2>
              <div>
                <div className="col profile-row">
                  <OfficeAvatar character="dwight" className="note-avatar" /><h3 className="name">{officeCast.dwight.name}</h3> <h3 className={`note-job ocupation ${officeCast.dwight.jobColor}`}>{officeCast.dwight.occupation}</h3>
                </div>
                <p className="discription">I keep the Scranton branch ready for anything. What should our shared office emergency kit include?</p>
              </div>
              <div>
                <div className="col profile-row">
                  <OfficeAvatar character="pam" className="note-avatar" /><h3 className="name">{officeCast.pam.name}</h3> <h3 className={`note-job ocupation ${officeCast.pam.jobColor}`}>{officeCast.pam.occupation}</h3>
                </div>
                <p className="discription">From the reception desk, I see how quickly office updates get missed. How can we make branch announcements easier to follow?</p>
              </div>
            </div>
          </div>
          <div className="padding4">
            <div className="right">
        
            <div className="box home-card home-posts">
            <h2 className="post">Posts!</h2>
              <div>
                <div className="col profile-row">
                  <OfficeAvatar character="jim" className="note-avatar" /><h3 className="name">{officeCast.jim.name}</h3> <h3 className={`note-job ocupation ${officeCast.jim.jobColor}`}>{officeCast.jim.occupation}</h3>
                </div>
                <p className="discription">What could we do to make weekly meetings more useful for everyone at the Scranton branch?</p>
                <div className="col profile-row">
                  <OfficeAvatar character="angela" className="note-avatar" /><h3 className="name">{officeCast.angela.name}</h3> <h3 className={`note-job ocupation ${officeCast.angela.jobColor}`}>{officeCast.angela.occupation}</h3>
                </div>
                <p className="discription">We can share a short agenda beforehand, keep each topic focused, and send everyone a clear list of next steps.</p>
                
              </div>
              <div>
                <div className="col profile-row">
                  <OfficeAvatar character="michael" className="note-avatar" /><h3 className="name">{officeCast.michael.name}</h3> <h3 className={`note-job ocupation ${officeCast.michael.jobColor}`}>{officeCast.michael.occupation}</h3>
                </div>
                <p className="discription">How can we plan a Dundies night that the whole Scranton branch can enjoy?</p>
                <div className="col profile-row">
                  <OfficeAvatar character="kevin" className="note-avatar" /><h3 className="name">{officeCast.kevin.name}</h3> <h3 className={`note-job ocupation ${officeCast.kevin.jobColor}`}>{officeCast.kevin.occupation}</h3>
                </div>
                <p className="discription">We could ask the team for ideas, offer a few food choices, and make sure everyone who wants to help has a small part.</p>
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
