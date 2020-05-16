import React from 'react';
import ChangePassword from "./ChangePassword";

import "./institutionSettingsStyle.css"

const InstitutionSettings = (props) => {
    const {lang} = props;

    return (
        <div className="institutionSettings">
            <ChangePassword lang={lang}/>
        </div>
    );
}

export default InstitutionSettings;
