import React, { Component } from 'react';
export default class TemplateEscuro extends Component{
    
    render() {
        console.log(location.href)
        if (this.props.mobile) {
            return (
                <div className="enunciado mobile">
                    <p style={{fontFamily:this.props.font, fontSize:this.props.size}}>{this.props.id}</p>
                </div>
            )
        }
        else {
            return (
                <div className="enunciado desktop">
                    <p style={{fontFamily:this.props.font, fontSize:this.props.size}}>{this.props.id}</p>
                </div>
            )
        }

    }

}