import React from 'react';
import {ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacityComponent} from 'react-native';

const styles = StyleSheet.create({
    
    basicContainer: {
        flex:1,
        backgroundColor:"#a8dbdcff",
        alignItems: "center",
        
    },
    logo:{
        width: 200,
        height: 200,
        marginTop: 50,
        justifyContent:"flex-start",
    },
    slogan:{
        fontSize:27,
        color:"#e63a46",
        marginBottom:300,
        fontWeight:"bold",
    },
    redButton:{
        width: "90%",
        height:60,
        backgroundColor: "#e63a46",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:15,
        marginBottom: 20,
        marginTop:40,
    },
    whiteText:{
        fontSize: 25,
        color: "white",
        
    },
    redText:{
        fontSize: 25,
        color: "#e63a46",
    },
    grayText:{
        fontSize: 18,
        color: "gray",
    },
    grayButton:{
        width: "90%",
        height:60,
        backgroundColor: "#eeeeeeff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:15,
        
        
    },
    copyright:{
        fontSize:12,
        color:"#eeeeeeff",
        margin: 5,
        bottom: 0,
    },
    backButton:{
        width: 50,
        height: 50,
        backgroundColor: "#C70039",
        position: "absolute",
        top: 40, 
        justifyContent: "flex-start",
        left: 5,
        margin:20,
    },
    textInputArea:{
        width: "95%",
        backgroundColor: "#eeeeeeff",
        borderRadius:18,
        height: 50,
        fontSize: 20,
        paddingLeft:12,
    },
    
})

export{styles}