import React, { Component } from 'react';
export default class TemplateEscuro extends Component{
    
    render() {
        console.log(location.href)
        if (this.props.mobile) {
            return (
                <div className="enunciado mobile">
                    {this.props.id}
                </div>
            )
        }
        else {
            return (
                <div className="enunciado desktop">
                    {this.props.id}
                </div>
            )
        }

    }

}