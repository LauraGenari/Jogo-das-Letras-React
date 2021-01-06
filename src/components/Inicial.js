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
            margin: '0.75em',
            boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'
        }

        const sizeTab = {
            width:"10em",
            height: "10em",
            color: 'white',
            borderRadius: '16px',
            borderStyle: 'none',
            textTransform: 'uppercase',
            fontWeight: '500',
            margin: '0.75em',
            boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'
        }

        const sizeMob = {
            borderStyle: 'none', width:"5.5em", height:"5.75em", margin:"1em", borderRadius:"8px",
            boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'
        }

        const cel = window.innerWidth < 500

        const contentDesk =
            <div style={{display:'flex', alignItems:"center", position:'relative', top:'8vh'}}>
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
                <div style={{marginLeft:"1.5em"}}>
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
                        <button className="dark" style={{borderStyle: 'none', width:"13em", height:"6em", margin:"1em", borderRadius:"8px", color:"white", display:"flex", justifyContent:"center", alignItems:"center",
            boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <img alt="play" src={window.location.origin + "/img/jogar.png"} style={{width:"30px", height:"24px", marginRight:"1em"}}/>
                            <p style={{fontSize:"1.5em"}}>JOGAR</p>
                        </button>
                    </Link>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Link to={{
                            pathname:'tema',
                        }}>
                        <button className="lilas" style={sizeMob}>
                            <img alt="play" src={window.location.origin +"/img/interrogacao.png"} width="18px" height="24px" />
                        </button>
                    </Link>
                    <Link to={{
                            pathname:'tema',
                        }}>
                        <button className="lilas" style={sizeMob}>
                            <img alt="play" src={window.location.origin +"/img/pessoas.png"} width="30px" height="24px" />
                        </button>
                    </Link>
                </div>
                <img alt="logo" src="/img/logo-eic.png" style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"1em"}}/>

                </div>
        
        const contentTab = 
            <div>
                <div style={{display:'flex', alignItems:"center", marginBottom:"6em"}}>
                        <Link to={{
                                pathname:'tema',
                            }}>
                            <button className="dark" style={sizeTab}>
                                <img alt="play" src={window.location.origin + "/img/jogar.png"}/>
                                <p>Jogar</p>
                            </button>
                        </Link>
                        <Link to={{
                                pathname:'tema',
                            }}>
                            <button className="lilas" style={sizeTab}>
                                <img alt="play" src={window.location.origin +"/img/interrogacao.png"} />
                                <p>Instruções</p>
                            </button>
                        </Link>
                        <Link to={{
                                pathname:'tema',
                            }}>
                            <button className="lilas" style={sizeTab}>
                                <img alt="play" src={window.location.origin +"/img/pessoas.png"} />
                                <p>Créditos</p>
                            </button>
                    </Link>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", margin:"1em"}}>
                    <img alt="logo" src="/img/logo-eic.png" width="267px"/>
                </div>
                <div  style={{display:'flex', alignItems:"center", justifyContent:"center", margin:"1em"}}>
                    <img alt="facebook" src="/img/facebook.png" style={{margin:"0.5em"}}/>
                    <img alt="instagram" src="/img/instagram.png" style={{margin:"0.5em"}}/>
                    <img alt="youtube" src="/img/youtube.png" style={{margin:"0.5em"}}/>
                </div>

            </div>
        return (
            <div>
                <TemplateEscuro mobile={this.props.mobile} id="JOGO DAS LETRAS" font={"Luckiest Guy"} size="2em" bolinhas={false }/>
                <TemplateLilas mobile={this.props.mobile} />
                {this.props.mobile && cel && contentMob}
                {!this.props.mobile && contentDesk}
                {this.props.mobile && !cel && contentTab}
            </div>
        )
    }
 }