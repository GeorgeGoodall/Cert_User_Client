import React, {useRef, useState, useEffect} from 'react';
import {postData} from "./helperFunctions";
import Axios from 'axios';


const LoginForm = (props) => {
    const {idLable, APILoginCall, setSpinner, onLoginCallback, lang, loggedIn, setLoggedIn, authData} = props;

    
    
    let [feedbackShowing, setFeedbackShowing] = useState(false);
    const [createNewUserShowing, setCreateNewUserShowing] = useState(false);
    const [userLoginShowing, setUserLoginShowing] = useState(false);
    
    useEffect(() => {
        if(loggedIn && authData){
            
            let loggedInText = (
                <React.Fragment>
                    {lang.LoggedInAs} <span className={"redText"}></span>{props.authData.name}<a href="#" onClick={logout}>({lang.logout})</a><br/>           
                </React.Fragment>
            )
            setFeedback(loggedInText)
            setFeedbackShowing(true)
        }
    }, [props.authData, props.lang]);

    const logout = async () => {
        setLoggedIn(false);
        setFeedback("");
        await Axios.post("/deleteCookies", props.cookiesToDelete);
        onLoginCallback();
    }
    
    
    
    let [feedback, setFeedback] = useState("")

    let idRef = useRef();
    let passRef = useRef();

    const onSubmit = async () => {
        let toReturn = false;
        setSpinner(true);
        
        const result = await postData(APILoginCall, {loginID: idRef.current.value, password: passRef.current.value})
        setSpinner(false);
        if(result.status === 403){ // is forbodden
            setLoggedIn(false);
            setFeedbackShowing(true);
            setFeedback(
                <React.Fragment>
                    <span className="redText">{lang.passNotRecognised}</span>
                </React.Fragment>
            )
            
        }
        else if(result.status === 500){
            setLoggedIn(false);
            setFeedbackShowing(true);
            setFeedback(
                <React.Fragment>
                    <span className="redText">{lang.serverIssues}</span>
                </React.Fragment>
            )
            
        }
        else if(result.status === 200){
            
            setLoggedIn(true);
            setFeedbackShowing(true);
            let loggedInText = (
                <React.Fragment>
                    {lang.LoggedInAs} <span className={"redText"}></span>{result.data.user.name || result.data.user.userID}<a href="#" onClick={logout}>({lang.logout})</a><br/>           
                </React.Fragment>
            )
            setFeedback(
                loggedInText
            )
            toReturn = true;
        }
        if(onLoginCallback)
            onLoginCallback(toReturn);
        return toReturn;
    }

    if(typeof lang == "undefined")
        return <h1>Loading</h1>

    return (
        <React.Fragment>
            <div style={!loggedIn ? {display: "block"} : {display : "none"}}>
                <div className={"dropdownContainer floatsRight"}>
                    <div className="dropdownLable">{idLable}</div>
                    <input className="rightValue" type="text" ref={idRef}/>
                </div>
                <div className={"dropdownContainer floatsRight"}>
                    <div className="dropdownLable">{lang.password}:</div>
                    <input className="rightValue" type="password" ref={passRef} onKeyUp={(e)=>{if(e.keyCode == 13){onSubmit()}}}/>
                </div>
                <button className={"button"} onClick={onSubmit}>{lang.submit}</button>
            </div>
            <div style={!feedbackShowing ? {display: "none"} : {display: "block"}}>
                <div className={"LoginFeedback"}>
                    {feedback}
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginForm;
