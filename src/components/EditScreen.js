import React from "react";
import { View, Text, Button, ScrollView, AsyncStorage, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SettingsScreen from "./SettingsScreen";

class EditScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Temp",
            radius: -1,
            long: 90.0000,
            lat: 30.00000,
            enabled: false,
            onTrip: "Vibrate"
        }
    }
    static navigationOptions = {
        title: 'Edit Waypoint',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    async componentDidMount() {
        try {
            AsyncStorage.getItem(this.props.navigation.getParam('id', 'OOF')).then(
                (item) => {
                    this.setState(JSON.parse(item));
                }
            );
        } catch (error) {
            // Handle errors here
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "stretch", justifyContent: "space-between"}}>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign:"center"}}> Waypoint Name </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign:"center"}}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                    </View>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign:"center"}}> Waypoint Radius </Text>
                    <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign:"center"}}
                    onChangeText={(radius) => this.setState({radius})}
                    value={this.state.radius}/>
                </View>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign:"center"}}> Waypoint Longitude </Text>
                    <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign:"center"}}
                    onChangeText={(long) => this.setState({long})}
                    value={this.state.long}/>
                </View>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign:"center"}}> Waypoint Latitude </Text>
                    <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign:"center"}}
                    onChangeText={(lat) => this.setState({lat})}
                    value={this.state.lat}/>
                </View>
                <Text>{JSON.stringify(this.props.navigation)}</Text>
                <View>
                    <Button
                        title="Save"
                        onPress={() => this.props.navigation.navigate('Waypoints')}
                    />
                    <Button color="#f91800"
                        title="Cancel"
                        onPress={() => this.props.navigation.navigate('Waypoints')}
                    />
                </View>
            </View>
        );
    }
}

export default EditScreen;