 import React, { Component } from 'react' ;
 import {Card} from 'react-bootstrap'; 
 import '../Components/parentprofil.css';
 export default class profile extends Component {
  constructor(props) {
    console.log("construction");
    super(props);
    this.state = {
        count: 0,
    };
}



componentDidMount() {
    this.timer = setInterval(() => {this.setState({count: this.state.count+1})} , 100000)
}

componentWillUnmount() {
    clearInterval(this.timer)
}
     render() {
         return (
             <div className ='main'>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title className="name">{this.props.name}</Card.Title>
    <Card.Text>
      {this.props.description}
    </Card.Text>
    wa9it: {this.state.count}
  </Card.Body>
</Card> 
             </div>
         )
     }
 }
 