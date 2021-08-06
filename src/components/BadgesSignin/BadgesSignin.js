import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput,
    StatusBar,
} from 'react-native';
import UserSession from '../../libs/sessions.js';
import Loader from '../Generics/Loader'
import Colors from '../../res/Colors.js';


class Signin extends React.Component{
    state = {
        loading: false,
        errors: [],
        user: undefined,
        isPasswordVisible: true,
        isPasswordConfirmationVisible: true,
        form: {},
    };

    handlePress = async () => {
        try {
            //We set the userr as undefined and loading as true
            this.setState({loading: true, user: undefined});
            //We send the form to signup
            let response = await UserSession.instance.signup(this.state.form);
            
             //if we get an object as response we show the error
            if (typeof response == 'object') {
              let errors = [];
              let cont = 0;
      
              for (let error in response) {
                let key = error;
                if (error == 'non_field_errors') {
                  error = 'password';
                }
      
                errors.push(
                  <View key={cont}>
                    <Text>{`${error} : ${response[key][0]}`}</Text>
                  </View>,
                );
                cont++;
              }
              //we save the errors in errors to show them
              this.setState({loading: false, user: undefined, errors: errors});
            } else {
              //if we did not have errors we save the user data
              this.setState({
                loading: false,
                user: response,
                errors: [],
              });
              //we send the user to login
              if (this.state.user) {
                this.props.navigation.navigate('Login');
              }
            }
          } catch (err) {
            console.log('Sign up err', err);
            throw Error(err);
          }
        };
    toggleisPasswordVisible = () => {
        if (this.state.isPasswordVisible) {
            this.setState({isPasswordVisible: false});
        } else {
            this.setState({isPasswordVisible: true});
            }
        };
    toggleisPasswordConfirmationVisible = () => {
        if (this.state.isPasswordConfirmationVisible) {
            this.setState({isPasswordConfirmationVisible: false});
        } else {
            this.setState({isPasswordConfirmationVisible: true});
            }
        };


    render(){
        const {isPasswordVisible, isPasswordConfirmationVisible, loading, error, user} = this.state;
        if (loading === true && !user) {
        return <Loader />;
        }

        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true}/>
                    <ImageBackground source={{uri: 'https://images.pexels.com/photos/7972200/pexels-photo-7972200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.image}>
                        <View style={styles.layerColor}>
                            <View style={styles.form}>
                                <Text style={styles.title}>SignUp</Text>
                                <Image style={styles.logo} source={{uri:'https://image.flaticon.com/icons/png/512/3025/3025015.png'}}/>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Username"
                                    placeholderTextColor={Colors.charade}
                                    onChangeText={text => {
                                        this.setState(prevState => {
                                            let form = Object.assign({}, prevState.form);
                                            form.username = text;
                                            return {form};
                                        });
                                    }}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor={Colors.charade}
                                    onChangeText={text => {
                                        this.setState(prevState => {
                                            let form = Object.assign({}, prevState.form);
                                            form.email = text;
                                            return {form};
                                        });
                                    }}
                                />      

                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={isPasswordVisible}
                                    placeholder={'Password'}
                                    keyboardAppearance="dark"
                                    placeholderTextColor={Colors.charade}
                                    onChangeText={text => {
                                        this.setState(prevState => {
                                            let form = Object.assign({}, prevState.form);
                                            form.password = text;
                                            return {form};
                                        });
                                    }}
                                />
                                <TouchableOpacity onPress={this.toggleisPasswordVisible}>
                                    <Image
                                        style={{
                                            marginLeft: 200,
                                            marginTop: -26,
                                            width: 16,
                                            height: 13,
                                        }}
                                        source={
                                            isPasswordVisible
                                            ? require('../../assets/show.png')
                                            : require('../../assets/hide.png')
                                        }
                                    />
                                </TouchableOpacity> 

                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={isPasswordConfirmationVisible}
                                    placeholder={'Password confirmation'}
                                    keyboardAppearance="dark"
                                    placeholderTextColor={Colors.charade}
                                    onChangeText={text => {
                                        this.setState(prevState => {
                                            let form = Object.assign({}, prevState.form);
                                            form.password_confirmation = text;
                                            return {form};
                                        });
                                    }}
                                />
                                <TouchableOpacity onPress={this.toggleisPasswordConfirmationVisible}>
                                    <Image
                                        style={{
                                            marginLeft: 200,
                                            marginTop: -26,
                                            width: 16,
                                            height: 13,
                                        }}
                                        source={
                                            isPasswordVisible
                                            ? require('../../assets/show.png')
                                            : require('../../assets/hide.png')
                                        }
                                    />
                                </TouchableOpacity> 

                                <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                    <Text style={styles.buttonText}>Signup</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </ImageBackground>
            </View>
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
        width: 100,
        height: 100,
        marginTop: 15,
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50
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
        borderRadius:10,
        borderBottomWidth: 1,
        borderColor:Colors.blacks,
        width:250,
        marginTop: 30,
        width: 200
    },

    button:{
        padding:15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: '#121212cc',
        borderColor: Colors.black,
        borderWidth: 1,
        width: 150,
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