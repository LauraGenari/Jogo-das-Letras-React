import React, { Component } from 'react';
import Swal from 'sweetalert2'

export default class TemplateLilas extends Component {
    render() {
        if (this.props.mobile) {
            if(!this.props.game )
                return (
                    <div className="bloco-lilas mobile">
                        <a><img alt="som" src={window.location.origin + "/img/com-som-branco.png"} style={{ padding: "1em" }} /></a> 
                        {!this.props.inicial && 
                        
                        <a onClick={() => Swal.fire({
                            title: "SAIR DO JOGO",
                            text: "Tem certeza que deseja sair do jogo?",
                            imageUrl: "/img/exclamacao.png",
                            showCloseButton: true,
                            showCancelButton: true,
                            showConfirmButton: true,
                            padding:'3em',
                            width: window.innerWidth < 400 ? 400 : 600,
                            confirmButtonText:'SIM',
                            cancelButtonText: 'NÃO',
                            confirmButtonColor: '#fff',
                            cancelButtonColor: '#fff',
                        })}>
                            <img alt="home" src={window.location.origin + "/img/home.png"} style={{ padding: "1em" }} />
                        </a>}
                    </div>
                )
            else {
                return null
            }
        }
        else {
            return (
                <div className="bloco-lilas desktop">
                   <a><img alt="som" src={window.location.origin + "/img/com-som-branco.png"} style={{ padding: "1em" }} /></a> 
                    {!this.props.inicial && <a onClick={() => Swal.fire({
                        title: "SAIR DO JOGO",
                        text: "Tem certeza que deseja sair do jogo?",
                        imageUrl: "/img/exclamacao.png",
                        showCloseButton: true,
                        showCancelButton: true,
                        showConfirmButton: true,
                        padding: '3em',
                        confirmButtonText: 'SIM',
                        cancelButtonText: 'NÃO',
                        confirmButtonColor: '#fff',
                        cancelButtonColor: '#fff',
                    })}>
                        {this.props.game && <img alt="sair" src={window.location.origin + "/img/sair.png"} style={{ padding: "1em" }} />}
                        {!this.props.game && <img alt="home" src={window.location.origin + "/img/home.png"} style={{ padding: "1em" }} />}
                    </a>}
                </div>
            )
        }

    }
}
