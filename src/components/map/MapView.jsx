import React from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import { useState } from 'react';
import { markerData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../services/dataService';

const MapView = (props) => {
   const dispatch = useDispatch() 
   const result = useSelector((state) => state.markerReducer)
   console.log(result, "added result")

    const [view, setView] = useState([
                {lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -123.1434325},
                {latitude: 47.3084488, longitude: -123.2140121},
                {latitude: 47.5524695, longitude: -122.0425407},
                {latitude: 46.759423, longitude: -121.021071},
                {latitude: 47.9052192687988, longitude: -121.988426208496},
                {latitude: 47.8307081, longitude: -122.4434325},
                {latitude: 46.3084488, longitude: -120.4140121},
                {latitude: 46.5524695, longitude: -122.8425407},
                {latitude: 47.5524695, longitude: -122.0425407},
                {latitude: 48.759423, longitude: -122.021071},
                {latitude: 46.9052192687988, longitude: -121.988426208496},
                {latitude: 46.8307081, longitude: -122.3434325},
                {latitude: 46.3084488, longitude: -122.4140121},
                {latitude: 46.5524695, longitude: -122.8425407},]
    )

      const displayMarkers = () => {
        return view.map((store, index) => {
          return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
          }}
            onClick={() => {
              console.log("You clicked me!")
              newData()
              dispatch(markerData(store))
            
              
            }
    
        }/>
        })
      }

      const newData = () => {
        // console.log(result , "Final result")
        addData(result[0]).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
    
      }

  return (
    <Map
          google={props.google}
          zoom={8}
          style={{ width: '100%', height: '100%' }}
          initialCenter={{ lat: 47.444, lng: -122.176}} 
          >
            {displayMarkers()}
            {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
          </Map>
       
  )
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAcnZF6o8A6EgqZ8FH8aTRJ4azO-mdrHvU'
})(MapView);