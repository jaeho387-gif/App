import './App.css'
import {useNavigate} from "react-router-dom";

function Ask() {

  const navi = useNavigate();  

  return (
    <>
      <div className="padding">
        <div className="center blbg">
          <div className="panel">
            <button onClick={() => navi("/")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" className="top-ui chat"></img>Home</button>
            <button onClick={() => navi("/Post")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="top-ui chat "></img>Post</button>
            <button onClick={() => navi("/Notes")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat"></img>Notes</button>
            <button onClick={() => navi("/ask")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png" className="top-ui chat home"></img>Ask</button>
            <button onClick={() => navi("/Logsigin")} className="button-hide"><img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" className="top-ui chat"></img>Sign In</button>
          </div>
        </div>
        <div className="homepage"> 
          
          <h1 className="title">A S K</h1>
          
          <div className="backgroundcolor2">

          <div className="right post-layout">
            <div className=" bbox">
              <div className="bbbox">
                <div className="row overflow">https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVLOyWM0UfDrUBMfwCac0UZwPCkjzcdnBeVmj149_ag&s=10
                    <img src="https://cdn-icons-png.flaticon.com/512/7242/7242607.png" className="icon2"></img>
                    <img src="https://cdn-icons-png.flaticon.com/512/10295/10295611.png" className="icon2"></img>
                    <img src="https://cdn-icons-png.flaticon.com/512/9641/9641279.png" className="icon2"></img>
                    <img src="https://cdn-icons-png.flaticon.com/512/10366/10366416.png" className="icon2"></img>
                    <img src="https://cdn-icons-png.flaticon.com/512/9411/9411434.png" className="icon2"></img>
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995507.png" className="icon2"></img>
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

export default Ask