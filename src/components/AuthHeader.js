import React from 'react'
import {withAuthHeader} from 'react-auth-kit'

class AuthHeader extends React.Component {
    render(){
        return (
            <div>
                {this.props.authHeader}
            </div>
        )
    }
}

export default withAuthHeader(AuthHeader)