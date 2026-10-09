import './App.css'
import {useNavigate} from "react-router-dom";
import SearchModal from './SearchModal'
import OfficeAvatar from './OfficeAvatar'
import {officeCast} from './officeCast'

const notes = [
  { character: 'dwight', title: 'Branch supply inventory' },
  { character: 'jim', title: 'Client follow-ups' },
  { character: 'pam', title: 'Reception handoff' },
  { character: 'kevin', title: 'Quarterly expense notes' },
  { character: 'angela', title: 'Invoice review' },
  { character: 'stanley', title: 'Sales meeting agenda' },
  { character: 'oscar', title: 'Branch budget summary' },
  { character: 'michael', title: 'Dundies planning' },
]
const selectedNote = notes[0]
const selectedCharacter = officeCast[selectedNote.character]

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
            <SearchModal />
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage notes-page"> 
          
          <h1 className="title">N o t e s</h1>
          
          <div className="backgroundcolor2">

          <div className="right notes-layout">




            <div className="bbbbox notes-layout-card">
              <div className="bbbbbbox notes-list-panel">
                {notes.map((note) => (
                  <div className="note1 notes-row" key={note.character}>
                    <OfficeAvatar character={note.character} className="note-avatar" />
                    <h3 className="name">{officeCast[note.character].name}</h3>
                    <h3 className={`note-job ocupation ${officeCast[note.character].jobColor}`}>{officeCast[note.character].occupation}</h3>
                  </div>
                ))}
              </div>
              <div className="bbbbbbbox notes-detail-panel">
                <div className="col notes-author">
                  <OfficeAvatar character={selectedNote.character} className="note-avatar" />
                  <h2 className="name">{selectedCharacter.name}</h2>
                  <h3 className={`note-job ocupation ${selectedCharacter.jobColor}`}>{selectedCharacter.occupation}</h3>
                </div>
                <div className="ytcontainer notes-copy">
                  <p className="yt notes-paragraph"><strong>{selectedNote.title}</strong><br /><br />Check the Scranton branch supply closet and count unopened paper reams, toner, and envelopes. Record what each department uses so the branch can reorder before anything runs out.</p>
                </div>
                <div className="ytcontainer notes-copy">
                  <p className="yt notes-paragraph"><strong>Next steps</strong><br /><br />Ask each department to update the inventory every Friday, label the supply shelves, and bring the totals to the next branch meeting.</p>
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