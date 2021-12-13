import React, { Component } from 'react';
import Directory from './DirectoryComponent';
//import { CAMPSITES } from '../shared/campsites';
import { createStackNavigator } from 'react-navigation-stack';
import CampsiteInfo from './CampsiteInfoComponent';
import  Constants  from 'expo-constants';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

//one stack navigator
const DirectoryNavigator = createStackNavigator( {
    //the components available for the stack
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo }
},
{
    initialRoutineName: 'Directory',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#5637DD'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})

//will return a component that handles connecting the top navigator to the react native
const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {

    //Moved the campsite data to the directory component
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES,
    //         selectedCampsite: null
    //     };
    // }

    // onCampsiteSelect(campsiteId) {
    //     this.setState({selectedCampsite: campsiteId});
    // }
    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    paddingTop:Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                 }}>
                {/* <Directory 
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id === this.state.selectedCampsite)[0]} /> */}

                <AppNavigator />
            </View>
        )
    }
}

export default Main;