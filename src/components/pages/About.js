/* eslint-disable no-unused-vars */
import React from 'react';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({

}))

import Hero from '../Hero/Hero';


function About() {
const classes = useStyles();
  return (
    <React.Fragment>
      <Hero blend="grey" bgImage="" title="Dlaczego Pralma ..." subtitle="" />
      <main className={[`${classes.aboutPage}`, 'page'].join(' ')}>
        <span>About us Page</span>
      </main>
    </React.Fragment>
  );
}
export default About;
