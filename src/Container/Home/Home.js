import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import WorkIcon from '@material-ui/icons/Work';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { bindActionCreators } from 'redux';
import * as authAction from '../../Action/Action'
import {connect} from 'react-redux' 
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Toolbar from '@material-ui/core/Toolbar';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
  bar:{
    flexGrow:1,
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    {...props}
  />
));
// const useStyles = makeStyles(theme => ({
//   root: {
//  padding: theme.spacing(1),
//  fontSize: 50,
//     [theme.breakpoints.down('650')]: {
//       backgroundColor: theme.palette.secondary.main,
//     },
//   },
// }));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

 function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
   
    props.action.auth.Logout()
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    props.history.push("/")

  }

  return (
<Fragment>
    <div className="Admin">
     
    <Toolbar>
      <MenuIcon  style={{color:'white'}}
      onClick={handleClick} />
      <Typography style={{color:'white', fontSize: 20 ,flexGrow:1,paddingLeft:20}}> Welcome Admin </Typography>
      <HomeIcon 
       onClick={() => {props.history.push('/HomeAdmin') }}
      style={{color:'white'}}
      fontSize="30"/> &nbsp; &nbsp; &nbsp;
      <ExitToAppIcon  onClick={handleLogout}  style={{color:'#fafafa'}} fontSize="30" />
      </Toolbar>

    {/* <Hidden smDown>
      <Box className={classes.root} >
        <MenuIcon
         style={{fontSize: 30 }} onClick={handleClick} />
      <Typography style={{color:'#fafafa', paddingLeft:40, fontSize: 20 }} display="inline"> Welcome Admin </Typography>
      </Box>
      </Hidden> */}
      <StyledMenu
        id="customized-menu"  
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <StyledMenuItem  onClick={() => {props.history.push('/HomeAdmin') }} >
          <ListItemIcon   >
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledMenuItem>
        
        <StyledMenuItem    onClick={() => {props.history.push('/AddDrive') }} >
          <ListItemIcon   >
            <AddBoxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add Drive" />
        </StyledMenuItem>

        <StyledMenuItem    onClick={() => {props.history.push('/StudentDetail') }}>
          <ListItemIcon>
            <ViewHeadlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Student Details" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => {props.history.push('/DriveDetail') }}>
          <ListItemIcon>
            <DescriptionIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drive details" />
        </StyledMenuItem>
        
        <StyledMenuItem onClick={() => {props.history.push('/PlacedStudent') }}  >
          <ListItemIcon>
            <WorkIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Placed Student" />
        </StyledMenuItem>

        <StyledMenuItem  onClick={() => {props.history.push('/Approvestudent') }} >
          <ListItemIcon>
            <CheckBoxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Approve Student" />
        </StyledMenuItem>
        <StyledMenuItem  onClick={() => {props.history.push('/CompanyDetails') }} >
          <ListItemIcon>
            <ListAltIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Company details" />
        </StyledMenuItem>

        <StyledMenuItem  onClick={handleLogout}  >
          <ListItemIcon>
            < ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary=" Logout" />
        </StyledMenuItem>
        
      </StyledMenu>
      
     
     </div>
     <div >
       {/* {(window.location.path="/HomeAdmin")
       &&
         <Graph />
       }
    */}
       
      </div>
   </Fragment>  
  

  
  );
}
const mapStateToProps = (state) => {
  debugger
  const token = state.Token;
  const role = state.Role;
  const name = state.Name;
  return {
    token: token,
    role: role,
    name: name
  }
}

const mapDispatchToProps = dispatch => ({
  action:
  {
    auth: bindActionCreators(authAction, dispatch)
  }

})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CustomizedMenus))

// export default (withRouter(CustomizedMenus))