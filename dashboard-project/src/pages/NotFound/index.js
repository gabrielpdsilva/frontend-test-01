import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../design/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        backgroundColor: COLORS.dark_gray,
    },
    errorCodeText: {
        fontSize: 90,
        color: COLORS.white,
        marginRight: 30,
        fontWeight: 'bold',
    },
    errorMessageText: {
        color: COLORS.white,
        fontSize: 30,
    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p className={classes.errorCodeText}>404</p>
            <p className={classes.errorMessageText}>A página solicitada não foi encontrada</p>
        </div>
    )
}

export default NotFound;