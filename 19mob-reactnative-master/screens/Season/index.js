import React, { Component } from 'react';

import { Text, View } from 'react-native';

class Season extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Oi eu sou a tela de Season</Text>
            </View>
        );
    }
}

export default Season;