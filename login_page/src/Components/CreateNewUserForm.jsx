import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';

const CreateNewUserForm = (props) => {
    const {idLable, onSubmitCallback, lang} = props;

    let passRef = useRef();
    let repPassRef = useRef();

    const [newUserId, setnewUserId] = useState("");
    const [feedbackShowing, setfeedbackShowing] = useState(false);
    const [feedback, setfeedback] = useState("");

    const getNewID = async() => {
        let result = await axios.get("/institution/getUserName");
        setnewUserId(result.data);
    }

    useEffect(()=>{   
        getNewID();
    },[])

    const submit = async() => {
        if(passRef.current.value != repPassRef.current.value){
            setfeedback(lang.yourPasswordsDontMatch);
            setfeedbackShowing(true);
        }

        let data = {
            id: newUserId,
            password: passRef.current.value
        }

        try{
            let result = await axios.post("/institution/createUser",data);
            if(result.status == 200){
                // change to user login tab,
                props.onCreateUser();
            }
        }
        catch(err){
            console.error(err);
        }
        
        
    }

    return (
        <div>
             <React.Fragment>
                <div className={"dropdownContainer floatsRight"}>
                    <div className="dropdownLable">{idLable}</div>
                    <div className={"rightValue noBorder"}>{newUserId}</div>
                </div>
                <div className={"dropdownContainer floatsRight"}>
                    <div className="dropdownLable">{lang.password}</div>
                    <input className="rightValue" type="password" ref={passRef}/>
                </div>
                <div className={"dropdownContainer floatsRight"}>
                    <div className="dropdownLable">{lang.confirmPassword}:</div>
                    <input className="rightValue" type="password" ref={repPassRef}/>
                </div>
                <button className={"button"} onClick={submit}>{lang.submit}</button>
                <div style={!feedbackShowing ? {display: "none"} : {display: "block"}}>
                    <div className={"LoginFeedback"}>
                        {feedback}
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default CreateNewUserForm;
