import React, { Component} from 'react';
import TemplateEscuro from './TemplateEscuro'
import { Link } from 'react-router-dom'
import jogar from '../../public/jogar.png'
import interrogacao from '../../public/interrogacao.png'
import pessoas from '../../public/pessoas.png'
import facebook from '../../public/facebook.png'
import instagram from '../../public/instagram.png'
import youtube from '../../public/youtube.png'
import logoEic from '../../public/logo-eic.png'

export default class Inicial extends Component {
    render() {
        const encodeURL = 'https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(window.location.href)
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
                        <img alt="play" src={jogar}/>
                        <p>Jogar</p>
                    </button>
                </Link>
                <Link to={{
                        pathname:'instrucoes',
                    }}>
                    <button className="lilas" style={sizeDesk}>
                        <img alt="play" src={interrogacao}/>
                        <p>Instruções</p>
                    </button>
                </Link>
                <Link to={{
                        pathname:'creditos',
                    }}>
                    <button className="lilas" style={sizeDesk}>
                        <img alt="play" src={pessoas}/>
                        <p>Créditos</p>
                    </button>
                </Link>
                <div style={{marginLeft:"1.5em"}}>
                    <img alt="logo" src={logoEic}/>
                    <br/>
                    <div  style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
                        <a href={encodeURL} target="_blank">
                            <img alt="facebook" src={facebook}/>
                        </a>
                        <a href="https://www.instagram.com/eiciencia/?hl=pt-br" target="_blank">
                            <img alt="instagram" src={instagram}/>

                        </a>
                        <a href="https://www.youtube.com/channel/UCjg75EYzCSLYCcxcXOuv_-g" target="_blank">
                            <img alt="youtube" src={youtube}/>

                        </a>

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
                            <img alt="play" src={jogar} style={{width:"30px", height:"24px", marginRight:"1em"}}/>
                            <p style={{fontSize:"1.5em"}}>JOGAR</p>
                        </button>
                    </Link>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Link to={{
                            pathname:'instrucoes',
                        }}>
                        <button className="lilas" style={sizeMob}>
                            <img alt="play" src={interrogacao} width="18px" height="24px"/>
                        </button>
                    </Link>
                    <Link to={{
                            pathname:'creditos',
                        }}>
                        <button className="lilas" style={sizeMob}>
                            <img alt="play" src={pessoas} width="30px" height="24px"/>
                        </button>
                    </Link>
                </div>
                <img alt="logo" src={logoEic }style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"1em"}}/>

                </div>
        
        const contentTab = 
            <div>
                <div style={{display:'flex', alignItems:"center", marginBottom:"6em"}}>
                        <Link to={{
                                pathname:'tema',
                            }}>
                            <button className="dark" style={sizeTab}>
                                <img alt="play" src={jogar}/>
                                <p>Jogar</p>
                            </button>
                        </Link>
                        <Link to={{
                                pathname:'instrucoes',
                            }}>
                            <button className="lilas" style={sizeTab}>
                                <img alt="play" src={interrogacao}/>
                                <p>Instruções</p>
                            </button>
                        </Link>
                        <Link to={{
                                pathname:'creditos',
                            }}>
                            <button className="lilas" style={sizeTab}>
                                <img alt="play" src={pessoas}/>
                                <p>Créditos</p>
                            </button>
                    </Link>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", margin:"1em"}}>
                    <img alt="logo" src={logoEic} width="267px"/>
                </div>
                <div  style={{display:'flex', alignItems:"center", justifyContent:"center", margin:"1em"}}>
                    <a href={encodeURL} target="_blank">
                        <img alt="facebook" src={facebook} style={{margin:"0.5em"}}/>
                    </a>
                    <a href="https://www.instagram.com/eiciencia/?hl=pt-br" target="_blank">
                        <img alt="instagram" src={instagram} style={{margin:"0.5em"}}/>

                    </a>
                    <a href="https://www.youtube.com/channel/UCjg75EYzCSLYCcxcXOuv_-g" target="_blank">
                        <img alt="youtube" src={youtube} style={{margin:"0.5em"}}/>
                    </a>
                </div>

            </div>
        return (
            <div>
                <TemplateEscuro mobile={this.props.mobile} id="JOGO DAS LETRAS" font={"Luckiest Guy"} size="2em" bolinhas={false }/>
                
                {this.props.mobile && cel && contentMob}
                {!this.props.mobile && contentDesk}
                {this.props.mobile && !cel && contentTab}
            </div>
        )
    }
 }