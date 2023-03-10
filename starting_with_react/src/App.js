
import './App.css';
 import Profile from './component/Function.js';
     
     
function App() {
  
  return (
    <div className="App">
       <Profile Name="Rishabh" age={22} hometown="Lucknow" />
       <Profile Name="Ananya" age={23} hometown="Lucknow" />
        <Profile Name="Harsh" age={23} hometown="Lucknow" />
       
     </div>
  );
}

export default App;
