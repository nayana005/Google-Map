import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { deleteData, getMarkerData, editData } from '../../services/dataService';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InputBase from '@mui/material/InputBase';
import Modal from '@mui/material/Modal';
import { blue } from '@mui/material/colors';


const useStyles = makeStyles({
    tabular: {
        width: '97vw',
        height: 'auto',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabular1: {
        width: '99%',
        height: '100%',
        border: '1px solid 	#C0C0C0',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        width: '100%',
        height: '50px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '22px',
        fontWeight: '500',
        alignItems: 'ceneter',
        justifyContent: 'center',
        background: 'linear-gradient(to left, #ff228c,#ff4b28 )' ,
        transform: 'translateX(0)',
    },
    sub1: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '140px'

    },
    sub2: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '35px'
        
    },
    sub3: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '50px'
    },
    sub4: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',

    },
    sub12: {
        width: '25%',
        border: '0px solid red',
        position: 'relative',
        top:'8px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '140px'
        
    },
    sub13: {
        width: '25%',
        border: '0px solid red',
        position: 'relative',
        top:'8px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '35px'
        
        
    },
    sub14: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '50px'

    },
    sub21: {
        width: '100%',
        height: '40px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '15px',
        fontWeight: '500',
        marginTop:'10px',
        backgroundColor: 'lightblue'
    },
    sub15:{
       width:'25%',
       display:'flex',
       flexDirection: 'row',
       alignContent: 'center',
       justifyContent: 'center',
    
    },
    sub16:{
        width:'20%',
        border:'0px solid black',
        color: 'black'
    },
    sub17:{
        width:'20%',
        border:'0px solid black',
        color: 'red'
    },
    edit: {
        width:'55vh',
        height:'15vh',
        border:'2px solid green',
        backgroundColor:'#fff',
        position:'relative',
        left:'600px',
        top:'200px',
    
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
    },
    btn1: {
        position: 'relative',
        left:'360px',
        // color:'darkgreen',
        // fontWeight:'580',
        // fontSize:'15px',
        width: '25%',
        color: '#fff',
        background: '#ff416c',
        background: 'linear-gradient(to right, #ff4b28, #ff228c)',
        transform: 'translateX(0)',
    }
})

function TabularView(data) {
    const classes = useStyles()

    const [markerDetails, setMarkerDetails] = useState([])
    const [open, setOpen] = React.useState(false);
    const [inputData, setInputData] = useState({id:'', latitude: '', langitude: ''})

    const handleOpen = (inputData) => {
        console.log(inputData, "getting data details")
        setOpen(true)
        setInputData({ id: inputData.id, latitude: inputData.latitude, longitude: inputData.longitude })
    };
    const handleClose = () => {
        setOpen(false);
    }

    const autoRefresh = () =>{
        window.location.reload();
    }

    useEffect(() => {
        getMarkerData().then((response) => {
            console.log(response, "MarkerApi")
            setMarkerDetails(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(markerDetails, 'state value')


    const updateLatitude = (event) => {
        setInputData(prevState => ({
            ...prevState,
            latitude: event.target.value
        }))
    }
    const updateLongitude = (event) => {
        setInputData(prevState => ({
            ...prevState,
            longitude: event.target.value
        }))
    }

    const saveData = () => {
        editData(inputData)
            .then((response) => {
                console.log(response, 'Updated data')
                autoRefresh()
            })
            .catch((error) => {
                console.log(error)
            })
        setOpen(false);
    }

    const removeData=(data)=> {
        console.log(data, 'data deleted')
        deleteData(data)
        autoRefresh()
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })

     }


    return (
        <div>
            <Box className={classes.tabular}>
                <Paper elevation={3} className={classes.tabular1}>
                    <Paper elevation={1} className={classes.details} >
                        <span className={classes.sub1}>ID</span>
                        <span className={classes.sub2}>Latitude</span>
                        <span className={classes.sub3}>Longitude</span>
                        <span className={classes.sub4}>Edit</span>
                    </Paper>
                    <Box>
                        {
                            markerDetails.map((data) => (
                                <Box>
                                <Box elevation={1} className={classes.sub21} >
                                    <span className={classes.sub12}>{data.id}</span>
                                    <span className={classes.sub13}>{data.latitude}</span>
                                    <span className={classes.sub14}>{data.longitude}</span>
                                    <span className={classes.sub15}>
                                        <span className={classes.sub16} onClick={() => handleOpen(data)} >
                                            <EditOutlinedIcon></EditOutlinedIcon>
                                         </span>
                                        <span className={classes.sub17} onClick={() => removeData(data)} >
                                            <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>       
                                        </span>
                                    </span>
                                </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Paper>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.edit}>
                    <div className="title4">
                        <div className="text" style={{ display: "flex", flexDirection: "column",color:"black" }}>
                            <InputBase  name='' placeholder='id' value={inputData.id} style={{fontWeight: '600'}}/>
                            <InputBase type='textbox' name='' onChange={updateLatitude} placeholder='latitude' defaultValue={inputData.latitude} />
                            <InputBase type='textbox' name='' onChange={updateLongitude} placeholder='longitude' defaultValue={inputData.longitude} />
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <div><Button className={classes.btn1} style={{ textTransform: 'capitalize' }} onClick={saveData}>Save</Button></div>
                    </div>
                </Box>
            </Modal>
            </Box>
        </div>
    )
}

export default TabularView