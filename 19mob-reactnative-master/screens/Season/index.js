import React, { Component } from 'react';

import { Text, View } from 'react-native';
import Options from './components/Options';
import { SafeAreaView} from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

class Season extends Component {
    render() {
        console.log(this.props);
        return (
            <SafeAreaView>
                <ScrollView>
                    <Options 
                        handlerOptions={ this.props.navigation.navigate } options={ ['Circuits','Drivers','Contructors']} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Season;