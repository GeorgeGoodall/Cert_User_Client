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
    const [ageTypes, setageTypes] = useState([{label: 'Adolescent', value: 'Adolescent'},{label: 'Child', value: 'Child'}]);

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
            console.error(err);
        }

        console.log()
        
        
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
                    <div className={"LoginFeedback"}>
                        {feedback}
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default CreateNewUserForm;
