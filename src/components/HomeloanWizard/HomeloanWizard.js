import React, { Component } from 'react';

class HomeloanWizard extends Component {
    render(){
        // console.table(this.props)
        return(
            <div>
                Hello, {this.props.user}
            </div>
        )
    }
}

export default HomeloanWizard;