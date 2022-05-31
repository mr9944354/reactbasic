import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar({items}) {
  return (
      <div>
          {items.map((e) => {
              return(<NavBarItem item={(e)}/>)
          })}
          
          
    </div>
  )
}
