import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MapView from '../map/MapView'
import SignIn from '../signin/SignIn'
import SignUp from '../signup/SignUp'
import MapTab from '../tabs/Tab'
import TabularView from '../tabular/TabularView'


function Router1() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route  path='/map' element={<MapView/>}/>
                    <Route  path='/tabular' element={<TabularView/>}/>
                    <Route  path='maptab' element={<MapTab/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Router1