import './Modal.css'

//The cancelModal and confirmModal on line 5 is accept step of the emit process.
//Lines 13 and 19 show that we have let the parent function know of what we have done in the child function.//

function Modal( {title, cancelModal, confirmModal}) {
return (
<>
  <div className="modal">
    <p className="modal__title"> {title}</p>
    <div className="modal__buttons">
      <button 
        onClick={cancelModal} 
        className="btn btn__cancel">

        Cancel
        </button>
     
      <button onClick={confirmModal}
      className="btn">
      Confirm
      </button>
    </div>
  </div>
  <div className="backdrop" />
</>
)
}

export default Modal