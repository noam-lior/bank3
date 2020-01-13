import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Transaction from '../Transaction/Transaction'

@inject('TransactionsStore')
@observer
class Transactions extends Component {
render(){
    const transactions=this.props.TransactionsStore.transactions
    return(
        transactions.map(t=><Transaction data={t}/>)
    )     
}
}

export default Transactions
