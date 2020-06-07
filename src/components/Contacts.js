import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const styles = theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button:{
        marginTop:"1rem",
        color: "tomato",
        borderColor: "tomato"
    }
})

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color:'tomato',
        },
        "& label":{
            color: "tan",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset":{
                borderColor:"tan",
            },
            "&.Mui-focused fieldset":{
                borderColor:"tan",
            }
        }

    },
})(TextField);
class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }
       submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

    render(props){
        const { status } = this.state;
        const { classes } = this.props;

    return (
        <>
        <Box component="div" style={{background:"#233", height:"100vh"}}>
        <Navbar/>
            <Grid container justify='center'>
                <Box className={classes.form} component='form' onSubmit={this.submitForm} action="https://formspree.io/mdowgvvy" method="POST">
                    <Typography style={{color: "tomato", textAlign:"center", textTransform:"uppercase"}} variant="h5">
                        Hire or contact me...
                    </Typography>
                    <InputField fullWidth={true} type="text" name="name" label="Name" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"white"}}}/>
                    <br/>
                    <InputField fullWidth={true} type="email" name="email" label="Email" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"white", paddingBottom:'10.25px'}}}/>
                    <br/>
                    <InputField fullWidth={true} type="text" name="company" label="Comapany name" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"white"}}}/>
                    <br/>
                    <InputField fullWidth={true} type="text" name="message" label="Message" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"white"}}} multiline rows={4}/>
                    <br/>
                    {status === "SUCCESS" ? <Typography style={{color: "tomato", textAlign:"center", textTransform:"uppercase"}} variant="h5">Thanks!</Typography> : <Button className={classes.button} type="submit" variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>Contact me</Button>}
        {status === "ERROR" && <Typography style={{color: "tomato", textAlign:"center", textTransform:"uppercase"}} variant="h6">Ooops! There was an error.</Typography>}
                    
                </Box>
            </Grid>
        </Box>
        </>
    )
}}

export default withStyles(styles, { withTheme: true })(Contacts);
