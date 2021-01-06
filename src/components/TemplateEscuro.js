import React, { Component } from 'react';
export default class TemplateEscuro extends Component{
    

    render() {
        var um= "#FFF", dois= "#FFF", tres= "#FFF", quatro= "#FFF", cinco= "#FFF";
        if (this.props.level === 1) {
            um = "#FCCF44";
        }
        else if (this.props.level === 2) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
            }
            else {
                um = "#6DD0BC"
                dois = "#FCCF44";                
            }
        }
        else if (this.props.level === 3) {
            if (this.props.fase === 1) {
                um = "#FCCF44"              
            }
            else if (this.props.fase === 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"              
            }
            else if (this.props.fase === 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";                
            }
        }
        else if (this.props.level === 4) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
            }
            else if (this.props.fase === 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
            }
            else if (this.props.fase === 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";  
            }
            else if(this.props.fase === 4){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro = "#FCCF44";
            }
        }
        else if (this.props.level === 5) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
            }
            else if (this.props.fase === 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
            }
            else if (this.props.fase === 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";
            }
            else if(this.props.fase === 4){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro = "#FCCF44";
            }
            else if(this.props.fase === 5){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro ="#6DD0BC"
                cinco = "#FCCF44";
            }
        } 
        
        var subtitle = false
        if (this.props.id === "JOGO DAS LETRAS")
            subtitle = true

        if (this.props.mobile) {
            if (this.props.bolinhas) {
                return (
                    <div className="enunciado mobile">
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"97%" }}>{this.props.id}</p>
                        <div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:quatro}}></div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:cinco}}></div>
                        </div>
                    </div>                    
                )
            }
            else {
                if (subtitle)
                    if(window.innerWidth < 400)
                        return (
                            <div className="enunciado mobile inicial">
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"60%", lineHeight:"1",position:'relative', bottom:"0.5em"}}>{this.props.id}</p>
                                </div>
                                <p style={{position:'relative',bottom:"4em"}}>Aedes Aegypti</p>
                            </div>
                        )
                    else
                        return(
                            <div className="enunciado mobile inicial">
                                <p style={{ fontFamily: this.props.font, fontSize: this.props.size,  lineHeight:"1",position:'relative', top:"20%"}}>{this.props.id}</p>
                                <p style={{position:'relative', top:"10%"}}>Aedes Aegypti</p>
                            </div>
                        )
                else    
                    return (
                        <div className="enunciado mobile">
                            <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width: "97%", lineHeight: "1" }}>{this.props.id}</p>
                        </div>
                    )
            }
        }
        else {
            if (this.props.bolinhas) {
                return (
                    <div className="enunciado desktop">
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"95%"  }}>{this.props.id}</p>        
                        <div>
                            <div style={{ borderRadius: "50px", width: "10px", height: "10px", margin: "4px", backgroundColor: um }}></div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
                            <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:quatro}}></div>
                            <div style={{ borderRadius: "50px", width: "10px", height: "10px", margin: "4px", backgroundColor: cinco }}></div>
                        </div>
                    </div>
                )
            }
            else {
                if (subtitle)
                    return (
                        <div className="enunciado desktop inicial">
                            <p style={{ fontFamily: this.props.font, fontSize: '5em'}}>{this.props.id}</p>
                            <p style={{fontSize: '2em', bottom:"1em", position:"relative"}}>Aedes Aegypti</p>
                        </div>
                    )
                else 
                    return (
                        <div className="enunciado desktop">
                            <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width: "95%" }}>{this.props.id}</p>
                        </div>
                    )
            }
        }

    }

}