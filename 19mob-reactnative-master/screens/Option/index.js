import React, { Component, useState } from 'react';
import { SafeAreaView} from 'react-native-safe-area-context';

import Details from './components/Details';
import { ScrollView } from 'react-native-gesture-handler';

class Option extends Component {
    
    state = {
        result: [],
        list: [],      
        
    }

    componentDidMount() {
        var year = this.props.route.params.year
        var option = this.props.route.params.option 

        console.log(`https://ergast.com/api/f1/${year}/${option}.json`)

        fetch(`https://ergast.com/api/f1/${year}/${option}.json`)
            .then(response => response.json())
            .then(result => {
                switch (option){
                case 'drivers':
                    this.setState({ result: result.MRData.DriverTable.Drivers.reverse()})
                    this.setState({list: this.state.result .slice(0,40)});
                break
                case 'constructors':
                    this.setState({ result: result.MRData.ConstructorTable.Constructors.reverse()})
                    this.setState({list: this.state.result .slice(0,40)});
                break
                case 'circuits':
                    this.setState({ result: result.MRData.CircuitTable.Circuits.reverse()})
                    this.setState({list: this.state.result .slice(0,40)});
                break
                }
                console.log(this.state.result)
           
                           
            })
            .catch(err => {
                console.log(err); 
            })
    
    }

    render() {
        console.log(this.props);
        return (
            <SafeAreaView>
                <ScrollView>
                    <Details 
                        handlerDetails={ this.props.navigation.navigate } details = { this.state.list }  option = { this.props.route.params.option } year={ this.props.route.params.year }/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default Option;