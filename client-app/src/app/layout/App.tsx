import {useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './navbar';
import ActivityDashbaord from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const[activities, setActivities] = useState<Activity[]>([]);

  useEffect(() =>{
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response =>{
      setActivities(response.data);
    })
  },[])


  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashbaord activities = {activities}/>
   </Container>
   </>
  )
}
 
export default App
