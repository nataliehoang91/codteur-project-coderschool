import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Canvas extends Component {
    
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect("Text",1, 1, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300} style={{backgroundColor:"black"}} />
        );
    }
}
export default Canvas