import React from 'react'
import { useSelector } from 'react-redux'
import { Note } from '../notes/Note'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'


export const Journal = () => {

  const {active} = useSelector(state => state.notes)

  return (
    <div className='journal__main-content animate__animated animate__fadeIn animate__faster'>
        <Sidebar />

        <main>
          {
            (active)
              ? (<Note />)
              : (<NothingSelected />)
          }
          
        </main>
    </div>
  )
}
