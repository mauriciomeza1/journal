import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
 
export const AuthRouter = () => {
    return (
      <div className='auth__main'>    

        <div className='auth__box-container'>
          <Routes>
            <Route path="/auth/login" element={ <Login /> } />
            <Route path="/auth/register" element={ <Register /> } />
  
            <Route path="*" element={<Navigate replace to="/auth/login" />} />
          </Routes>
        </div>

      </div>
    )
}  