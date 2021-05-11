import './App.css';
import imagesource from "./imagesource.jpg";
import "./style.css";

function App() {
  return (
  <div>

    <div style={{border:'solid 1px black', maxWidth: "100vw" }}>

       <h1 className="title red">marwa zaabi</h1>

       <div className="imgimg">
           <img className="img" src={imagesource} alt="imageInSrc"/>
           <img className="img" src="imageInPublic.jpg" alt="imageInPublic"/>
        </div>

    </div>

    <video style={{width:"320", height:"240" }} controls>
      <source src="myVideo.mp4" type="video/mp4"></source>
    </video>
    
  </div>

  );
}

export default App;
