import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { register } from '../../services/userService';



const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^[a-z]{3,}$/;
///^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const useStyles = makeStyles({
  container2: {
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
  subcontainer1: {
    width: '50%',
    height: '100%',
    display: 'flex',
    border: '0px solid red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ff416c',
    background: 'linear-gradient(to right, #ff4b28, #ff228c)',
    transform: 'translateX(0)',
  },

  box1: {
    width: '70%',
    height: '40%',
    border: '0px solid black',
    flexDirection: 'column',
    alignItems: 'center',
    top: '40px',
  },
  welcomesignup: {
    fontSize: '35px',
    fontWeight: '650',
    color: '#fff',
  },
  account: {
    color: '#fff',
    fontSize: '20px',
    position: 'relative',
    top: '15px',
  },
  signinbtn: {
    color: '#fff !important',
    marginTop: '10% !important',
    borderColor: '#fff !important',
  },
  subcontainer2: {
    width: '50%',
    height: '90%',
    display: 'flex',
    border: '0px solid red',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  mains: {
    width: '90%',
    height: '100%',
    border: '0px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '5%',
  },
  signuptext1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    border: '0px solid black',
    width: '100%',
    height: '15%',
  },
  signuptext2: {
    fontSize: "28px !important",
    fontWeight: '500',
    position: 'relative',
  },
  form: {
    width: '100%',
    height: '95%',
    border: '0px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  texttitle: {
    position: 'relative',
    top: '6px',
    fontSize: '14px',
    fontWeight: '650',
    display: 'flex',
  },
  signupbutton: {
    width: '100%',
    color: '#fff',
    background: '#ff416c',
    background: 'linear-gradient(to right, #ff4b28, #ff228c)',
    transform: 'translateX(0)',
  },
  fnametext: {
    [`& fieldset`]: {
      borderRadius: '50px',
    }
  },
  lnametext: {
    [`& fieldset`]: {
      borderRadius: '50px',
    }
  },
  unametext: {
    [`& fieldset`]: {
      borderRadius: '50px',
    }
  },
  passwordtext: {
    [`& fieldset`]: {
      borderRadius: '50px',
    }
  }

})

function SignUp(props) {
  const classes = useStyles()

  const [signupObj, setSignUpObj] = useState({ firstName: "", lastName: "", email: "", password: "" })
  const [regexObj, setRegexObj] = useState({ firstnameBorder: false, firstnameHelper: "", lastnameBorder: false, lastnameHelper: "", usernameBorder: false, usernameHelper: "", passwordBorder: false, passwordHelper: "" })

  const takeFirstname = (event) => {
    setSignUpObj(prevState => ({
      ...prevState,
      firstName: event.target.value
    }))
    console.log(event.target.value)
  }
  const takeLastname = (event) => {
    setSignUpObj(prevState => ({
      ...prevState,
      lastName: event.target.value
    }))
    console.log(event.target.value)
  }
  const takeUsername = (event) => {
    setSignUpObj(prevState => ({
      ...prevState,
      email: event.target.value
    }))
    console.log(event.target.value)
  }
  const takePassword = (event) => {
    setSignUpObj(prevState => ({
      ...prevState,
      password: event.target.value
    }))
    console.log(event.target.value)
  }

  const submit = () => {
    let firstnameTest = fnameRegex.test(signupObj.firstName)
    let lastnameTest = lnameRegex.test(signupObj.lastName)
    let usernameTest = emailRegex.test(signupObj.email)
    let passwordTest = passwordRegex.test(signupObj.password)
    if (firstnameTest === false) {
      setRegexObj(previousState => ({
        ...previousState,
        firstnameBorder: true,
        firstnameHelper: "Enter valid name"
      }))
    }
    else if (firstnameTest === true) {
      setRegexObj(previousState => ({
        ...previousState,
        firstnameBorder: false,
        firstnameHelper: ""
      }))
    }

    if (lastnameTest === false) {
      setRegexObj(previousState => ({
        ...previousState,
        lastnameBorder: true,
        lastnameHelper: "Enter valid name"
      }))
    }
    else if (lastnameTest === true) {
      setRegexObj(previousState => ({
        ...previousState,
        lastnameBorder: false,
        lastnameHelper: ""
      }))
    }
    if (usernameTest === false) {
      setRegexObj(prevState => ({
        ...prevState,
        usernameBorder: true,
        usernameHelper: 'Enter valid e-mail'
      }))
    }
    else if (usernameTest === true) {
      setRegexObj(prevState => ({
        ...prevState,
        usernameBorder: false,
        usernameHelper: ""
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
    console.log(signupObj)
    if (firstnameTest === true && lastnameTest === true && usernameTest === true && passwordTest === true) {
      register(signupObj).then((response) => {
        console.log(response)
    }).catch((error) => {   
        console.log(error)
    })
      console.log("created success")

    }

  }


  const openSigninpage = () => {
    props.listenTosignup1()
  }

  return (
    <div>
      <Paper elevation={3} className={classes.container2}>
        <Box className={classes.subcontainer1}>
          <Box className={classes.box1}>
            <Box className={classes.welcomesignup}>Welcome to signup</Box>
            <Box className={classes.account}>If you have an account?</Box>
            <Box>
              <Button className={classes.signinbtn} onClick={openSigninpage} sx={{ borderRadius: 50, height: 45, width: 110 }} variant="outlined"  >Sign In</Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.subcontainer2}>
          <Box className={classes.mains}>
            <Box className={classes.signuptext1}>
              <Box className={classes.signuptext2}>Sign Up</Box>
            </Box>
            <Box className={classes.form}>
              <Box className={classes.texttitle}>FIRSTNAME</Box>
              <Box><TextField className={classes.fnametext} onChange={takeFirstname} error={regexObj.firstnameBorder} helperText={regexObj.firstnameHelper} sx={{ width: 430 }} label='Firstname' variant="outlined" size="small" /></Box>
              <Box className={classes.texttitle}>LASTNAME</Box>
              <Box><TextField className={classes.lnametext} onChange={takeLastname} error={regexObj.lastnameBorder} helperText={regexObj.lastnameHelper} sx={{ width: 430 }} label='Lastname' variant="outlined" size="small" /></Box>
              <Box className={classes.texttitle}>USERNAME</Box>
              <Box><TextField className={classes.unametext} onChange={takeUsername} error={regexObj.usernameBorder} helperText={regexObj.usernameHelper} sx={{ width: 430 }} label='Username' variant="outlined" size="small" /></Box>
              <Box className={classes.texttitle}>PASSWORD</Box>
              <Box><TextField className={classes.passwordtext} onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} sx={{ width: 430 }} label='Password' variant="outlined" size="small" /></Box>
              <Box >
                <Button className={classes.signupbutton} onClick={submit} sx={{ borderRadius: 50, height: 50 }} variant="contained" width='100%' >Sign Up</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  )
}

export default SignUp