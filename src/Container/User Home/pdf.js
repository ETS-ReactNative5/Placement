import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: 'white',
    height: '100'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },

});

export default function MyDocument() {
  const r = localStorage.getItem("data")
  var details = JSON.parse(r)
  return (
    <Document >
      <Page size="A4" style={styles.page}>
      <Text style={{marginLeft:250}}>RESUME</Text>
        <View style={styles.section}>
          <Text>Name : {details.Name}</Text>
          <Text>Branch : {details.Branch}</Text>
          <Text>Email : {details.Email}</Text>
          <Text>Gender : {details.Gender}</Text>
          <Text>          </Text>
          {/* <image style={{ width: 130, height: 130, marginLeft:20}} src={details.image} /> */}
          <Text>Personal Details</Text>
          <Text>Father Name : {details.FatherName}</Text>
          <Text>Mother Name : {details.MothersName}</Text>
          <Text>Birth date : {details.DOB}</Text>
          <Text>Age : {details.Age}</Text>
          <Text>          </Text>
          <Text>Educational Details</Text>
          <Text>Graduation Stream : {details.Branch}</Text>
          <Text>College Aggreate : {details.BTECHAGGREGATE}</Text>
          <Text>Higher Secondary School : {details.HSCSCHOOLNAME}</Text>
          <Text>12th % : {details.HSC}</Text>
          <Text>Senior Secondary School : {details.SSCSCHOOLNAME}</Text>
          <Text>10th % : {details.SSC}</Text>
        </View>
      </Page>
    </Document>
  )
};