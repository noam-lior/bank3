import React from 'react'
function Transaction(props){
const data=props.data
return (<div>{`Amount: ${data.amount} Vendor: ${data.vendor} Category: ${data.category}`}</div>)
}

export default Transaction