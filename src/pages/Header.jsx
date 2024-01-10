import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
function Header() {
  return (
    <div>
    <div className="Headtop">
     <div className="headText">
         <h2>Overview</h2>
     </div>
     <div className='headside'>
     <div class="toggle-switch">
<input class="toggle-input" id="toggle" type="checkbox"/>
<label class="toggle-label" for="toggle"></label>
</div>
<IoMdNotificationsOutline  className='bell'/>
<div className='name'>
<div className='dot'></div>
<h3>Metafoundation</h3>
<FaChevronDown />
</div>
</div>
    </div>
 </div>
  )
}

export default Header