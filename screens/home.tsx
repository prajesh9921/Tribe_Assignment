import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { StackActions} from '@react-navigation/native';
import { GoogleSignin} from '@react-native-google-signin/google-signin';

const Home = ({route, navigation}: {route: any, navigation: any}) => {

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            navigation.dispatch(
                StackActions.replace("login")
              );
            console.log("User signed out");
            } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.photo}
                source={{uri: route.params.url}}             
            />
            <Text style={styles.text}>Name: {route.params.name}</Text>
            <Text style={styles.text}>Email: {route.params.email}</Text>
            <TouchableOpacity
                onPress={signOut}
            >
                <View style={styles.signOutButton}>
                    <Text style={styles.signOutText}>Sign Out</Text>
                </View>
            </TouchableOpacity>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: "black",
        fontSize: 20,
        marginVertical: 5
    },
    photo:{
        width: 160,
        height: 160,
        borderRadius: 160 / 2,
        marginBottom: 20
    },
    signOutButton:{
        backgroundColor: "#4285f4",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    signOutText:{
        fontSize: 18,
        color: "white"
    }
})

export default Home;