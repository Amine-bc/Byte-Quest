import Poster from './Components/Poster.jsx';
import BlackButton from './Components/Button.jsx';
import './index.css';
function App() {
  return (
   <>
   <Poster />import Poster from './Components/Poster.jsx';
import BlackButton from './Components/Button.jsx';
import './index.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./WebGLGame/Build/WebGLGame.loader.js",
    dataUrl: "./WebGLGame/Build/WebGLGame.data",
    frameworkUrl: "./WebGLGame/Build/WebGLGame.framework.js",
    codeUrl: "./WebGLGame/Build/WebGLGame.wasm",
  });
  return (
    <>
    <Poster />
    <div className="GameDiv">
      <Unity unityProvider={unityProvider} style={{width:"750px",height:"360px",border:"5px solid #753d7e",borderRadius:"10px",boxShadow:"2px 2px 10px 10px black"}} />
    </div>
    <footer className='footer'>
        <p className="footerP">© 2023 Byte Quest ELFARI9</p>
    </footer>
  </>
  );
}
export default App;

   <BlackButton/>
   <footer className='footer'>
      <p>© 2023 Byte Quest ELFARI9</p>
   </footer>
     </>
  );
}

export default App;
