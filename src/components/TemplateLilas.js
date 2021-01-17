import React, { Component } from 'react';
import Swal from 'sweetalert2'
import { Link, withRouter } from 'react-router-dom'
import home from '../../public/home.png'
import sair from '../../public/sair.png'
import Music from './Music'

class TemplateLilas extends Component {

    render() {
        console.log(this.props.location.pathname)
        var inicial = this.props.location.pathname === "/inicial" ? true : false
        var game = this.props.location.pathname === "/game" ? true : false
        if (this.props.mobile) {
            if(game )
                return (
                    <div className="bloco-lilas mobile">
                        
                        <Music/>
                        {!this.props.inicial && 
                        
                            <Link to={{
                                    pathname:'inicial',
                                }}>
                               
                                    <img alt="home" src={home} style={{ padding: "1em" }}/>
                                
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
                    <Music/>
                    {!inicial &&
                    game
                        && <a onClick={() => Swal.fire({
                            title: "SAIR DO JOGO",
                            text: "Tem certeza que deseja sair do jogo?",
                            imageUrl: "/exclamacao.png",
                            showCloseButton: true,
                            showCancelButton: true,
                            showConfirmButton: true,
                            padding: '3em',
                            confirmButtonText: "<a href='inicial'>SIM</a>",
                            cancelButtonText: 'NÃO',
                            confirmButtonColor: '#fff',
                            cancelButtonColor: '#fff',
                            
                        })}>
                            <img alt="sair" src={sair} style={{ padding: "1em" }}/>   
                        </a>
                    }

                    
                    {!inicial && !game && 
                        <Link to={{
                                    pathname:'inicial',
                                }}>
                                    <img alt="home" src={home} style={{ padding: "1em" }}/>
                        </Link>
                    }
                </div>
            )
        }

    }
}
export default withRouter(TemplateLilas)