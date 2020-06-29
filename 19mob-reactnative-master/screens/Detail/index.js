import React, { Component, useState } from 'react';
import { SafeAreaView} from 'react-native-safe-area-context';

import DriverDetail from './components/DriverDetail';
import CircuitDetail from './components/CircuitDetail';
import ConstructorDetail from './components/ConstructorDetail';

import { ScrollView } from 'react-native-gesture-handler';

import { View, FlatList, Text, ImagePropTypes, StyleSheet, Dimensions } from 'react-native';


class Detail extends Component {
    
    state = {
        result: [],  
        resultLocation: []
    }

    componentDidMount() {
        var year = this.props.route.params.year
        var option = this.props.route.params.option 
        var detailId = this.props.route.params.detailId 

        console.log('componentDidMount Details\index.js')
        console.log(detailId)
        console.log(option)
        console.log(year)

        console.log(`https://ergast.com/api/f1/${year}/${option}/${detailId}.json`)

        fetch(`https://ergast.com/api/f1/${year}/${option}/${detailId}.json`)
            .then(response => response.json())
            .then(result => {
                switch (option){
                case 'drivers':
                    this.setState({ result: result.MRData.DriverTable.Drivers[0] })
                break
                case 'constructors':
                    this.setState({ result: result.MRData.ConstructorTable.Constructors[0]})
                break
                case 'circuits':
                    this.setState({ result: result.MRData.CircuitTable.Circuits[0]})
                    this.setState({ resultLocation: result.MRData.CircuitTable.Circuits[0].Location })
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

        //return <h1>`${detailId} ${option} ${year}`</h1>;

        if (this.props.route.params.option == 'drivers') {
            console.log('renderizou driver');

            return (
                <SafeAreaView>
                    <ScrollView>   
                        <DriverDetail driver = { this.state.result } />
                    </ScrollView>
                </SafeAreaView>
            );
        } else if (this.props.route.params.option == 'circuits') {
            console.log('renderizou circuit');

            return (
                <SafeAreaView>
                    <ScrollView>   
                        <CircuitDetail 
                        circuit =  { this.state.result } 
                        location = { this.state.resultLocation} />
                    </ScrollView>
                </SafeAreaView>
            );
        } else if (this.props.route.params.option == 'constructors') {
            console.log('renderizou constructor');

            return (
                <SafeAreaView>
                    <ScrollView>   
                        <ConstructorDetail constructor = { this.state.result } />
                    </ScrollView>
                </SafeAreaView>
            );
        } 
    }
}


export default Detail;