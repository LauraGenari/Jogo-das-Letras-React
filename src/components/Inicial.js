import React, { Component} from 'react';
import TemplateEscuro from './TemplateEscuro'
import TemplateLilas from './TemplateLilas'
import { Link } from 'react-router-dom'

export default class Inicial extends Component {
    render() {      
        const sizeDesk = {
            width:"13em",
            height: "14em",
            color: 'white',
            borderRadius: '16px',
            borderStyle: 'none',
            textTransform: 'uppercase',
            fontWeight: '500',
            margin: '0.75em'
        }
        const contentDesk =
            <div style={{display:'flex', alignItems:"center"}}>
                <Link to={{
                        pathname:'tema',
                    }}>
                    <button className="dark" style={sizeDesk}>
                        <img alt="play" src={window.location.origin + "/img/jogar.png"}/>
                        <p>Jogar</p>
                    </button>
                </Link>
                <Link to={{
                        pathname:'tema',
                    }}>
                    <button className="lilas" style={sizeDesk}>
                        <img alt="play" src={window.location.origin +"/img/interrogacao.png"} />
                        <p>Instruções</p>
                    </button>
                </Link>
                <Link to={{
                        pathname:'tema',
                    }}>
                    <button className="lilas" style={sizeDesk}>
                        <img alt="play" src={window.location.origin +"/img/pessoas.png"} />
                        <p>Créditos</p>
                    </button>
                </Link>
                <div style={{marginLeft:"0.5em"}}>
                    <img alt="logo" src="/img/logo-eic.png" />
                    <br />
                    <div  style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
                        <img alt="facebook" src="/img/facebook.png" />
                        <img alt="instagram" src="/img/instagram.png" />
                        <img alt="youtube" src="/img/youtube.png" />

                    </div>
                </div>
            </div>

        const contentMob =
            <div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Link to={{
                            pathname:'tema',
                        }}>
                        <button className="dark" style={{width:"13em", height:"6em", margin:"1em", borderRadius:"8px", color:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img alt="play" src={window.location.origin + "/img/jogar.png"} style={{width:"30px", height:"24px", marginRight:"1em"}}/>
                            <p style={{fontSize:"1.5em"}}>JOGAR</p>
                        </button>
                    </Link>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Link to={{
                            pathname:'tema',
                        }}>
                        <button className="lilas" style={{width:"5.5em", height:"5.75em", margin:"0.5em", borderRadius:"8px"}}>
                            <img alt="play" src={window.location.origin +"/img/interrogacao.png"} width="18px" height="24px" />
                        </button>
                    </Link>
                    <Link to={{
                            pathname:'tema',
                        }}>
                        <button className="lilas" style={{width:"5.5em", height:"5.75em", margin:"1.5em", borderRadius:"8px"}}>
                            <img alt="play" src={window.location.origin +"/img/pessoas.png"} width="30px" height="24px" />
                        </button>
                    </Link>
                </div>
                <img alt="logo" src="/img/logo-eic.png" style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"1em"}}/>

                </div>
        
        return (
            <div>
                <TemplateEscuro mobile={this.props.mobile} id="JOGO DAS LETRAS" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
                <TemplateLilas mobile={this.props.mobile} />
                {this.props.mobile && contentMob}
                {!this.props.mobile && contentDesk}
            </div>
        )
    }
 }