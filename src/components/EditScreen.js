import React from "react";
import {View, Text, Button, ScrollView, AsyncStorage, TextInput} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import SettingsScreen from "./SettingsScreen";

class EditScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.navigation.state.params.id,
            radius: 0,
            long: 0,
            lat: 0,
            enabled: true,
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

    componentDidMount() {
        AsyncStorage.getItem(this.props.navigation.state.params.id).then(
            (item) => {
                this.setState(JSON.parse(item));
            }
        );
    }

    save() {
        AsyncStorage.removeItem(this.props.navigation.state.params.id);
        AsyncStorage.setItem(this.state.name,
            JSON.stringify({
                name: this.state.name,
                radius: parseInt(this.state.radius),
                enabled: true,
                long: parseInt(this.state.long),
                lat: parseInt(this.state.lat),
                onTrip: "Vibrate",
            })
        );

        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: "stretch", justifyContent: "space-between"}}>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign: "center"}}> Waypoint Name </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: "center"}}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                </View>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign: "center"}}> Waypoint Radius </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: "center"}}
                        onChangeText={(radius) => this.setState({radius})}
                        value={String(this.state.radius)}/>
                </View>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign: "center"}}> Waypoint Longitude </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: "center"}}
                        onChangeText={(long) => this.setState({long})}
                        value={String(this.state.long)}/>
                </View>

                <View style={{flex: 1, alignItems: "stretch", justifyContent: "center"}}>
                    <Text style={{textAlign: "center"}}> Waypoint Latitude </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: "center"}}
                        onChangeText={(lat) => this.setState({lat})}
                        value={String(this.state.lat)}/>
                </View>
                <Text>{JSON.stringify(this.state)}</Text>
                <View>
                    <Button
                        title="Save"
                        onPress={() => this.save()}
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