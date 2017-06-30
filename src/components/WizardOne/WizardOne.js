import React,  { Component } from 'react';
import {Link} from 'react-router-dom';
import { updateLoanPropType } from './../../ducks/reducer'
import { connect } from 'react-redux'; //ADDED

class WizardOne extends Component {
        constructor(props){
            super(props)
            this.state={
                loanType: 'Home Purchase',
                propertyType: 'Single Family Home'
            }
            this.handleChangeLoanType = this.handleChangeLoanType.bind(this);
            this.handleChangePropertyType = this.handleChangePropertyType.bind(this);
            this.handleClick = this.handleClick.bind(this);
    }   

    

    handleChangeLoanType(event) {
        this.setState({loanType : event.target.value});
    }
    handleChangePropertyType(event) {
        this.setState({propertyType : event.target.value});
    }
    handleClick(){
        // this.props.dispatch(
        //     {
        //         type: 'update/UPDATE_LOAN_AND_PROP_TYPE',
        //         payload: {loanType: this.state.loanType, propertyType: this.state.propertyType}
        //     }
        // )
        updateLoanPropType({loanType: this.state.loanType, propertyType: this.state.propertyType})
    }


    render(){
        return(
            <div>
                What type of loan will you be needing? <br />
            
                <select onChange={this.props.handleLoanType}>

                    <option type="text" value="homePurchase" >Home Purchase</option>
                    <option type="text" value="refinance" >Refinance</option>
                    <option type="text" value="homeEquity" >Home Equity loan/line</option>

                </select> <br/>

                What type of property are you purchasing? <br />

                <select onChange={this.props.handlePropType}>

                    <option value="singleFamHome">Single Family Home</option>
                    <option value="townHome">Townhome</option>
                    <option value="condo">Condo</option>
                    <option value="multiFam">Multi Family Dwelling</option>
                    <option value="mobileHome">Mobile Home</option>

                </select>
                {this.state.loanType}
                <Link to="/wTwo"><button onClick={this.handleClick}> Next </button></Link>

            </div>
        )
    }
}
function mapStateToProps( state ) {
  return { 
      state 
    };
}
export default connect(mapStateToProps, {updateLoanPropType})(WizardOne); 