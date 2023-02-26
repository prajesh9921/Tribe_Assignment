import React from "react";
import {View, Image, StyleSheet} from "react-native";
import { StackActions} from '@react-navigation/native';
import { GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-google-signin/google-signin';


const Login = ({navigation}: {navigation: any}) => {

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo)
          if (userInfo !== null){
            navigation.dispatch(
              StackActions.replace("home", {name: userInfo.user.name, email: userInfo.user.email, url: userInfo.user.photo})
            );
          };
        } catch (error: any) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("User cancelled the login flow");
            console.log(error);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("Operation (e.g. sign in) is in progress already");
            console.log(error);
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("Play services not available or outdated");
            console.log(error);
          } else {
            console.log(error);
          }
        }
      };


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./assets/img.png')}/>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image:{
    height: 300,
    width:300,
    marginBottom: 30
  }
})

export default Login;