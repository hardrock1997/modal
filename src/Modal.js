import './Modal.css';
function Modal({text,handleClose}) {
   
   
    return (
        <div className='container'>
            <h1>{text}</h1>
            <p><button onClick={handleClose}>Close</button></p>
        </div>
    )
}

export default Modal;