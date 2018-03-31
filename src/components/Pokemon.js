import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        var { poke, poke_image } = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <figure>
                    <a href="#" >
                        <img src={poke_image} />
                    </a>
                </figure>
                <div className="poke-info">
                    <h5>{poke.name} <span>#{poke.id}</span></h5>
                    <div className="type">
                        {this.showTypes(poke.types)}
                    </div>
                </div>
            </div>
        );
    }
    showTypes = types => {
        var result = types.map((type, index) => {
            return (
                <div key={index}><span>{type.type.name}</span></div>
            )
        })
        return result
    }
}

export default Pokemon;