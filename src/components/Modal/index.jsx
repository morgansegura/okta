import React from 'react'

const Modal = ({title, body, level, toggleModal, setToggleModal}) => toggleModal && (
    <div onClick={() => setToggleModal(!toggleModal)}
        role="none"
        className={`modal ${toggleModal ? `modal-is--open` : ``}`}
    >
        {console.log(toggleModal)}
        <div className="modal-content" role="none" onKeyDown={e => e.stopPropagation()} onClick={ e => e.stopPropagation() }>
            <h1>
                {title}
                <span className="level">{level}</span>
            </h1>
            <p>{body}</p>
            <div className="close" tabIndex="0" role="button" onKeyDown={() => setToggleModal(!toggleModal)} onClick={() => setToggleModal(!toggleModal)}>Close Modal</div>
        </div>
    </div>
)
export default Modal
