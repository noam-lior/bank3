import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'
@inject('OperationsStore')
@observer
class Operations extends Component {

    render() {
        const handleChange = this.props.OperationsStore.handleChange;
        return (
            <div>
                <div id='amount-div'>
                    <span>Amount</span> <input id='amount' onChange={handleChange}></input>
                </div>

                <div id='vendor-div'>
                    <span>Vendor</span> <input id='vendor' onChange={handleChange}></input>
                </div>

                <div id='category-div'>
                    <span>Category</span> <input id='category' onChange={handleChange}></input>
                </div>

                <div id='button-container'>
                    <button id='deposit-btn'>Deposit</button>
                    <button id='withdraw'>Withdraw</button>
                </div>
            </div>
        )

    }
}
export default Operations;