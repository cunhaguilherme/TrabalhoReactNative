import React, { Component } from 'react';

import { Text, View } from 'react-native';

class Season extends Component {

    state = {
        season: 0,
        
    }

    componentDidMount() {
        this.setState({ season: this.props.route.params.year});        
    }

    render() {
        console.log(this.props);
        console.log(this.props.route.params.year)
        return (
            <View>
                <Text>Oi eu sou a tela de Season</Text>
            </View>
        );
    }
}

export default Season;