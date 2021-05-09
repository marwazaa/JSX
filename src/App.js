import imagesource from "./imagesource.jpg";
import "./style.css";

function App() {
  return (
    <div>
    <div style={{border:'solid 1px black', maxWidth: "100vw" }}>
      <h1 className="title red">marwa</h1>
    <img className="img" src={imagesource} alt="imageInSrc" />
    <img className="img" src="imageInPublic.jpg" alt="imageInPublic" />
    </div>
    <video className="video1" width='750' hight='500' controls />

    <source src="myVideo.mp4" type="video/mp4" />
  </div>
  );
}

export default App;
