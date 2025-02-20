import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log("Child constructor");

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        }
    }

    async componentDidMount(){ 
        const data = await fetch("https://api.github.com/users/Sai4076")
        const json = await data.json();
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate() {
        console.log("Component Did update");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

  render() {
    const {login,id,avatar_url} =this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {login}</h1>
        <h2>Id: {id}</h2>
        <h3>Contact: 8333896974</h3>
      </div>
    );
  }
}

export default UserClass;