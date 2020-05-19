import React, {useState, useEffect} from 'react';
import LoginForm from "./loginForm";
import CreateNewUserForm from "./CreateNewUserForm";
import InstitutionSettings from "./InstitutionSettings";
import UserAgreement from "./UserAgreement";
import axios from "axios";
import { Redirect } from 'react-router-dom'


const InstitutionControls = (props) => {

    const {setSpinner, lang} = props;

    const [createNewUserShowing, setCreateNewUserShowing] = useState(false);
    const [userLoginShowing, setUserLoginShowing] = useState(false);
    const [settingsShowing, setsettingsShowing] = useState(false);

    const [LoggedIn, setLoggedIn] = useState(true);
    const [userAgreementOpen, setuserAgreementOpen] = useState(false);

    const [authData, setauthData] = useState({});

    useEffect(() => {
        if(props.authData){
            setauthData(props.authData);
        }
    });

    
    const loginTabClick = (tabIndex) => {
        setUserLoginShowing(false)
        setCreateNewUserShowing(false)
        setsettingsShowing(false);

        switch(tabIndex){
            case 0:
                setUserLoginShowing(true);
                break;
            case 1:
                setCreateNewUserShowing(true);
                break;
            case 2:
                setsettingsShowing(true);
                break;
            default:
                break;       
        }
    }

    const onLoginCallback = (status) => {
        
        setLoggedIn(status);
    }

    const launchCert = async() => {
        const result = await axios.post('/user/acceptUserAgreement')
        if(result.status == 200){
            window.location.href = '/cert';
        }
        else{
            window.location.href = "/login"; //handle this better
        }
    }

    const onCreateUser = () => {
        props.getAuthData();
        loginTabClick(0);
    }

    return (
        <div>
            <div className={"tabs"} >
                <div className={"tabButton " + (userLoginShowing ? "selected" : "")} onClick={()=>loginTabClick(0)}>{lang.userLogin}</div>
                <div className={"tabButton " + (createNewUserShowing ? "selected" : "")} onClick={()=>loginTabClick(1)}>{lang.createNewUser}</div>
                <div className={"tabButton " + (settingsShowing ? "selected" : "")} onClick={()=>loginTabClick(2)}>{lang.settings}</div>
            </div>
            <div className="institutionControlsTab" style={createNewUserShowing ? {display: "block"} : {display: "none"}}>
                <CreateNewUserForm key={createNewUserShowing} idLable={lang.id} onCreateUser={onCreateUser} lang={lang}/>
            </div>
            <div className="institutionControlsTab" style={userLoginShowing ? {display: "block"} : {display: "none"}}>
                <LoginForm idLable={lang.id} APILoginCall={'/user/login'} setSpinner={setSpinner} onLoginCallback={onLoginCallback} authData={authData.user} lang={lang}/>
                <div className={"userControls"} style={{display: LoggedIn ? "block" : "none"}}> 
                    <div onClick={() => setuserAgreementOpen(true)} className="red-button">{lang.launchCert}</div>
                    <UserAgreement 
                        isOpen={userAgreementOpen}
                        setOpen={setuserAgreementOpen}
                        onAccept={launchCert}
                        lang={lang}
                    />
                </div>
            </div>
            <div className="institutionControlsTab" style={settingsShowing ? {display: "block"} : {display: "none"}}>
                <InstitutionSettings lang={lang}/>
            </div>
        </div>
    );
}

export default InstitutionControls;
