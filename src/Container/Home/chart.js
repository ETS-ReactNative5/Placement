import React from 'react';
import axios from "axios"
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { Chart, Series, CommonSeriesSettings, Legend, Export, Tooltip, Title } from 'devextreme-react/chart';


const useStyles = theme => ({
  root: {
      flexGrow: 1,
      // height: "100vh",
      // overflow:"auto"
      backgroundColor: 'transparent',
      // opacity:'0.6%'
  
  },
  grid:{
    background:'#fff',
    backgroundColor:'#fff',
    color:'#fff'
  } ,
  Paper:{
   height:theme.spacing(50),
     width:theme.spacing(120),
    // padding:theme.spacing(10),
    margin:theme.spacing(5),
    backgroundColor: 'transparent',
    opacity:'100%',
    // marginLeft:theme.spacing(13),
    // height: "auto",
    // overflow:"auto",
    minWidth:400
  }
 
});
class PlacementChart extends React.Component {
  constructor(props){
    super(props)
    this.state={
      graphData:''
    }
    // this.palette=['#2e7d32', '#388e3c', '#43a047','#66bb6a','#a5d6a7','#7cb342','#8bc34']
  }
  customizeTooltip(arg) {
    console.log("argument in ",arg)
    return {
     
      text: `${arg.percentText} branch: ${arg.seriesName}`
    };
  }
  componentWillMount(){
    axios.post("http://localhost:3010/PlacementGraphdata")
    .then((res)=>{
      console.log("componentWillMount of graph Data",res.data)
      this.setState({graphData:res.data})
      localStorage.setItem("GraphData",JSON.stringify(res.data))
    })
  
  }
  render() {
    const v=this.state.graphData
    const { classes } = this.props;
    console.log(v)
    return (
      <Grid
      className={classes.grid}
      container
      direction="column"
      justify="center"
      alignItems="center"
      md={12}
      
     // style={{background:"transparent",opacity:"100%"}}
  
     

    >
     
      <Chart
        id="chart"
        dataSource={v}
        // width={1000} height={'100vh'}
       
      //  palette = {this.palette}
      palette="soft"
      > 
        <Title
          text="Placement Graph"
      
        />
   
        <CommonSeriesSettings argumentField="Year" type="fullstackedbar" />
        <Series valueField="CSE" name="CSE"/>
        <Series valueField="ME" name="ME" />
        <Series valueField="AE" name="AE" />
        <Series valueField="EE" name="EE" />
        <Series valueField="EC" name="EC" />
        <Series valueField="CE" name="CE" />
        <Series valueField="MBA" name="MBA" />
          <Series valueField="MCA" name="MCA" />
            <Legend verticalAlignment="top"
          horizontalAlignment="center"
          itemTextPosition="right"
        />

        <Export enabled={true} />
        <Tooltip
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>

      
      
    
</Grid>
     );
  }
}
export default (withStyles(useStyles)(PlacementChart));
// export default Chart;
