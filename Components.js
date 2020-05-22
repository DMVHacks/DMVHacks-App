import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-elements";

function MyText({ fontSize = "1em", color = "#000", children }) {
    return <Text style={{
        fontSize: fontSize,
        color: color,
        fontFamily: "Lato"
    }}>
        {children}
    </Text>
}

function Header({ fontSize = "5em", color = "#000", children }) {
    return <MyText fontSize={ fontSize } color={ color }>
        {children}
    </MyText>
}

function BackButton({ navigation }) {
    return (
        <Button
            title="Go back"
            style={{
                marginTop: "0.5em",
                marginBottom: "3em",
            }}
            onClick={ () => { navigation.goBack() } }
        />
    )
}

export {
    Header,
    MyText,
    BackButton,
};