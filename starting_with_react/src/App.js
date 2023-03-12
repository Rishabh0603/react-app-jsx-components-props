
import './App.css';

import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
function App() {
  
  return (
    <div className="App">
       <Navbar title="IamDeveloper"/>
         <TextArea heading="Enter the text to convert it to UpperCase" text="Enter text"/>
      
       
     </div>
  );
}

export default App;
