import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
        userName: '',
        CityName: '',
        gitAddress: '',
        bioPhoto: 'https://png.pngtree.com/svg/20161008/anonymous_689761.png',
        userLink: '',
        followers: '',
        following: '',
        users:[],
        error:''
    
    }
}

handleChange = event =>{
    this.setState({userLink: event.target.value});
    fetch(`https://api.github.com/users/${event.target.value}?client_id=b909c6523410c39e7843_secret=7e1053d1566651c7bfb5c20f4c919f79614c171a`)
    
    .then(po => {
        return po.json();
    }).then(data => {

         console.log(data)
        this.setState({ 
        userName: data.name,
        CityName: data.location,
        gitAddress: data.html_url,
        followers: 'followers: ' + data.followers,
        following: 'following: ' + data.following,
        bioPhoto: data.avatar_url,
        users: [...this.state.users, data]
     });
     })
   
  }



  render() {


    return (

        <div className="App" >
             
             <div>
            <i className="fab fa-git-square"> GITHUB FINDER </i>
            <input type="text" placeholder='Enter a github user name'
                value={this.state.userLink} onChange={this.handleChange} /> <br></br>            
             </div>
 
             <div >

                 {/* TODO: find a way to create a element for contents */}
                 {/* {this.state.users.forEach (item=>{
                     let cardContainer =  React.createElement(<div><name/><location/></div>)
                     let name =  React.createElement(<p>{this.state.userName}</p>)
                     let location =  React.createElement(<p>{this.state.CityName}</p>)
                     name = this.state.userName;
                     location = this.state.CityName;
                     cardContainer.appendChild(name);
                     cardContainer.appendChild(location);
                 })} */}

                 
            <img ref={image=>this.image=image}  src={this.state.bioPhoto}  alt={"Avatar"} style={{ height: '80px' }} />
            <ul>
                <p>{this.state.gitAddress}</p>
                <p>{this.state.userName}</p>
                <p>{this.state.CityName}</p>
                <p>{this.state.followers}</p>
                <p>{this.state.following}</p>
            </ul>
            </div>

        </div>
    );
  }
}

export default App;
