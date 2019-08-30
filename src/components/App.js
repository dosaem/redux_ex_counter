import React, {Component} from 'react';
import Buttons from "./Buttons";
import CounterListContainer from "../containers/CounterListContainer";

import { connect } from 'react-redux';
import * as actions from '../actions';

import { getRandomColor } from "../utils";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class App extends Component{
    render() {
        console.log(this.props);
        const { onCreate, onRemove } = this.props;
        console.log(onCreate);

        return(
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

export  default connect(null, mapToDispatch)(App);

