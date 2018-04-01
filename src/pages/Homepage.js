import React, { Component } from 'react';
import image_header from '../images/pokemon-header.jpg';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
// import components
import Pokemon from '../components/Pokemon';
import NextButton from '../components/NextButton';
class Homepage extends Component {
    componentWillMount() {
        if (this.props.pokemons.length === 0) {
            this.props.fetchPokemons(1, 20);
        }
    }

    render() {
        var { pokemons, fetchPokemons, isloading } = this.props
        return (
            <div className="container">
                <section className="header">
                    <div className="page-header">
                        <img src={image_header} className="img-responsive" alt="Header" />
                    </div>
                </section>
                <section className="pokedex-results">
                    <div className="row">
                        {this.showPoke(pokemons)}
                    </div>
                    {isloading ? <div className="loader"></div> :
                        <NextButton next={fetchPokemons} />}
                </section>


            </div>
        );
    }
    showPoke = (pokemons) => {
        var result = null;
        if (pokemons.length > 0) {
            result = pokemons.map((pokemon, index) => {
                return (
                    <Pokemon
                        poke={pokemon}
                        key={index}
                    />
                );
            })
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        pokemons: state.pokemons,
        isloading: state.isloading
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchPokemons: (start, end) => {
            dispatch(actions.actFetchPokemonsRequest(start, end))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);