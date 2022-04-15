import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'
import { startLoginEmailPassword } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'


export const Sidebar = () => {

  const {name} = useSelector( state => state.auth)
  const firstName = name.split(' ')[0]

  const dispatch = useDispatch( )
  const handleLogOut = () => {
    dispatch(startLogout())
  }

  const handleAddNew = () => {
    dispatch(startNewNote())
  }
  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebar-navbar mt-5'>
            <i className='far fa-moon'></i>
            <h3>{firstName}</h3>

            <button 
              onClick={handleLogOut}
              className='btn'
            >Log Out</button>
        </div>

        <div
         className='journal__new-entry'
         onClick={handleAddNew}
        >
            <i className='far fa-calendar-plus fa-5x'></i>
            <p className='mt-5'>
                New Entry
            </p>
        </div>

        <JournalEntries />
    </aside>
  )
}
