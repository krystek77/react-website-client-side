/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "@mui/material";
import {ContactMail} from '@mui/icons-material';

import useStyles from '../../styles/toolbar';


function Toolbar(){ 
    const classes = useStyles();

    return <Container component="div" maxWidth="false" className={`${classes.toolbar}`}>
        Toolbar
    </Container>
}
export default Toolbar;