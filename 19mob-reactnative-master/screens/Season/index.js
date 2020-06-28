import React, { Component } from 'react';

import { Text, View } from 'react-native';
import Options from './components/Options';
import { SafeAreaView} from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

class Season extends Component {

    state = {
        season: 0,
        options: ['Circuits','Drivers','Contructors']
        
    }

    componentDidMount() {
        this.setState({ season: this.props.route.params.year});        
    }

    render() {
        console.log(this.props);
        console.log(this.props.route.params.year)
        return (
            <SafeAreaView>
                <ScrollView>
                    <Options 
                        handlerOptions={ this.props.navigation.navigate } options={ this.state.options} year={ this.state.season } />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Season;