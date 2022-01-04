import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
// import { ListItem } from 'react-native-elements';
import { Tile} from 'react-native-elements';
// import { CAMPSITES } from '../shared/campsites';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';


const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};


//function Directory(props) {
class Directory extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES
    //     }
    // }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Animatable.View animation='fadeInRightBig' duration={2000}>
                    <Tile
                        title={item.name}
                        caption={item.description}
                        featured
                        imageSrc={{uri: baseUrl + item.image}}
                        // the following take 2 parameters: the screen to navigate to & an optional argument that adds
                        //extra parameters to the route
                        onPress={() => navigate ('CampsiteInfo', { campsiteId: item.id })}
                        //the below was deprecated because the props was moved from the maincomponent
                        // onPress={() => props.onPress(item.id)}

                    />
                </Animatable.View>
            );

        };

        if (this.props.campsites.isLoading) {
            return <Loading />
        }
        if (this.props.campsites.errMess) {
            return (
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            );
        }
        
        return (
            <FlatList

                // data={props.campsites} (state is now inside component)
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default connect(mapStateToProps)(Directory);