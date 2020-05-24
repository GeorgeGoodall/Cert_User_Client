import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';

const UserAgreement = (props) => {
    const {lang, onAccept, setOpen} = props;
    return (
        <div
            style={{display: props.isOpen ? "block" : "none"}}
            className="userAgreement"
        >
            <FaWindowClose className={"modalCloseButton"} onClick={() => props.setOpen(false)}/>
            
            <div dangerouslySetInnerHTML={{__html: lang.userAgreement}}></div>
            
            <div className="red-button" onClick={() => onAccept()}>{lang.confirm}</div>
            <div className="red-button" onClick={() => setOpen(false)}>{lang.reject}</div>

        </div>
    );
}

export default UserAgreement;
