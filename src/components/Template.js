import React, { Component } from 'react';
import Main from './Main'

export default class Template extends Component{

    render() {
        const mobile = window.innerWidth < 400;
        
        if (mobile) {
            return (
                <div class="scope mobile">                
                    <div class="conteudo">
                        <Main />
                    </div>
                    <div class="bloco-lilas mobile">
                        <img src="/img/com-som-branco.png"/>
                        <img src="/img/sair.png" />
                    </div>
                </div>

            )
        }
        else {
            return (
                    <div class="scope desktop">
                        <div class="bloco-lilas">
                            <img src="/img/com-som-branco.png"/>
                            <img src="/img/sair.png" />
                        </div>
                        <div class="conteudo">
                            <Main />
                        </div>

                    </div>
            )
        }

    }

}