import React, { Component } from 'react';

export default class TemplateLilas extends Component {
    render() {
        if (this.props.mobile) {
            if(!this.props.game )
                return (
                    <div className="bloco-lilas mobile">
                        <img alt="som" src="/img/com-som-branco.png"style={{padding:"1em"}}/>
                        <img alt="sair" src="/img/sair.png"style={{padding:"1em"}} />
                    </div>
                )
            else {
                return null
            }
        }
        else {
            return (
                <div className="bloco-lilas desktop">
                    <img alt="som" src="/img/com-som-branco.png"style={{padding:"1em"}}/>
                    <img alt="sair" src="/img/sair.png"style={{padding:"1em"}} />
                </div>
            )
        }

    }
}
