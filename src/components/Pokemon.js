import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        var { poke } = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="pokemon">
                    <figure>
                        <a href="#" >
                            <img src={poke.imgUrl} />
                        </a>
                    </figure>
                    <div className="poke-info">
                        <h3>{poke.id}</h3>
                        <h3>{this.toTitleCase(poke.name)}</h3>
                        <div className="text-center">
                            {this.showTypes(poke.type)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    toTitleCase = str => {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }
    showTypes = types => {
        const typeColors = {
            'bug': '#729f3f',
            'dragon': '#3f9f95',
            'fairy': '#729f3f',
            'fire': '#fd7d24 ',
            'ghost': '#7b62a3',
            'ground': '#9f7d3f',
            'normal': '#a4acaf',
            'psychic': '#f366b9',
            'steel': '#9eb7b8',
            'dark': '#707070',
            'electric': '#eed535',
            'fighting': '#d56723',
            'flying': '#3f9f9a',
            'grass': '#9bcc50',
            'ice': '#51c4e7',
            'poison': '#b97fc9',
            'rock': '#a38c21',
            'water': '#4592c4',
        }
        var result = types.map((type, index) => {
            return <span
                style={{ backgroundColor: typeColors[type.type.name] }}
                className="types"
                key={index}>{this.toTitleCase(type.type.name)}
            </span>
        })
        return result;
    }
}

export default Pokemon;