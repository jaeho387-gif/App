import './App.css'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import SearchModal from './SearchModal'
import {officeCast} from './officeCast'

const notes = [
  {
    character: 'dwight',
    title: 'Do not approach a dangerous situation',
    body: 'Getting close to a fight or a potentially dangerous person can put you and others at risk.',
    nextSteps: 'Move somewhere safe, contact emergency services, and follow instructions from the responders.',
  },
  {
    character: 'jim',
    title: 'Do not pour grease down the drain',
    body: 'Grease can cool and harden inside pipes, causing clogs in a home or the sewer system.',
    nextSteps: 'Let grease cool, put it in a sealed container, and dispose of it according to local guidance.',
  },
  {
    character: 'pam',
    title: 'Do not share prescription medication',
    body: 'A medicine prescribed for one person may be unsafe for someone else, even if their symptoms seem similar.',
    nextSteps: 'Use medication only as prescribed to you, and ask a qualified healthcare professional about concerns or side effects.',
  },
  {
    character: 'kevin',
    title: 'Do not interrupt or mock someone who is learning',
    body: 'Interrupting or making fun of someone for asking a question can make it harder for them and others to learn.',
    nextSteps: 'Listen, take turns speaking, and offer respectful help when someone is having trouble.',
  },
  {
    character: 'angela',
    title: 'Do not skip handwashing between patients',
    body: 'Germs can spread from hands to shared surfaces and people, especially in places where people are receiving care.',
    nextSteps: 'Wash your hands with soap and water when they are dirty, and use hand sanitizer when appropriate.',
  },
  {
    character: 'stanley',
    title: 'Do not overload electrical outlets',
    body: 'Plugging too many devices into one outlet can overheat it and may cause a fire.',
    nextSteps: 'Use outlets as intended, unplug devices that are not needed, and ask a qualified electrician about hot outlets or frequently tripped breakers.',
  },
  {
    character: 'oscar',
    title: 'Do not write in or damage library books',
    body: 'Writing in books or leaving food and drink near them can damage shared materials and make them harder for others to use.',
    nextSteps: 'Handle books with clean hands, keep food and drinks away, and return items to the library on time.',
  },
  {
    character: 'michael',
    title: 'Do not leave the stove unattended',
    body: 'A pan or burner left unattended can start a kitchen fire. This is especially risky when cooking with oil or near towels and paper.',
    nextSteps: 'Stay nearby while cooking, turn off the burner if you leave, and keep flammable items away from the stove.',
  },
]

function Notes() {
  const navi = useNavigate()
  const [selectedNote, setSelectedNote] = useState(notes[0])
  const selectedCharacter = officeCast[selectedNote.character]

  return (
    <>
      <div className="padding">
        <div className="center blbg">
          <div className="panel">

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
                  <button
                    className={`note1 notes-row${selectedNote.character === note.character ? ' is-selected' : ''}`}
                    key={note.character}
                    type="button"
                    aria-pressed={selectedNote.character === note.character}
                    onClick={() => setSelectedNote(note)}
                  >
                    <h3 className={`note-job ocupation ${officeCast[note.character].jobColor}`}>{officeCast[note.character].occupation}</h3>
                  </button>
                ))}
              </div>
              <div className="bbbbbbbox notes-detail-panel">
                <div className="col notes-author">
                  <h3 className={`note-job ocupation ${selectedCharacter.jobColor}`}>{selectedCharacter.occupation}</h3>
                </div>
                <div className="ytcontainer notes-copy">
                  <p className="yt notes-paragraph"><strong>{selectedNote.title}</strong><br /><br />{selectedNote.body}</p>
                </div>
                <div className="ytcontainer notes-copy">
                  <p className="yt notes-paragraph"><strong>What to do instead</strong><br /><br />{selectedNote.nextSteps}</p>
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