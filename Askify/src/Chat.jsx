import './App.css'
import {useNavigate} from "react-router-dom";
import {useRef, useState} from 'react'
import SearchModal from './SearchModal'
import OfficeAvatar from './OfficeAvatar'
import {officeCast} from './officeCast'


function Chat() {

  const navi = useNavigate();  
  const sidebarRef = useRef(null)
  const dragStartRef = useRef(null)
  const [sidebarPosition, setSidebarPosition] = useState(null)

  const startSidebarDrag = (event) => {
    if (event.button !== 0 || !sidebarRef.current) return

    const rect = sidebarRef.current.getBoundingClientRect()
    dragStartRef.current = {
      pointerId: event.pointerId,
      pointerX: event.clientX,
      pointerY: event.clientY,
      left: rect.left,
      top: rect.top,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveSidebar = (event) => {
    const dragStart = dragStartRef.current
    const sidebar = sidebarRef.current
    if (!dragStart || dragStart.pointerId !== event.pointerId || !sidebar) return

    const rect = sidebar.getBoundingClientRect()
    const maxLeft = Math.max(0, window.innerWidth - rect.width)
    const maxTop = Math.max(0, window.innerHeight - rect.height)
    const left = Math.min(maxLeft, Math.max(0, dragStart.left + event.clientX - dragStart.pointerX))
    const top = Math.min(maxTop, Math.max(0, dragStart.top + event.clientY - dragStart.pointerY))

    setSidebarPosition({ left, top })
  }

  const stopSidebarDrag = (event) => {
    if (dragStartRef.current?.pointerId === event.pointerId) {
      dragStartRef.current = null
    }
  }

  const moveSidebarWithKeyboard = (event) => {
    const movement = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    }[event.key]
    const sidebar = sidebarRef.current
    if (!movement || !sidebar) return

    event.preventDefault()
    const step = event.shiftKey ? 32 : 12
    const rect = sidebar.getBoundingClientRect()
    const maxLeft = Math.max(0, window.innerWidth - rect.width)
    const maxTop = Math.max(0, window.innerHeight - rect.height)
    const left = Math.max(0, Math.min(maxLeft, rect.left + movement[0] * step))
    const top = Math.max(0, Math.min(maxTop, rect.top + movement[1] * step))
    setSidebarPosition({ left, top })
  }

  return (
    <>
    <html className="smooth">
      <div className="padding">
        <div
          ref={sidebarRef}
          className="panel2 chat-sidebar"
          style={sidebarPosition ? { left: `${sidebarPosition.left}px`, top: `${sidebarPosition.top}px` } : undefined}
        >
            <button
              type="button"
              className="chat-sidebar-drag-handle"
              aria-label="Move chat sidebar; use arrow keys to reposition"
              title="Move chat sidebar"
              onPointerDown={startSidebarDrag}
              onPointerMove={moveSidebar}
              onPointerUp={stopSidebarDrag}
              onPointerCancel={stopSidebarDrag}
              onKeyDown={moveSidebarWithKeyboard}
            >
              <span>People</span>
              <span className="chat-sidebar-grip" aria-hidden="true" />
            </button>
            <button onClick={() => document.getElementById("c1").scrollIntoView({behavior:"smooth"})} className="button-hide chat-sidebar-button">
              <OfficeAvatar character="dwight" className="chat-nav-avatar" />
              <span className="chat-sidebar-copy"><span className="chat-sidebar-name">{officeCast.dwight.name}</span><span className={`note-job ${officeCast.dwight.jobColor}`}>{officeCast.dwight.occupation}</span></span>
            </button>
            <button onClick={() => document.getElementById("c2").scrollIntoView({behavior:"smooth"})} className="button-hide chat-sidebar-button">
              <OfficeAvatar character="michael" className="chat-nav-avatar" />
              <span className="chat-sidebar-copy"><span className="chat-sidebar-name">{officeCast.michael.name}</span><span className={`note-job ${officeCast.michael.jobColor}`}>{officeCast.michael.occupation}</span></span>
            </button>
            <button onClick={() => document.getElementById("c3").scrollIntoView({behavior:"smooth"})} className="button-hide chat-sidebar-button">
              <OfficeAvatar character="jim" className="chat-nav-avatar" />
              <span className="chat-sidebar-copy"><span className="chat-sidebar-name">{officeCast.jim.name}</span><span className={`note-job ${officeCast.jim.jobColor}`}>{officeCast.jim.occupation}</span></span>
            </button>
        </div>
        <div className="center blbg">
          <div className="panel">
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/61/61582.png" className="top-ui chat home"></img>Chat</button>
            <button onClick={() => navi("/FAQ")} className="button-hide"><img src="https://static.thenounproject.com/png/7526862-200.png" className="top-ui chat"></img>FAQ</button>
            <button onClick={() => navi("/")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="top-ui chat"></img>Home</button>
            <button onClick={() => navi("/Post")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="top-ui chat"></img>Post</button>
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat"></img>Notes</button>
            <SearchModal />
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        
        <div className="homepage chat-page"> 
          
          <h1 className="title">C h a t</h1>
          
          <div className="backgroundcolor2">

          <div className="padding2 right">
            
            <div id="c1" className="box chat-transcript">
              <div className="col profile-row">
                <OfficeAvatar character="dwight" className="note-avatar" /><h2 className="name">{officeCast.dwight.name}</h2> <h3 className={`note-job ocupation ${officeCast.dwight.jobColor}`}>{officeCast.dwight.occupation}</h3>
              </div>
                <div className="ytcontainer">
                  <p className="yt">Hey!</p>
                </div>
                <div>
                <div className="ttcontainer">
                  <p className="tt">Welcome to Dunder Mifflin Scranton!</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">What could make the Scranton branch run more smoothly?</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">Let's make a plan together.</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">Clear team updates and a shared supply list could help every department stay organized.</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">How can we make sure the whole team stays in the loop?</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">Let's collect ideas from each department at the weekly branch meeting.</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">
                    I added it to the Scranton branch agenda.
                  </p>
                </div>






                </div>
            </div>
          </div>
          <div className="padding4">
            <div className="right">
        
            <div id="c2" className="box chat-transcript">
              <div className="col profile-row">
                <OfficeAvatar character="michael" className="note-avatar" /><h2 className="name">{officeCast.michael.name}</h2> <h3 className={`note-job ocupation ${officeCast.michael.jobColor}`}>{officeCast.michael.occupation}</h3>
              </div>
                <div className="ytcontainer">
                  <p className="yt">Hey!</p>
                </div>
                <div>
                <div className="ttcontainer">
                  <p className="tt">We're planning a celebration for the Scranton branch.</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">How can we make the Dundies fun for everyone?</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">Let's invite the whole team to share ideas.</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">A short schedule, food options, and team nominations can help everyone feel included.</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">Could the team help plan the activities too?</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">Pam can collect suggestions at reception, then everyone can vote.</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">
                    I'll bring the energy; the team can handle the details.
                  </p>
              
            </div>
            </div>

            
            </div>
            
            </div>
            
          </div>
          <div className="padding2 right">
            
            <div id="c3" className="box chat-transcript">
              <div className="col profile-row">
                <OfficeAvatar character="jim" className="note-avatar" /><h2 className="name">{officeCast.jim.name}</h2> <h3 className={`note-job ocupation ${officeCast.jim.jobColor}`}>{officeCast.jim.occupation}</h3>
              </div>
                <div className="ytcontainer">
                  <p className="yt">Hey!</p>
                </div>
                <div>
                <div className="ttcontainer">
                  <p className="tt">Let's get the Scranton sales team organized.</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">What should we track for client follow-ups?</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">Maybe client, last contact, next step, and owner?</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">A shared tracker with those four fields makes it easy for anyone to help.</p>
                </div>
                <div className="ytcontainer">
                  <p className="yt">How do we keep it simple enough for everyone to use?</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">Start with one page and review it together at the weekly meeting.</p>
                </div>
                <div className="ttcontainer">
                  <p className="tt">
                    Fewer lost sticky notes, more time for actual work.
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
