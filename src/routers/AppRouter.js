import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Journal } from '../components/journal/Journal';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

 
export const AppRouter = () => {

  const dispatch = useDispatch()
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async(user) => {
      
      if(user?.uid) {
        dispatch( login(user.uid, user.displayName) )
        setisLoggedIn(true)

 
        dispatch(startLoadingNotes( user.uid ))
      } else {
        setisLoggedIn(false)
      }

      setChecking(false)

    })
  
  
  }, [dispatch, setChecking])
  

  if (checking) {
    return (
      <h1>Loading...</h1>
    )
  }



    return (
      <> 
       <BrowserRouter>
          <Routes>
            
          <Route
                    path="/*"
                    element={
                        <PublicRoute isAuth={isLoggedIn}>
                            <AuthRouter />
                        </PublicRoute>
                    }
                />
 
                <Route
                    path="/"
                    element={
                        <PrivateRoute isAuth={isLoggedIn}>
                            <Journal />
                        </PrivateRoute>
                    }
                />
          </Routes>
        </BrowserRouter>  
      </>
    );
}