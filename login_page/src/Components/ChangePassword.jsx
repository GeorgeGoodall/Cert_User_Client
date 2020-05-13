import React, {useRef} from 'react';
import TextInput from './TextInput';
import Button from './Button/Button';
import axios from 'axios';

const ChangePassword = (props) => {

    const {lang} = props;

    const oldRef = useRef()
    const newRef = useRef()   
    const repeatRef = useRef() 
    
    const onSubmit = async () => {
        if(newRef.current.value != repeatRef.current.value){
            alert("passwords dont match");
            oldRef.current.value = "";
            newRef.current.value = "";
            repeatRef.current.value = "";
            return;
        }
        const data={
            oldPassword: oldRef.current.value,
            newPassword: newRef.current.value
        }
        const result = await axios.post("/institution/changePassword",data);
    }



    return (
        <div className="settingGroup">
            <h1>{lang.ChangePassword}</h1>
            <TextInput label={lang.oldPassword + ": "} type="password" ref={oldRef}/>
            <TextInput label={lang.newPassword + ": "} type="password" ref={newRef}/>
            <TextInput label={lang.repeatNewPassword + ": "} type="password" ref={repeatRef}/>
            <Button text="Submit" onClick={onSubmit}></Button>
        
        </div>
    );
}

export default ChangePassword;
