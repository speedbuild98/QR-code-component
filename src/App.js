import './App.css';
import QR from './images/qr.png';
function App() {
  return (
    <div className='App'>
      <div className='Contenedor'>
        <img className='imgQR' alt="imgQR" src={QR}/>
        <h1>Improve your front-end<br/>skills by building projects</h1>
        <p>Scan the QR code to visit Frontend<br/>Mentor and take your coding skills to<br/>the next level</p>
      </div>
      <div className="attribution">
      Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io/profile/speedbuild98" target="_blank">Frontend Mentor</a>. 
      Coded by <a rel="noreferrer" href="https://devgallardo.netlify.app/">GALLARDO</a>.
      </div>
    </div>
    
  );
}

export default App;
