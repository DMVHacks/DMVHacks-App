import { Header } from "../Components";

import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View, Linking } from 'react-native';

let logoImage = require("../assets/DMVHacks-Logo.png");

let googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSd4_2nswYm2_qzX67XBPGpMEX-dUKemgB6Irqz1Do9hMwGStA/viewform";

let welcomeStyles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal: "auto"
    },
});

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={welcomeStyles.container}>
            <Header>Welcome to DMVHacks!</Header>
            <Button
                title="My Classes"
                style={{
                    marginVertical: "0.5em"
                }}
                onPress={() => 
                    navigation.navigate('My Classes')
                }
            />
            <Button
                title="Available Classes"
                style={{
                    marginVertical: "0.5em"
                }}
                onPress={() => 
                    navigation.navigate('Classes Offered')
                }
            />
            <Button
                title="Register"
                style={{
                    marginVertical: "0.5em"
                }}
                onPress={() => {
                    Linking.canOpenURL(googleFormLink).then(
                        supported => {
                            if (supported) {
                                Linking.openURL(googleFormLink);
                            } else {
                                console.error("Cannot open this url (??): ", googleFormLink);
                            }
                        }
                    )
                }}
            />
        </View>
    );
};