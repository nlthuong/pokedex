import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class NextButton extends Component {
    render() {
        var { showNextList, next_list } = this.props;
        return (
            <button 
                type="button" 
                className="next-button"
                onClick={this.onShowNextList}
            >Load more Pokemon</button>
            
        )}
    
    onShowNextList = () => {
        this.props.toggleLoading();
        this.props.next(this.props.pokemons.length+1, this.props.pokemons.length+20)
    }
}

const mapStateToProps = state => {
    return{
        pokemons: state.pokemons
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleLoading : () => {
            dispatch(actions.actToggleLoading())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NextButton);