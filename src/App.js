import React from "react";
import './App.css';
import Compteur from "./Computer";

class App extends React.Component {
  state = {
    fullName: 'Mahni Islem',
    bio: 'My name is Islem Mahni . I,m a full stack web developer',
    imgSrc: 'https://scontent.fqfd1-1.fna.fbcdn.net/v/t39.30808-6/315992998_806142817352918_5779711837876242664_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGvO_Zj5Br1poEoSZ3tc1tgxViN7YgFlKLFWI3tiAWUorLwGoxvcbtYR4k7__qglmCqDSP9X2f-scquW6lfCHq_&_nc_ohc=SUBZsXopOU4AX9alSpN&_nc_ht=scontent.fqfd1-1.fna&oh=00_AfBtntYdoMiBF9UinUFZ76K84k7MDiAbP9WYdn7udMNJJw&oe=638FBB3A',
    profession: 'Web Developer',
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1>Show the count</h1>
        <Compteur />
        </>
      </div>
    );
  }
}

export default App;
