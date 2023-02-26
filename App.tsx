import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer , StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Home from './screens/home';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '642020767435-7gqmkdk0t0seslegs1mj8kqdnk1mt6ro.apps.googleusercontent.com',
});

const Stack = createStackNavigator(); 

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="login" component={Login} options={{title: "Google Login"}}/>
        <Stack.Screen name="home" component={Home} options={{title: "User Info"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
