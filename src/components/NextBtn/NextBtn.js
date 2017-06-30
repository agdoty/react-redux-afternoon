import React, { Component } from 'react';
// import WizardOne from './../WizardOne/WizardOne';
import { Link } from 'react-router-dom'

class NextBtn extends Component {
    render(){
        // console.table(this.props)
        return(
            <div>
                Home Loan Wizard <br />
                <Link to="/wOne" name={this.props.user}>
                    <button>Get Started</button>
                </Link>
            </div>
        )
    }
}

export default NextBtn;