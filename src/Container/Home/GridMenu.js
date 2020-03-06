import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import Graph from './chart'
import Switch from '@material-ui/core/Switch';
import BI from '../../Image/back.jpg'
import GraphImage from '../../Image/graph.png'
import TableImage from '../../Image/table.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PlacedStudent from '../../Image/group.png'
import CompanyDetail from '../../Image/company.jpg'
import Drive from '../../Image/drive.jpg'
import Upcoming from '../../Image/upcoming2.jpg'
import Approve from '../../Image/aproval.jpg'
import StuDetails from '../../Image/stu1.jpg'
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  paper: {

    //  margin: 'auto',
    width: '20%',
    height: 'auto',
    marginTop: 20,
    marginLeft: 50,
    // height:'25%'

    // backgroundColor:"#212121"
  },
  root: {
    height: "100vh",
    backgroundImage: `url(${BI})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflow: "auto",


  },
  // graphImage:{
  //      height:'180'
  // }

});




function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <Graph />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const classes = useStyles();
  const [openD, setOpen] = React.useState(false);
  // const [setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (


    <Grid
      container
      control={<Switch checked={checked} onChange={handleChange} />}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      className={classes.root}


    >
      <Slide direction="left" in timeout={1000} >
        <Card className={classes.paper}>

          <CardActionArea>
            <CardMedia
              component="img"
              image={GraphImage}
              onClick={handleClickOpen}
              title=" Placement Graph"
            />
            <CardContent>
              <Typography>
                Placement Graph
          </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>
      <SimpleDialog open={openD} onClose={handleClose} />




      <Slide direction="left" in timeout={1000} >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.graphImage}
              image={TableImage}
              onClick={() => { props.history.push('/GraphData') }}
              title=" Placement Table"
            />
            <CardContent>
              <Typography  >
                Placement Table
          </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Slide>
      <Slide direction="up" in timeout={1000} >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={StuDetails}
              className={classes.graphImage}
              onClick={() => { props.history.push('/StudentDetail') }}
              title=" Student Detail"
            />
            <CardContent>
              <Typography  >
                Student Detail
          </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Slide>

      <Slide direction="up" in timeout={1000} >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={Drive}
              className={classes.graphImage}
              onClick={() => { props.history.push('/AddDrive') }}
              title="Add Upcoming Drive "
            />
            <CardContent>
              <Typography  >
                Add Upcoming Drive
          </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Slide>
      <Slide direction="down" in timeout={1000} >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={Upcoming}
              className={classes.graphImage}
              onClick={() => { props.history.push('/Upcoming') }}
              title="Upcoming Drive Details"
            />
            <CardContent>
              <Typography  >
                Upcoming Drive Details
          </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Slide>
      <Slide direction="down" in timeout={1000} >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={PlacedStudent}
              className={classes.graphImage}
              onClick={() => { props.history.push('/Place') }}
              title="Placed Students"
            />
            <CardContent>
              <Typography  >
                Placed Students
          </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Slide>
      <Slide direction="right" in timeout={1000} >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={Approve}
              className={classes.graphImage}
              onClick={() => { props.history.push('/Approve') }}
              title="Approve Students"
            />
            <CardContent>
              <Typography  >
                Approve Students
          </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Slide>
      <Slide direction="right" in timeout={1000} >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={CompanyDetail}
              className={classes.graphImage}
              onClick={() => { props.history.push('/CompanyDetails') }}
              title="Company Details"
            />
            <CardContent>
              <Typography  >
                Company Details
          </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </Slide>
    </Grid>


  );
}
