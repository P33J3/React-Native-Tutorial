import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';


//function Directory(props) {
class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        }
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                    // the following take 2 parameters: the screen to navigate to & an optional argument that adds
                    //extra parameters to the route
                    onPress={() => navigate ('CampsiteInfo', { campsiteId: item.id })}
                    //the below was deprecated because the props was moved from the maincomponent
                    // onPress={() => props.onPress(item.id)}

                />
            );

        };
        
        return (
            <FlatList

                // data={props.campsites} (state is now inside component)
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default Directory;