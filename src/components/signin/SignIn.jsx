import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { login } from '../../services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^[a-z]{3,}$/;
///^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
    container1: {
        width: '65vw',
        height: '70vh',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        top: '84px',
        left: '300px',
        zIndex: 1,
        opacity: '1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    main1: {
        width: '50%',
        height: '80%',
        display: 'flex',
        border: '0px solid red',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    main: {
        width: '90%',
        height: '100%',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '5%',
    },
    signinicons: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid black',
        width: '100%',
        height: '15%',
        justifyContent: 'space-between',
        position: "relative",
    },
    signintext: {
        fontSize: "28px !important",
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    facebook: {
        width: "30%",
        height: '60%',
        backgroundColor: '#F5F5F5',
        border: '1px solid #E4E4E4',
        color: '#707070',
        borderRadius: '50%',
        fontSize: '12px',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5px',
    },
    twitter: {
        width: "30%",
        height: '60%',
        backgroundColor: '#F5F5F5',
        border: '1px solid #E4E4E4',
        color: '#707070',
        borderRadius: '50%',
        fontSize: '12px',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        height: '85%',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    texttitle: {
        position: 'relative',
        top: '14px',
        fontSize: '14px',
        fontWeight: '650',
        display: 'flex',
    },
    
    signinbutton: {
        width: '100%',
        color: '#fff',
        background: '#ff416c',
        background: 'linear-gradient(to right, #ff4b28, #ff228c)',
        transform: 'translateX(0)',
    },
    rememberforgot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    remember: {
        color: '#ff416c',
    },
    main2: {
        width: '50%',
        height: '100%',
        display: 'flex',
        border: '0px solid red',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ff416c',
        background: 'linear-gradient(to left, #ff4b28, #ff228c)',
        transform: 'translateX(0)',
    },
    box2: {
        width: '60%',
        height: '40%',
        border: '0px solid black',
        flexDirection: 'column',
        alignItems: 'center',
        top: '40px',
    },
    welcomelogin: {
        fontSize: '35px',
        fontWeight: '650',
        color: '#fff',
    },
    acc: {
        color: '#fff',
        fontSize: '20px',
        position: 'relative',
        top: '15px',
    },
    signupbtn: {
        color: '#fff !important',
        marginTop: '10% !important',
        borderColor: '#fff !important',
    },
    emailtext:{
        backgroundColor: '#F5F5F5',
        [`& fieldset`] : {
            borderRadius: '50px',
        }
    },
    passwordtext:{
        backgroundColor: '#F5F5F5',
        // background:'#eee',
        [`& fieldset`] : {
            borderRadius: '50px',
        }
    }
    



})

function SignIn(props) {
    const classes = useStyles()

    const [loginObj, setLoginObj] = useState({ email: '', password: '' })
  const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '' })

    const openSignup = () => {
        props.listenTologin1()
      }

      const takeEmail = (event) => {
        setLoginObj(prevState => ({
          ...prevState,
          email: event.target.value
        }))
        console.log(event.target.value)
      }
    
      const takePassword = (event) => {
        setLoginObj(prevState => ({
          ...prevState,
          password: event.target.value
        }))
        console.log(event.target.value)
      }

      const submit = () => {
        let emailTest = emailRegex.test(loginObj.email)
        let passwordTest = passwordRegex.test(loginObj.password)
    
        if (emailTest === false) {
          setRegexObj(prevState => ({
            ...prevState,
            emailBorder: true,
            emailHelper: 'Enter valid e-mail or phone number'
          }))
        }
        else if (emailTest === true) {
          setRegexObj(prevState => ({
            ...prevState,
            emailBorder: false,
            emailHelper: ""
          }))
        }
    
        if (passwordTest === false) {
          setRegexObj(prevState => ({
            ...prevState,
            passwordBorder: true,
            passwordHelper: 'Enter valid password'
          }))
        }
        else if (passwordTest === true) {
          setRegexObj(prevState => ({
            ...prevState,
            passwordBorder: false,
            passwordHelper: ""
          }))
        }
        console.log(loginObj)
        if (emailTest === true && passwordTest === true) {
            login(loginObj).then((response) => {
                console.log(response)
                localStorage.setItem("token", response.data.access_token)
            }).catch((error) => {
                console.log(error)
            })
          console.log("login Success")
        }
      }
    


    return (
        <div>
            <Paper elevation={3} className={classes.container1}>
                <Box className={classes.main1}>
                    <Box className={classes.main}>
                        <Box className={classes.signinicons}>
                            <Box className={classes.signintext}>Sign In</Box>
                            <Box className={classes.icons}>
                                <Box className={classes.facebook}><img src='assets/facebook.png' width="55%" height="50%" /></Box>
                                <Box className={classes.twitter}><img src='assets/twitter.png' width="52%" height="60%" /></Box>
                            </Box>
                        </Box>
                        <Box className={classes.form}>
                            <Box className={classes.texttitle}>USERNAME</Box>
                            <Box><TextField className={classes.emailtext} onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} sx={{ width: 430 }} label='Username' variant="outlined" size="medium" /></Box>
                            <Box className={classes.texttitle}>PASSWORD</Box>
                            <Box><TextField className={classes.passwordtext} onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} sx={{ width: 430 ,color:'gray'}} label='password' variant="outlined" size="medium" borderRadius='80%' /></Box>
                            <Box >
                                <Button className={classes.signinbutton} onClick={submit} sx={{ borderRadius: 50, height: 50 }} variant="contained" width='100%' >Sign In</Button>
                            </Box>
                            <Box className={classes.rememberforgot}>
                                <Box className={classes.remember}> <Checkbox defaultChecked sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }} />Remember Me</Box>
                                <Box><Button className={classes.texttitle1} sx={{ color:'#888888',fontWeight:'550'}}size="x-small" variant='text'>Forget Password?</Button></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.main2}>
                    <Box className={classes.box2}>
                        <Box className={classes.welcomelogin}>Welcome to login</Box>
                        <Box className={classes.acc}>Don't have an account?</Box>
                        <Box>
                            <Button className={classes.signupbtn} onClick={openSignup} sx={{ borderRadius: 50, height: 45, width: 110 }} variant="outlined"  >Sign Up</Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </div>
    )
}

export default SignIn