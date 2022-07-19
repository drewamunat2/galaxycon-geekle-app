import React from "react"
import axios from 'axios'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

export default function Login () {
    const navigate = useNavigate()
    const signIn = useSignIn()
    const [formData, setFormData] = React.useState({email: '', password: ''})

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/login', formData)
            .then((res)=>{
                if(res.status === 200){
                    if(signIn({token: res.data.token,
                               expiresIn:res.data.expiresIn,
                               tokenType: "Bearer",
                               authState: res.data.authUserState,
                               refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
                               refreshTokenExpireIn: res.data.refreshTokenExpireIn})){ // Only if you are using refreshToken feature
                        navigate("/admin");
                    }else {
                      alert("Error Occoured. Try Again");
                    }
                }
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <input type={"email"} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
            <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>

            <button>Submit</button>
        </form>
    )
}