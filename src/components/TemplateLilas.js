import React, { Component } from 'react';
import Swal from 'sweetalert2'

export default class TemplateLilas extends Component {
    render() {
        if (this.props.mobile) {
            if(!this.props.game )
                return (
                    <div className="bloco-lilas mobile">
                        <img alt="som" src={window.location.origin + "/img/com-som-branco.png"} style={{ padding: "1em" }} />
                        <a onClick={() => Swal.fire({
                            title: "SAIR DO JOGO",
                            text: "Tem certeza que deseja sair do jogo?",
                            imageUrl: "/img/exclamacao.png",
                            showCloseButton: true,
                            showCancelButton: false,
                            showConfirmButton: false,
                            padding:'3em',
                            width: window.innerWidth < 400 ? 300 : 600}) }>
                            <img alt="sair" src={window.location.origin + "/img/sair.png"} style={{ padding: "1em" }} />
                        </a>
                    </div>
                )
            else {
                return null
            }
        }
        else {
            return (
                <div className="bloco-lilas desktop">
                    <img alt="som" src={window.location.origin + "/img/com-som-branco.png"} style={{ padding: "1em" }} />
                    <a onClick={() => Swal.fire({
                        title: "SAIR DO JOGO",
                        text: "Tem certeza que deseja sair do jogo?",
                        imageUrl: "/img/exclamacao.png",
                        showCloseButton: true,
                        showCancelButton: false,
                        showConfirmButton: false,
                        padding:'3em'
                    }) }>
                        <img alt="sair" src={ window.location.origin + "/img/sair.png"} style={{padding:"1em"}} />
                    </a>
                </div>
            )
        }

    }
}
