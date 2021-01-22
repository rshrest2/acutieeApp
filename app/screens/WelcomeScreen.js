import React from 'react';
import {ImageBackground, View, Image, Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacityComponent} from 'react-native';
import {styles} from '../Styles';



function WelcomeScreen ({navigation})
{
    console.log ("App executed");
    return(
        <SafeAreaView style={styles.basicContainer}>
            <Image source ={require("../assets/FitAll.png")} style={styles.logo}/>
            <Text style={styles.slogan}>PRIORITIZE YOU!</Text>
            <View style={styles.redButton}>
                <Button 
                color="white"
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />     
            </View>
            <View style={styles.grayButton}>
                <Button 
                color="#e63a46"
                title="Sign Up"
                onPress={() => navigation.navigate('Sign Up')}
            />  
            </View> 
            <View style={{justifyContent: "flex-end", marginTop:20,}}>
                <Text style={styles.copyright}>Powered by FitAll180 Technologies</Text>
            </View>

        
        </SafeAreaView>);
    
}


export default WelcomeScreen;