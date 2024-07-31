import './App.css';
import HandleComponent from './Login&Rig_Show/HandleComponent';
//import MouseComponent from './MouseMoving/MouseComponent';
//import TodoWrapper from './TodoLIstComponent/TodoWrapper';
//import RennderList from './RenderList/RennderList';

function App() {

  

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{backgroundColor:'#61dafb',height:"100px" ,width :"100%", paddingTop:"50px" ,fontSize:"50px"}}>
           Hellow World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         My Frist Project
        </a>
      </header> */}

      {/* <TodoWrapper/> */}

      {/* <RennderList/> */}
      {/* <MouseComponent/> */}
      <HandleComponent/>
    </div>
  );
}

export default App;
