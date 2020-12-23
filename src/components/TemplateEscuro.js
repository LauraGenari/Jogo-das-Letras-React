import React, { Component } from 'react';
export default class TemplateEscuro extends Component{
    

    render() {
        var um, dois, tres, quatro, cinco;
        if (this.props.level === 1) {
            um = "#FCCF44";
            var bolinhas = <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
        }
        else if (this.props.level === 2) {
            if (this.props.fase === 1) {
                um = "#FCCF44"
                dois = "#Fff"; 
            }
            else {
                um = "#6DD0BC"
                dois = "#FCCF44";                
            }
            var  bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{ borderRadius: "50px", width: "10px", height: "10px", margin: "4px", backgroundColor: dois }}></div>
            </div>
        }
        else if (this.props.level === 3) {
            if (this.props.fase == 1) {
                um = "#FCCF44"
                dois = "#fff"
                tres = "#fff";                
            }
            else if (this.props.fase == 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
                tres = "#fff";                
            }
            else if (this.props.fase == 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";                
            }
            var bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
            </div> 
        }
        else if (this.props.level === 4) {
            if (this.props.fase == 1) {
                um = "#FCCF44"
                dois = "#fff"
                tres = "#fff"; 
                quatro = "#fff";
            }
            else if (this.props.fase == 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
                tres = "#fff";     
                quatro = "#fff";
            }
            else if (this.props.fase == 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";              
                quatro = "#fff";
            }
            else if(this.props.fase == 4){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro = "#FCCF44";
            }
            var bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:quatro}}></div>
            </div> 
        }
        else if (this.props.level === 5) {
            if (this.props.fase == 1) {
                um = "#FCCF44"
                dois = "#fff"
                tres = "#fff"; 
                quatro = "#fff";
                cinco = "#FFF";
            }
            else if (this.props.fase == 2) {
                um = "#6DD0BC"
                dois = "#FCCF44"
                tres = "#fff";     
                quatro = "#fff";
                cinco = "#FFF";
            }
            else if (this.props.fase == 3) {
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#FCCF44";              
                quatro = "#fff";
                cinco = "#FFF";
            }
            else if(this.props.fase == 4){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro = "#FCCF44";
                cinco = "#FFF";
            }
            else if(this.props.fase == 5){
                um = "#6DD0BC"
                dois = "#6DD0BC"
                tres = "#6DD0BC"
                quatro ="#6DD0BC"
                cinco = "#FCCF44";
            }
            var bolinhas =
            <div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:um}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:dois}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:tres}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:quatro}}></div>
                <div style={{borderRadius:"50px", width:"10px", height:"10px", margin:"4px", backgroundColor:cinco}}></div>
            </div> 
        }  
        if (this.props.mobile) {
            if (this.props.bolinhas) {
                return (
                    <div className="enunciado mobile">
                        <p style={{ fontFamily: this.props.font, fontSize: this.props.size, width:"97%" }}>{this.props.id}</p>
                        <div>{bolinhas}</div>
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
                        <div>{bolinhas}</div>
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