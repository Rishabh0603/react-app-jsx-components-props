
import './App.css';
import DarkMode from './component/DarkMode';

import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
function App() {
  
  return (
    <div className="App">
       
       <Navbar title="IamDeveloper"/>
         <TextArea heading="Enter the text to convert it to UpperCase" text="Enter text"/>
         <DarkMode/>
       
     </div>
  );
}

export default App;
