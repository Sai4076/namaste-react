import { useState } from "react"

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return(
        <div className="user-card">
            <h1>Count - {count}</h1>
            <h1>Count2 - {count2}</h1>
            <h1>{name}</h1>
            <h2>Location: Eluru</h2>
            <h3>Contact: 8333896974</h3>
        </div>
    )
}

export default User