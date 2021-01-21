import React from 'react';
import {ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacityComponent} from 'react-native';



function WelcomeScreen(props)
{
    console.log ("App executed");
    return(
        <SafeAreaView style={styles.wsstyle}>
        <Image source ={require("../assets/FitAll.png")} style={styles.logo}/>
        <Text style={styles.slogan}>PRIORITIZE YOU!</Text>
        <View style={styles.loginButton}>
            <Button 
            color="white"
            title="Login"
            onPress={() => Alert.alert('Login Pressed')}
            />     
        </View>
        <View style={styles.signupButton}>
        <Button 
            color="#e63a46"
            title="Sign Up"
            onPress={() => Alert.alert('Sign Up Pressed')}
            />  
        </View> 
        <Text style={styles.copyright}>Powered by FitAll180 Technologies</Text>


        
        </SafeAreaView>);
    
}
const styles = StyleSheet.create({
    wsstyle: {
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
    loginButton:{
        width: "90%",
        height:60,
        backgroundColor: "#e63a46",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:15,
        marginBottom: 20,
        marginTop:40,
    },
    textOne:{
        fontSize: 25,
        color: "#a8dbdcff",
    },
    textTwo:{
        fontSize: 25,
        color: "#e63a46",
    },
    signupButton:{
        width: "90%",
        height:60,
        backgroundColor: "#eeeeeeff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:15,
        
        
    },
    loginstyle:{
        fontSize: 30,
        color: "white"
        
    },
    copyright:{
        fontSize:12,
        color:"#eeeeeeff",
    },
    
})

export default WelcomeScreen;