import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer>
        <p> &copy;  {today.getFullYear()} Developed by Swift Media
        
         </p>
    </footer>
  )
}

export default Footer