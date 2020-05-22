import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Header, MyText, BackButton } from "../Components";
import { classlist } from "../Classes";
import { Button } from "react-native-elements";

let styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: Dimensions.get("screen").width * 0.5,
        marginHorizontal: "auto"
    },
    bluebox: {
        display: "flex",
        borderRadius: "0.5em",
        backgroundColor: "#4287f5",

        marginVertical: 10,
        padding: "1em",
        color: "#fff",
    }
});

function ClassInfoCompact({ className, navigation }) {
    let classInfo = classlist[className];
    return (
        <View style={ styles.bluebox }>
            <Header color="#fff" fontSize="3em">{ classInfo.title }</Header>
            <MyText color="#fff">{ classInfo.shortDesc }</MyText>
            <Button
                title="Learn more"
                style={{
                    marginVertical: "1em",
                }}
                onClick={() => {
                    navigation.navigate('Detailed Class Info', { className: className })
                }}
            />
        </View>
    );
}

function ClassInfoDetailed({ className }) {
    let classInfo = classlist[className];
    return (
        <View style={ styles.bluebox }>
            <Header color="#fff" fontSize="5em">{ classInfo.title }</Header>
            <MyText color="#fff">{ classInfo.longDesc }</MyText>
            <Header color="#fff" fontSize="3em">Topics covered:</Header>
            {
                classInfo.topicsCovered.map(item => <MyText color="#fff">{ item }</MyText>)
            }
        </View>
    );
}

function ClassInfoPage({ route, navigation }) {
    let className = route.params.className;
    return (
        <View style={ styles.container }>
            <ClassInfoDetailed className={ className } />
            <BackButton navigation={ navigation }/>
        </View>
    );
}

let temporaryClassList = [
    'python-basic',
    'java-basic',
];

function PersonalClassInfo({ className }) {
    let classInfo = classlist[className];
    return (
        <View style={styles.bluebox}>
            <Header color="#fff" fontSize="3em">{ classInfo.title }</Header>
        </View>
    );
}

function MyClasses({ navigation }) {
    return (
        <View style={styles.container}>
            <Header>My Classes</Header>
            {
                temporaryClassList.map((className) => <PersonalClassInfo className={className}/>)
            }
            <BackButton navigation={ navigation } />
        </View>
    );
};

function ClassesOffered({ navigation }) {
    return (
        <View style={styles.container}>
            <Header>What do we teach?</Header>
            {
                Object.keys(classlist).map(key => (
                    <ClassInfoCompact className={ key } navigation={ navigation }/>
                ))
            }
            <BackButton navigation={ navigation }/>
        </View>
    );
};

export {
    ClassInfoPage,
    ClassesOffered,
    MyClasses,
}

