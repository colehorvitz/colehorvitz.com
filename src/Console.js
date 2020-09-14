import React, { Component } from 'react'
import Typist from 'react-typist'

class Console extends Component {
    constructor() {
        super();
        this.state = {
            displayBio:false,
        }
    }
    
    render() {
        return(
            <div className="console">
                <div className="command-line">
                    <span className="console-marker">></span>
                    <Typist startDelay={500} cursor={{show: false}} onLineTyped={this.showBio}>
                        whois cole
                    </Typist>
                </div>
                <div style={{color: this.state.displayBio ? 'white' : '#212121'}} className="bio">
                    <p>Name: Cole Horvitz</p>
                    <p>Education: Brown University</p>
                    <p>Location: Los Angeles</p>
                    <p>Skills: app, software, full-stack development</p>
                    <p>Contact: cole_horvitz@brown.edu</p>
                </div>
            </div>
        )
    }

    showBio = () => {
        setTimeout( () => {
            let displayBio = true;
            this.setState({displayBio});
        }, 100)
    }
}

export default Console;
