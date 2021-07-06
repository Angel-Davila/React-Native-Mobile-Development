import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Pressable,
    Linking
} from 'react-native';

import Colors from '../../res/Colors.js';


class Signin extends React.Component{


    handlePress = () => {
        this.props.navigation.navigate('BadgesLogin');
    };



    render(){
        return(
            <KeyboardAvoidingView
                style={styles.containerKey}>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/7972200/pexels-photo-7972200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.image}>
                        <View style={styles.layerColor}>

                            <ScrollView style={styles.container}>
                                    <View style={styles.content}>
                                        <Image style={styles.logo} source={{uri:'https://image.flaticon.com/icons/png/512/3025/3025015.png'}}/>
                                        <View style={styles.form}>
                                            
                                            <Text style={styles.inputText}>Username</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Username'}/>

                                            <Text style={styles.inputText}>Email</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Email'}/>

                                            <Text style={styles.inputText}>Password</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Password'}
                                                secureTextEntry={true}/>  
                                            <Text style={styles.inputText}>Confirm Password</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Confirm Password'}
                                                secureTextEntry={true}/>                                           
                                            <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                                <Text style={styles.buttonText}>Create Account</Text>
                                            </TouchableOpacity>


                                    

                                        </View>
                                    </View>
                            </ScrollView>
                        </View>

                    </ImageBackground>
            </KeyboardAvoidingView>
        );        
    }
}

const styles = StyleSheet.create({

    containerKey:{
        flex: 1
    },

    container: {
        flex: 1,
        color: Colors.charade,
       

    },

    image:{
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',

    },

    content:{
        flex:1,
        margin: 20,
        width:'90%',
        height: '90%',
        marginTop: 50,
        backgroundColor: '#FFFFFF60',
        borderRadius: 25,
        alignItems: 'center'

    },
    
    form:{
        alignItems: 'center',
        position: 'relative'

    },

    layerColor:{
        flex:2,
        backgroundColor:'#D8A9E660',
        justifyContent: 'center',
    },

    logo: {
        width: 200,
        height: 200,
        marginTop: 15,
    },

    inputText:{
        fontSize:18,
        marginTop: 10,
        marginBottom:5,
        marginLeft:10,
        fontWeight: 'bold',
        color: Colors.black,
    },

    input:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.blacks,
        width:250,
    },

    button:{
        padding:15,
        marginTop: 50,
        borderRadius: 15,
        borderColor: Colors.black,
        borderWidth: 1,
        backgroundColor: '#121212cc',
        width: 250,
        bottom: 20,

    },

    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    },

    Text: {
        marginTop: 5,
        textAlign: 'center',
        color: Colors.black,
        marginBottom: 10
    },
    facebookIcon:{
        marginTop: 20,
        marginBottom: 25,
        height:50,
        width:50,
        resizeMode: 'cover',
        alignItems: 'flex-end'
    }

    
});
    export default Signin;