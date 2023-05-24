import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import CreateUrl from './CreateUrl'

function Menu() {

  let navigate = useNavigate()

  return (
    <div>
      <CreateUrl/>
    </div>
  )
}

export default Menu
