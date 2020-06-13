import React, {useRef, useState, useEffect} from 'react';
import Dropdown from "react-dropdown";
import axios from 'axios';

const CreateNewUserForm = (props) => {
    const {idLable, onSubmitCallback, lang} = props;

    let passRef = useRef();
    let repPassRef = useRef();
    let ageTypeRef = useRef();

    const [newUserId, setnewUserId] = useState("");
    const [feedbackShowing, setfeedbackShowing] = useState(false);
    const [feedback, setfeedback] = useState("");
    const [feedbackIsError, setfeedbackIsError] = useState(false);
    const [ageTypes, setageTypes] = useState([{label: 'Adolescent', value: 'Adolescent'},{label: 'Child', value: 'Child'}]);

    const getNewID = async() => {
        let result = await axios.get("/institution/getUserName");
        setnewUserId(result.data);
    }

    useEffect(()=>{   
        getNewID();

    },[])
    
    const submit = async() => {
        const re = /[A-Z]+/;
        const re2 = /[a-z]+/;
        const re3 = /[0-9]+/;
        if(passRef.current.value != repPassRef.current.value){
            setfeedback(lang.yourPasswordsDontMatch);
            setfeedbackShowing(true);
            setfeedbackIsError(true);
            return;
        }
        else if(passRef.current.value.length < 5){
            setfeedback(lang.passwordNotLongEnough);
            setfeedbackShowing(true);
            setfeedbackIsError(true);
            return;
        }
        else if(!re.test(passRef.current.value) || !re2.test(passRef.current.value) || !re3.test(passRef.current.value)){
            setfeedback(lang.passwordNotDiverse);
            setfeedbackShowing(true);
            setfeedbackIsError(true);
            return;
        }
        else if(!ageTypeRef.current.state.selected.value){
            setfeedback(lang.unspecifiedAgeType);
            setfeedbackShowing(true);
            setfeedbackIsError(true);
            return;
        }

        // more data handling

        let data = {
            id: newUserId,
            password: passRef.current.value,
            ageType: ageTypeRef.current.state.selected.value
        }

        try{
            let result = await axios.post("/institution/createUser",data);
            if(result.status == 200){
                // change to user login tab,
                props.onCreateUser();
            }
        }
        catch(err){
            setfeedback(err.response.data.error)
            setfeedbackShowing(true);
            setfeedbackIsError(true);
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
                <div className={"dropdownContainer floatsRight"}>
                    <div className="dropdownLable">{"Age Type"}:</div>
                    <Dropdown
                        className="rightValue"
                        options={ageTypes}
                        value={0}
                        placeholder={'Select a age type'}
                        ref={ageTypeRef}  
                    />
                </div>
                <button className={"button"} onClick={submit}>{lang.submit}</button>
                <div style={!feedbackShowing ? {display: "none"} : {display: "block"}}>
                    <div className={"LoginFeedback"} style={feedbackIsError ? {color: "red"} : {color : "black"}}>
                        {feedback}
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default CreateNewUserForm;
