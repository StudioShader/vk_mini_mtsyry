import React from 'react'
import Slide from './slide';
// import styles from './States.css'
// import some from '../Artboards'
class State extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 1,
            prev: 1
        }
    }
    // changeColor() {
    //     this.setState({ black: !this.state.black })
    // }

    changeState(new_curr, new_prev) {
        console.log(new_curr);
        console.log(new_prev);
        this.setState({
            current: new_curr,
            prev: new_prev
        })
    }

    render() {
        // let btn_class = this.state.black ? "blackButton" : "whiteButton";
        let current_slide = this.state.current;
        let prev_slide = this.state.prev;
        return (
            <div>
                <button onClick={() => this.changeState(current_slide + 1, current_slide)}>
                    Button
                </button>
                <div>
                    <Slide number={current_slide} faded={"in"} src={"first"} />
                </div>
                <div>
                    <Slide number={prev_slide} faded={"out"} src={"first"} />
                </div>
            </div>
        )
    }
}
export default State