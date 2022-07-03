import React from 'react'
import { useState } from 'react';

const Content = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      item: 'Rice and Beans',
      checked: false
    },

    {
      id: 2,
      item: "Conflakes and golden mourn",
      checked: true,
    },

    {
      id: 3,
      item: 'Sugar',
      checked: true
    }
  ])

  const handleClick = (id) =>{
    console.log(`key ${id}`)

  }
   
  return (
    <main>
        <ul>
          {items.map((item) =>(
            <li key={item.id}>
              
              <input
               type="checkbox"
               checked={item.checked}
               onChange={() => handleClick(item.id)}
              />
              <label>{item.item}</label>
              <button>Delete</button>

            </li>
          ))}
        </ul>
    </main>

    
  )
}

export default Content