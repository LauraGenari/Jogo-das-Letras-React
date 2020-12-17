import React, { Component } from 'react'

export default class Fases extends Component{
    render() {
        var um, dois, tres, quatro, cinco;
        if (this.props.level === 1) {
            um = "#FCCF44";
            dois = "#fff"
            tres = "#fff"
            quatro = "#fff"
            cinco = "#fff"
        }
        else if (this.props.level === 2) {
            um = "#6DD0BC"
            dois = "#FCCF44";
            tres = "#fff"
            quatro = "#fff"
            cinco = "#fff"
        }
        else if (this.props.level === 3) {
            um = "#6DD0BC"
            dois = "#6DD0BC"
            tres = "#FCCF44";
            quatro = "#fff"
            cinco = "#fff"
        }
        else if (this.props.level === 4) {
            um = "#6DD0BC"
            dois = "#6DD0BC"
            tres = "#6DD0BC"
            quatro = "#FCCF44";
            cinco = "#fff"
        }
        else if (this.props.level === 5) {
            um = "#6DD0BC"
            dois = "#6DD0BC"
            tres = "#6DD0BC"
            quatro ="#6DD0BC"
            cinco = "#FCCF44";
        }
        var fase;
        if (this.props.mobile) 
            fase = "F"
        else {
            fase = "Fase"
        }

        return (
            <div className="fases" level={this.props.level}>
                <div style={{backgroundColor: um, padding:"4px", margin:"2px", borderRadius:"4px"}}>{fase} 1</div>
                <div style={{backgroundColor: dois, padding:"4px", margin:"2px", borderRadius:"4px"}}>{fase} 2</div>
                <div style={{backgroundColor: tres, padding:"4px", margin:"2px", borderRadius:"4px"}}>{fase} 3</div>
                <div style={{backgroundColor: quatro, padding:"4px", margin:"2px", borderRadius:"4px"}}>{fase} 4</div>
                <div style={{backgroundColor: cinco, padding:"4px", margin:"2px", borderRadius:"4px"}}>{fase} 5</div>
            </div>
        )
    }

}