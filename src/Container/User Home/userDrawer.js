import React from 'react';
import {connect} from 'react-redux' 
import * as authAction from '../../Action/Action.js'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { bindActionCreators } from 'redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from "axios"

var val=localStorage.getItem("Notification");
 const value=()=>{
const r = localStorage.getItem("data")
    var details = JSON.parse(r)
  
    var n=details.Name
    console.log("name hai ye",n)
     axios.post("http://localhost:3010/NotificationValue", { name: n })
     .then((res)=>{
         localStorage.setItem("Notification",res.data[0].Notifications)
       
     })
    

}


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function PrimarySearchAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const handle = () => {
       
        handleClose()
        props.history.push('/Notification')
    }
    const handleLogout=()=>{
   
        props.action.auth.Logout()
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        props.history.push("/")
    
      }
    console.log("mi9l gya notification2",value)
    const menuId = 'primary-search-account-menu';
    value()
    const renderMenu = (
 
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

        </Menu>
    );
    console.log("mi9l gya notification3",value())
    value()
    // getNotification()
    const mobileMenuId = 'primary-search-account-menu-mobile';
  
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Tooltip title="Upcoming Drive">
                    <FormatListBulletedIcon onClick={() => { props.history.push('/UpcomingDrive') }}/>
                    </Tooltip>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Tooltip title="Home">
                    <AccountCircle onClick={() => { props.history.push('/HomeUser') }}/>
                    </Tooltip>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={val}color="secondary">
                    <Tooltip title="Notification">
                        <NotificationsIcon 
                        onClick={handleClickOpen}
                        //  onClick={handleClickOpen}
                         />
                        </Tooltip>
                    </Badge>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                   
                    <Tooltip title="Logout">
                        <ExitToAppIcon  onClick={handleLogout}/>
                        </Tooltip>
                  
                </IconButton>
            </MenuItem>
        </Menu>
    );
    console.log("mi9l gya notification4",value)
    value()
    return (
     
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    
                    <Typography className={classes.title} variant="h6" noWrap>
                    &nbsp; &nbsp;  Placement cell &nbsp;
                    </Typography>
                    
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                        <Tooltip title="Upcoming Drive">
                            <FormatListBulletedIcon onClick={() => { props.history.push('/UpcomingDrive') }} />
                            </Tooltip>

                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                        <Tooltip title=" Home">
                            <AccountCircle onClick={() => { props.history.push('/HomeUser') }}/>
                            </Tooltip>

                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={val} color="secondary">
                            <Tooltip title="Notification">
                                <NotificationsIcon 
                        // onClick={() => { 
                           
                        //     {handleClickOpen}
                        //     Notification==0;
                        //  }}
                        onClick={handleClickOpen}
                         />
                                </Tooltip>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Tooltip title="Notification">
                                <ExitToAppIcon onClick={handleLogout} />
                                </Tooltip>
                            </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            {/* <AccountCircle /> */}
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Drive Added</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        drive added by admin
          </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handle} color="primary">
                        check
          </Button>

                </DialogActions>
            </Dialog>
            {renderMobileMenu}
            {renderMenu}
        </div>
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
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PrimarySearchAppBar))

// export default withRouter(PrimarySearchAppBar) 