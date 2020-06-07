import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import Instagram from '@material-ui/icons/Instagram'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root":{
            fill: 'tan',
            "&:hover":{
                fill:"tomato",
                fontSize:"1.8rem"
            }
        }
    }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background:"#222"}}>
            <BottomNavigationAction onClick={()=> window.open("https://www.instagram.com/abdulkaderfreij/")} className={classes.root} style={{padding:0}} icon={<Instagram/>}/>
            <BottomNavigationAction onClick={()=> window.open("https://www.linkedin.com/in/abdulkaderfreij/")}  className={classes.root} style={{padding:0}} icon={<LinkedIn/>}/>
            <BottomNavigationAction onClick={()=> window.open("https://github.com/AbdulkaderFreij")} className={classes.root} style={{padding:0}} icon={<GitHub/>}/>
        </BottomNavigation>
    )
}

export default Footer
