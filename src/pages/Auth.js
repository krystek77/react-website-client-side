import React from 'react';
import useStyles from './styles';

function Auth(){
    const classes = useStyles();

    return (
        <div className={classes['page']}>Auth Page</div>
    )
}
export default Auth;