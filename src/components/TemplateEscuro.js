import React, { Component } from 'react';
export default class TemplateEscuro extends Component{
    

    render() {
        var um= "#Fff", dois= "#Fff", tres= "#Fff", quatro= "#Fff", cinco= "#Fff";
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
                return (
                    <div className="enunciado mobile">
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"97%", lineHeight:"1" }}>{this.props.id}</p>
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
                return (
                    <div className="enunciado desktop">
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"95%"  }}>{this.props.id}</p>      
                    </div>
                )
            }
        }

    }

}