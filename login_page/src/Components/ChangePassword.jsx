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
        const re = /[A-Z]+/;
        const re2 = /[a-z]+/;
        const re3 = /[0-9]+/;
        if(newRef.current.value != repeatRef.current.value){
            alert(lang.yourPasswordsDontMatch);
            return;
        }
        else if(newRef.current.value.length < 5){
            alert(lang.passwordNotLongEnough);
            return;
        }
        else if(!re.test(newRef.current.value) || !re2.test(newRef.current.value) || !re3.test(newRef.current.value)){
            alert(lang.passwordNotDiverse);
            return;
        }
        const data={
            oldPassword: oldRef.current.value,
            newPassword: newRef.current.value
        }
        try{
            const result = await axios.post("/institution/changePassword",data);
        }
        catch(e){
            console.log(e.response)
            alert(e.response.data.error)
        }
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
