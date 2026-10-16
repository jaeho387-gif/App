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
            <button onClick={() => navi("/")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="top-ui home chat"></img>Home</button>
            <button onClick={() => navi("/Post")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="top-ui chat"></img>Post</button>
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat"></img>Notes</button>
            <button onClick={() => navi("/ask")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat "></img>Ask</button>
            <button onClick={() => navi("/Chat")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage home-page"> 
          
          <h1 className="title">A s k i f y</h1>
          
          <div className="backgroundcolor2 home-content">
            <main className="home-topic-grid">
              <article className="box home-card home-topic-card">
                <h2>Fire Facts</h2>
                <div className="col profile-row">
                  <OfficeAvatar character="michael" className="note-avatar" />
                  <h3 className="name">{officeCast.michael.name}</h3>
                  <h3 className={`note-job ocupation ${officeCast.michael.jobColor}`}>{officeCast.michael.occupation}</h3>
                </div>
                <p className="home-topic-copy"><strong>Grease pan fire:</strong> Never pour water on burning oil. If it is safe, turn off the heat and cover the pan with a metal lid. If the fire keeps burning or spreads, get out, close the door behind you, and call emergency services.</p>
                <p className="home-topic-copy"><strong>Did you know?</strong> Smoke alarms provide an early warning, so test them regularly and keep them working.</p>
              </article>

              <article className="box home-card home-topic-card">
                <h2>What To Do: See Smoke</h2>
                <div className="col profile-row">
                  <OfficeAvatar character="dwight" className="note-avatar" />
                  <h3 className="name">{officeCast.dwight.name}</h3>
                  <h3 className={`note-job ocupation ${officeCast.dwight.jobColor}`}>{officeCast.dwight.occupation}</h3>
                </div>
                <p className="home-topic-copy">If you see smoke in a building, warn others as you leave by the nearest safe exit. Stay low if there is smoke, do not stop to collect belongings, and never use an elevator during a fire.</p>
                <p className="home-topic-copy"><strong>Once outside:</strong> Move away from the building and call emergency services. Do not go back in until responders say it is safe.</p>
              </article>

              <article className="box home-card home-topic-card">
                <h2>Safety Science</h2>
                <div className="col profile-row">
                  <OfficeAvatar character="stanley" className="note-avatar" />
                  <h3 className="name">{officeCast.stanley.name}</h3>
                  <h3 className={`note-job ocupation ${officeCast.stanley.jobColor}`}>{officeCast.stanley.occupation}</h3>
                </div>
                <p className="home-topic-copy"><strong>Carbon monoxide (CO)</strong> is a poisonous gas you cannot see or smell. Fuel-burning appliances can produce it when they are faulty or poorly ventilated.</p>
                <p className="home-topic-copy">Install CO alarms near sleeping areas and on every level, following the manufacturer’s guidance. If an alarm sounds, get outside and call emergency services.</p>
              </article>

              <article className="box home-card home-topic-card">
                <h2>First Aid Basics</h2>
                <div className="col profile-row">
                  <OfficeAvatar character="pam" className="note-avatar" />
                  <h3 className="name">{officeCast.pam.name}</h3>
                  <h3 className={`note-job ocupation ${officeCast.pam.jobColor}`}>{officeCast.pam.occupation}</h3>
                </div>
                <p className="home-topic-copy"><strong>For a small burn:</strong> Cool it under clean, cool running water for 20 minutes as soon as possible. Do not put ice, butter, or creams on a fresh burn.</p>
                <p className="home-topic-copy">Seek urgent medical help for a large or deep burn, or if you are unsure how serious it is.</p>
              </article>

              <article className="box home-card home-topic-card">
                <h2>Home Water Safety</h2>
                <div className="col profile-row">
                  <OfficeAvatar character="jim" className="note-avatar" />
                  <h3 className="name">{officeCast.jim.name}</h3>
                  <h3 className={`note-job ocupation ${officeCast.jim.jobColor}`}>{officeCast.jim.occupation}</h3>
                </div>
                <p className="home-topic-copy"><strong>A leak near electricity:</strong> Do not touch wet outlets, appliances, or standing water that could be energized. Keep others away from the area.</p>
                <p className="home-topic-copy">If it is safe to do so, shut off the water supply, then contact a qualified plumber or electrician. If there is immediate danger, leave and call emergency services.</p>
              </article>

              <article className="box home-card home-topic-card">
                <h2>Spot a Gas Smell?</h2>
                <div className="col profile-row">
                  <OfficeAvatar character="angela" className="note-avatar" />
                  <h3 className="name">{officeCast.angela.name}</h3>
                  <h3 className={`note-job ocupation ${officeCast.angela.jobColor}`}>{officeCast.angela.occupation}</h3>
                </div>
                <p className="home-topic-copy">Do not light a flame, operate electrical switches, or use a phone inside a building where you smell gas. Leave immediately and get others out if you can do so safely.</p>
                <p className="home-topic-copy">Once you are well away from the building, call your gas utility or emergency services and follow their instructions.</p>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
