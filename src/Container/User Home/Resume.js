import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './pdf'
import Grid from '@material-ui/core/Grid';
class Resume extends Component {
    render() {
     
        return (
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
                <PDFViewer style={{height:'100vh',width:'50%'}}>
                    <MyDocument />
                </PDFViewer>
            </Grid>
        )
    }
}
export default Resume
