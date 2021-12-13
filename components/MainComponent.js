import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
//import { CAMPSITES } from '../shared/campsites';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CampsiteInfo from './CampsiteInfoComponent';
import  Constants  from 'expo-constants';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';



//one stack navigator
const DirectoryNavigator = createStackNavigator( 
    {
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
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        //the components available for the stack
        Home: { screen: Home }

    },
    {
        // initialRoutineName: 'Directory', (disabled because there is only one screen)
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

//will return a component that handles connecting the top navigator to the react native
//const AppNavigator = createAppContainer(DirectoryNavigator);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);
//MainNavigator has replaced DirectoryNavigator as the top level navigator.
const AppNavigator = createAppContainer(MainNavigator);
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