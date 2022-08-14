

import React from 'react';
import {
    StatusBar,
    View,
} from 'react-native';

import CircularProgress from './CircularProgress';
import { sHeight } from '../services/helper';
import Progress from './Progress';

class Components extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            progress: 0
        };
    };



    componentDidMount = () => {
        setTimeout(() => {

            this.setState({ progress: 10 })
        }, 1000);
    };


    render() {
        return (
            <View style={{ flex: 1, paddingTop: sHeight, }}>
                <StatusBar backgroundColor="green" />
                <Progress progress={this.state.progress} />
                <CircularProgress progress={this.state.progress} />


            </View>
        )
    }
}

export default Components;
