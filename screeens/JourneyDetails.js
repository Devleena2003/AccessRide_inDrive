import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import JourneyDetailsMap from "../components/JourneyDetailsMap";
import Timer from "../components/Timer";

const JourneyDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 25,
        }}
      >
        Wish you a safe journey!
      </Text>
      <JourneyDetailsMap />
      <Text style={{ fontSize: 22, alignSelf: "center", marginVertical: 20 }}>
        Amount Payable : <Text style={{ fontWeight: "bold" }}>$250</Text>
      </Text>
      <Timer time={10} />
        <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'center', marginTop : 20}}>
        <Text style={{fontSize : 20}}>Contact Driver: </Text>
      <Ionicons name="md-call" size={24} color="black" />
      <Text selectable style={{fontSize : 20, fontWeight : "bold"}}>0123456789</Text>
        </View>
      <View style={{flexDirection : 'row', justifyContent : "space-evenly", marginTop : 15}}>
        <TouchableOpacity style={[styles.btn, {backgroundColor : '#d9d9d9'}]}>
          <Text style={{ fontSize: 15 }}>Cancel Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("DriverDetails")}>
          <Text style={{ fontSize: 15 }}>See Driver's Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JourneyDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  btn: {
    alignSelf: "center",
    backgroundColor: "#b7ed55",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});