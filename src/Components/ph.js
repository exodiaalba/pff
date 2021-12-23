import React, { Component } from 'react' ;
import P from './p' ;
import '../Components/parentprofil.css';
import {Button} from 'react-bootstrap';

export default class parentprofile extends Component {
    constructor(props) {
super(props)

this.state = {
    name :'Tarek' ,
    description : 'Hey im tarek gamer ' ,
    image : 'https://scontent.ftun2-1.fna.fbcdn.net/v/t39.30808-1/p160x160/267356595_1897940367067799_7547944785777075412_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0AgXAsHsuuwAX-2s6FX&_nc_oc=AQkvM_YBgvuxFa3Lw81lTOJrO6mdwHK4ZfNDAWyMAe03TIhJrGJP-kCTh688Hf4_bRQ&tn=_FYz8J8JVZNnurWN&_nc_ht=scontent.ftun2-1.fna&oh=00_AT_N34Ja8kc2EgwHaah5vJ_e5BIuKjoM60hbsz_bDxxQJQ&oe=61C97430' ,
    show:false

    }

    }
  

    

    toggleButton = () => { 
        this.setState({show:!this.state.show }) 
    }
    render() {
        return (
            <div className="profile">
                <h1 className="title">Hello!</h1> 
                 <br/>
                 <Button variant="primary"  onClick={ () => this.toggleButton ()}>{this.state.show ? 'Click to hide' : 'Click to show'}</Button>
                {this.state.show ?<P name ={this.state.name} description ={this.state.description} image ={this.state.image}/> : null }
                
            </div>
        )
    }
}
