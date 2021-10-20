import React from "react";
import './Toolbar.css';
import {ContactMail} from '@mui/icons-material';

function Toolbar(){
    return <div className="toolbar">
        <div className="toolbar__menu">
            <button type="button" className="toolbar__mail"><ContactMail/></button>
        </div>
    </div>
}
export default Toolbar;