import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
//import { CAMPSITES } from '../shared/campsites';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoritesComponent';
import Login from './LoginComponent';
import  Constants  from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView, Image, Alert, ToastAndroid } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators';
import NetInfo from '@react-native-community/netinfo';



const mapDispatchToProps = {
    fetchCampsites, 
    fetchComments, 
    fetchPromotions, 
    fetchPartners
};



//one stack navigator
const DirectoryNavigator = createStackNavigator( 
    {
        //the components available for the stack
        Directory: { screen: Directory,
                    navigationOptions: ({navigation}) => ({
                        headerLeft: <Icon
                                        name='list'
                                        type='font-awesome'
                                        iconStyle={styles.stackIcon}
                                        onPress={() => navigation.toggleDrawer()}
                                        />
                    })
                 },
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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                         />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        //the components available for the stack
        About: { screen: About }

    },
    {
        // initialRoutineName: 'Directory', (disabled because there is only one screen)
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: '#5637DD'
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         color: '#fff'
        //     }
        // }
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                         />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        //the components available for the stack
        Contact: { screen: Contact }

    },
    {
        // initialRoutineName: 'Directory', (disabled because there is only one screen)
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: '#5637DD'
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         color: '#fff'
        //     }
        // }
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                         />
        })
    }
);

const ReservationNavigator = createStackNavigator(
    {
        //the components available for the stack
        Reservation: { screen: Reservation }

    },
    {
      
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                            name='tree'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                         />
        })
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        //the components available for the stack
        Favorites: { screen: Favorites }

    },
    {
      
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                            name='heart'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                         />
        })
    }
);

const LoginNavigator = createStackNavigator(
    {
        //the components available for the stack
        Login: { screen: Login }

    },
    {
      
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                            name='sign-in'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                         />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        {/* SafeAreaView is neccessary for iphone X because of its design. It is automatically included in drawer but we overrided
        the default so we have to manually add it. */}
        <SafeAreaView
            style={styles.createAppContainer}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image
                        source={require('./images/logo.png')}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{flex: 2}}>
                    <Text
                        styles={styles.drawerHeader}
                    >
                        NuCamp
                    </Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)



const MainNavigator = createDrawerNavigator(
    {

        Login: { 
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Directory: {
             screen: DirectoryNavigator,
             navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
         },
         Reservation: {
            screen: ReservationNavigator,
            navigationOptions: {
                drawerLabel: 'Reserve Campsite',
               drawerIcon: ({tintColor}) => (
                   <Icon
                       name='tree'
                       type='font-awesome'
                       size={24}
                       color={tintColor}
                   />
               )
           }
        },
        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLabel: 'My Favorites',
               drawerIcon: ({tintColor}) => (
                   <Icon
                       name='heart'
                       type='font-awesome'
                       size={24}
                       color={tintColor}
                   />
               )
           }
        },
        About: { 
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
    }
);

//will return a component that handles connecting the top navigator to the react native
//const AppNavigator = createAppContainer(DirectoryNavigator);

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

 

    
 
    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
        this.showNetInfo();

        // NetInfo.fetch().then(connectionInfo => {
        //     (Platform.OS === 'ios') 
        //            ? Alert.alert('Initial Network Connectivity Type:', connectionInfo.type) 
        //             : ToastAndroid.show('Initial Network Conncectivity Type: ' +
        //                 connectionInfo.type, ToastAndroid.LONG);
        // });

        

       
    

        // this.unsubscribeNetInfo = NetInfo.addEventListener(connectionInfo => {
        //     this.handleConnectivityChange(connectionInfo);
        // } );
     }

     showNetInfo = async () => {
           
        const connectionInfo = await NetInfo.fetch();
             (Platform.OS === 'ios') 
                    ? Alert.alert('Initial Network Connectivity Type:', connectionInfo.type) 
                     : ToastAndroid.show('Initial Network Conncectivity Type: ' +
                         connectionInfo.type, ToastAndroid.LONG);
         
     }
     
    //  componentWillUnmount() {
    //      this.unsubscribeNetInfo();
    //  }

     handleConnectivityChange = connectionInfo => {
         let connectionMsg = 'You are now connected to an active network.';
         switch (connectionInfo.type) {
             case 'none':
                 connectionMsg = 'No network connection is active.';
                 break;
            case 'unknown':
                connectionMsg = 'The network connection state is now unknown.';
                break;
            case 'cellular':
                connectionMsg = 'You are now connected to a cellular network.';
                break;
            case 'wifi':
                connectionMsg = 'You are now connected to a WIFI network.'
                break;
         }
         (Platform.OS === 'ios') ?
            Alert.alert('Connection change:', connectionMsg) :
            ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
     }


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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
            marginLeft: 10,
            color: '#fff',
            fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main);