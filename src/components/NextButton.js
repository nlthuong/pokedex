import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class NextButton extends Component {
    render() {
        var { showNextList, next_list } = this.props;
        return (
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => {
                    this.onShowNextList(next_list)
                }}
            >Next</button>
            
        )}
    
    onShowNextList = next_list => {
        this.props.showNextList(next_list)
    }
}

const mapStateToProps = state => {
    return{
        next_list: state.next_list
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        showNextList: next_list_url => {
            dispatch(actions.actShowNextListRequest(next_list_url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NextButton);