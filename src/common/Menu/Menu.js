
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Menu.styles.js';

const useStyles = createUseStyles(styles)

const Menu = () => {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            Start working on the menu
        </div>
    );
};

export default Menu;