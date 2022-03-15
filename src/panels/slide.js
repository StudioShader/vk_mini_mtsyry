import React from 'react'
import './States.css'
// import some from '../Artboards'
class Slide extends React.Component {
    render() {
        const pageWidth = document.documentElement.clientWidth;
        const pageHeight = document.documentElement.clientHeight;
        const mystyle = {
            padding: 0,
            maxWidth: pageWidth-16,
            maxHeight: pageHeight-16
        };
        const divStyle = {
            padding: 0,
            justifyContent: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const path_ = "./assets/Artboards/Artboard " + this.props.number + ".png";
        return (
            <div width={10}>
                <div style={divStyle}>
                    {/* <div>{pageHeight}</div>*/}
                    {/* <div>{pageWidth}</div>*/}
                    <img className={"someslide"} src={path_} style={mystyle} alt="" />
                </div>
            </div>
        );
    }
}
export default Slide