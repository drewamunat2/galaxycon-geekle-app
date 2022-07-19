import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { RequireAuth } from 'react-auth-kit'
import App from './routes/App';
import Admin from './routes/Admin';
import CharacterList from './routes/CharacterList';
import Login from './routes/Login';

export default function RouteComponent(){
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path={'/login'} element={<Login/>}/>
          <Route path="/admin" element={
            <RequireAuth loginPath={'/login'}> 
              <Admin /> 
            </RequireAuth>}
          />
          <Route path="/characters-in-geekle" element={
            <RequireAuth loginPath={'/login'}> 
              <CharacterList /> 
            </RequireAuth>}
          />
        </Routes>
    </Router>
  )
}