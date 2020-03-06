import React, { Component } from 'react';
import Login from './Container/LoginForm/LoginForm'
import SignUp from './Container/SignUp/SignUp'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import CRoute from './Route/Route.js'
import HomeUser from './Container/User Home/HomeUser'
import Invalid from './Container/invalid/invalid/invali'
import AddDrive from '../src/Container/test/AddDrive'
import StudentDetail from '../src/Container/test/StuDetail'
import DriveDetail from '../src/Container/test/DriveDetail'
import UpcomingDrive from './Container/User Home/UpcomingDrive.js'
import Notification from './Container/test/Notification'
import EditHomeUser from './Container/User Home/EditHomeUser'
import Header from './Container/Header/header'
import Header2 from './Container/Header/Header2'
import ApproveStudent from './Container/test/ApproveStudents'
import ViewStudent from './Container/test/ViewStudentDetail'
import PlacedStudent from './Container/test/PlacedStudent'
import CompanyDetails from './Container/test/CompanyDetails'
import CompanyDetailList from './Container/test/CompanyDetailList'
import GridMenu from '../src/Container/Home/GridMenu'
import Resume from './Container/User Home/Resume'
import GraphData from './Container/Home/GraphData'
import Place from './Container/test/place'
import Upcoming from './Container/test/upcoming'
import Approve from './Container/test/approve'
import Notify from './Container/User Home/Notify'
class App extends Component {
  render() {
    return (
    
      <Router>
   <Header />
   <Header2 />
        <div >
        <Switch>
        <CRoute exact cprivate path="/GraphData" component={GraphData}></CRoute>
        <CRoute exact cprivate path="/Place" component={Place}></CRoute>
        <CRoute exact cprivate path="/Upcoming" component={Upcoming}></CRoute>
        <CRoute exact cprivate path="/Approve" component={Approve}></CRoute>
        <CRoute exact cprivate path="/Notify" component={Notify}></CRoute>
     
     
       <CRoute exact cprivate path="/" crole="admin"  component={Login}></CRoute>
       <CRoute exact cprivate path="/Resume" component={Resume}></CRoute>
       <CRoute exact cprivate path="/GridMenu" crole="admin"  component={GridMenu}></CRoute>
       <CRoute exact cprivate path="/HomeAdmin"  component={GridMenu}></CRoute>
       <CRoute exact  path="/HomeUser"  component={HomeUser}></CRoute>
       <CRoute exact  path="/ViewStudent"  component={ViewStudent}></CRoute>
       <CRoute exact  path="/ApproveStudent"  component={ApproveStudent}></CRoute>
       <CRoute exact  path="/CompanyDetailList"  component={CompanyDetailList}></CRoute>
       <CRoute exact  path="/PlacedStudent"  component={PlacedStudent}></CRoute>
       <CRoute exact  path="/CompanyDetails"  component={CompanyDetails}></CRoute>

       <CRoute exact cprivate path="/SignUp" component={SignUp}></CRoute>
       <CRoute exact cprivate path="/StudentDetail" component={StudentDetail}></CRoute>
       <CRoute exact cprivate path="/AddDrive" component={AddDrive}></CRoute>
       <CRoute exact cprivate path="/DriveDetail" component={DriveDetail}></CRoute>
       <CRoute exact cprivate path="/Invalid" component={Invalid}></CRoute>
       <CRoute exact cprivate path="/Notification" component={Notification}></CRoute>
       <CRoute exact cprivate path="/EditHomeUser" component={EditHomeUser}></CRoute>
       <CRoute exact cprivate path="/UpcomingDrive" component={UpcomingDrive}></CRoute>


       
        </Switch>
        </div>

      </Router>
    );
  }
}

 export default App;
