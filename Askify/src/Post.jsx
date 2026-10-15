import './App.css'
import {useNavigate} from "react-router-dom";
import SearchModal from './SearchModal'

function Post() {

  const navi = useNavigate();  

  return (
    <>
      <div className="padding">
        <div className="center blbg">
          <div className="panel">
            <button onClick={() => navi("/")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="top-ui chat"></img>Home</button>
            <button onClick={() => navi("/Post")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="top-ui chat home"></img>Post</button>
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat"></img>Notes</button>
            <SearchModal />
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage"> 
          
          <h1 className="title">P O S T</h1>
          
          <div className="backgroundcolor2">

          <div className="right post-layout">




            <div className="bbox post-submission">
              <div className="xobb post-form">
                <div className="post-title-row">
                  <input className="textbox1 post-title-input" placeholder="Title*" aria-label="Post title" type="text"></input>
                </div>
                <textarea className="sectionn2 post-body-field" placeholder="Write your post..." aria-label="Post body"></textarea>
                <div className="sectionn1 post-toolbar">
                  <button className="button2 post-tool-button"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/91/91375.png"></img></button>
                  <button className="button2 post-tool-button"><img className="icon" src="https://static.thenounproject.com/png/1034957-200.png"></img></button>
                  <button className="button2 post-tool-button"><img className="icon" src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png"></img></button>
                  
                  <button className="button2 post-tool-button"><img className="icon" src="https://static.thenounproject.com/png/61598-200.png"></img></button>
                  <button className="button2 post-tool-button"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/59/59377.png"></img></button>
                  <button className="button2 post-tool-button"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/25/25626.png"></img></button>

                  <button className="button2 post-tool-button"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/787/787206.png"></img></button>
                  <button className="button2 post-tool-button"><img className="icon" src="https://cdn-icons-png.flaticon.com/512/3596/3596232.png"></img></button>
                  <button className="button2 post-tool-button"><img className="icon" src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png"></img></button>
                </div>
                <div className="post-actions">
                  <button className="button3 post-action-button post-save-button">Save draft</button>
                  <button className="button3 post-action-button post-submit-button">Submit post</button>
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

export default Post