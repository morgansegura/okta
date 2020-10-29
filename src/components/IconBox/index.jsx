import React, {useState} from "react";
import Modal from "../Modal";

export default ({title, body, src, alt}) => {
    const [toggleModal, setToggleModal] = useState(false)
    return (
        <>
            <div onClick={() => setToggleModal(!toggleModal)}
                 className="icon-container"
                 role="none">
                <div className="icon-box">
                    <img src={src}
                         alt={alt}/>
                </div>
            </div>
            <Modal
                title={title}
                body={body}
                src={src}
                alt={alt}
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
            />
        </>
    )
}
