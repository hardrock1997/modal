import Modal from './Modal';
import './App.css';
import { useState } from 'react';

function App() {

  const [modal,setModal] = useState(false);
  function handleOpen() {
    setModal(true);
  }
  function handleClose() {
    setModal(false);
  }
  return (
    <div className="App">
      {modal && <Modal text='modal text' handleClose={handleClose}/>}
      {!modal && <button onClick={handleOpen}>Open</button>}
    </div>
  );
}

export default App;
