import React from 'react'

/* React Icons */
import { RiCloseFill } from "react-icons/ri";

const Modal = ({src, alt, body, toggleModal, setToggleModal}) => toggleModal && (
    <div onClick={() => setToggleModal(!toggleModal)}
        role="none"
        className={`modal ${toggleModal ? `modal-is--open` : ``}`}
    >
        {console.log(toggleModal)}
        <div className="modal-content" role="none" onKeyDown={e => e.stopPropagation()} onClick={ e => e.stopPropagation() }>
            <img className="modal__logo-image" src={src} alt={alt} />
            <p>{body}</p>
            <RiCloseFill className="close" tabIndex="0" role="button" onKeyDown={() => setToggleModal(!toggleModal)} onClick={() => setToggleModal(!toggleModal)} />
        </div>
    </div>
)
export default Modal
