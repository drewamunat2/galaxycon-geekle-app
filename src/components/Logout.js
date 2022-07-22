import React from "react"
import { withSignOut } from 'react-auth-kit'

class Logout extends React.Component {

    render(){
        return (
            <button onClick={() => this.props.signOut()}>Sign Out</button>
        )
    }
}

export default withSignOut(Logout)