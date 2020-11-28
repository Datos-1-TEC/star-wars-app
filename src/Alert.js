import './App.css';
import React from 'react'
export default class Alert extends React.Component {
render() {
return (
<div>{this.props.count > 60 ? "Peligro! la cantidad de segundos ha excedido el límte!!!" :
""}</div>
);
}
}