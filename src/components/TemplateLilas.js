import React, { Component } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default class TemplateLilas extends Component {
    render() {
        if (this.props.mobile) {
            if(!this.props.game )
                return (
                    <div className="bloco-lilas mobile">
                        <a>
                            <img alt="som" src={window.location.origin + "/com-som-branco.png"} style={{ padding: "1em" }}/>
                        </a> 
                        {!this.props.inicial && 
                        
                            <Link to={{
                                    pathname:'inicial',
                                }}>
                               
                                    <img alt="home" src={window.location.origin + "/home.png"} style={{ padding: "1em" }}/>
                                
                            </Link>
                        }
                    </div>
                )
            else {
                return null
            }
        }
        else {
            return (
                <div className="bloco-lilas desktop">
                    <a>
                        <img alt="som" src={window.location.origin + "/com-som-branco.png"} style={{ padding: "1em" }}/>
                    </a> 
                    {!this.props.inicial &&
                    this.props.game
                        && <a onClick={() => Swal.fire({
                            title: "SAIR DO JOGO",
                            text: "Tem certeza que deseja sair do jogo?",
                            imageUrl: "/exclamacao.png",
                            showCloseButton: true,
                            showCancelButton: true,
                            showConfirmButton: true,
                            padding: '3em',
                            confirmButtonText: 'SIM',
                            cancelButtonText: 'NÃO',
                            confirmButtonColor: '#fff',
                            cancelButtonColor: '#fff',
                        })}>
                            <img alt="sair" src={window.location.origin + "/sair.png"} style={{ padding: "1em" }}/>   
                        </a>
                    }

                    
                    {!this.props.inicial && !this.props.game && 
                        <Link to={{
                                    pathname:'inicial',
                                }}>
                                    <img alt="home" src={window.location.origin + "/home.png"} style={{ padding: "1em" }}/>
                        </Link>
                    }
                </div>
            )
        }

    }
}
