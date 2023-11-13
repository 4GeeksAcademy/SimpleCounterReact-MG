import React, { Component } from 'react';
import Proptypes, { string } from 'prop-types';

class Seconds extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: this.props.initialSeconds || 0, // El tiempo inicial provisto como prop
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { seconds } = this.state;
        const secondsStr = seconds.toString();

        return (
            <div className="container-fluid bg-black h-75 text-light seconds-counter">
                <div className="d-flex justify-content-center align-items-center display-1 fw-semibold">
                    <div className='bg-dark p-5 m-3 rounded-4'>
                        <p><i className="fa-regular fa-clock"></i></p>
                    </div>
                    <div className='bg-dark p-5 m-3 rounded-4'>
                        <p id='firstNumber'>{secondsStr.charAt(0) != "" ? secondsStr.charAt(0) : 0}</p>
                    </div>
                    <div className='bg-dark p-5 m-3 rounded-4'>
                        <p id='secondNumber'>{secondsStr.charAt(1) != "" ? secondsStr.charAt(1) : 0}</p>
                    </div>
                    <div className='bg-dark p-5 m-3 rounded-4'>
                        <p id='thirdNumber'>{secondsStr.charAt(2) != "" ? secondsStr.charAt(2) : 0}</p>
                    </div>
                    <div className='bg-dark p-5 m-3 rounded-4'>
                        <p id='fourthNumber'>{secondsStr.charAt(3) != "" ? secondsStr.charAt(3) : 0}</p>
                    </div>
                    <div className='bg-dark p-5 m-3 rounded-4'>
                        <p id='fifthNumber'>{secondsStr.charAt(4) != "" ? secondsStr.charAt(4) : 0}</p>
                    </div>
                    <div className='bg-dark p-5 m-3 rounded-4'>
                        <p id='sixthNumber'>{secondsStr.charAt(5) != "" ? secondsStr.charAt(5) : 0}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Seconds.propTypes = {
    seconds: Proptypes.number,
    secondsStr: string
};
export default Seconds;
