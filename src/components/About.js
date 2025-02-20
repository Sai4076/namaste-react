import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("Parent component Did mount");
    }

    render() {
        console.log("Parent Render");
        return(
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Akshany Saini (class)"} location={"Eluru"}/>
            </div>
        )
    }
}

export default About;