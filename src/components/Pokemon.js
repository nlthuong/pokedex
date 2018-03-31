import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        var { poke, poke_image, id } = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <figure>
                    <a href="#" >
                        <img src={poke_image} />
                    </a>
                </figure>
                <div className="poke-info">
                    <h5>{poke.name} <span>#{id}</span></h5>
                </div>
            </div>
        );
    }
}

export default Pokemon;