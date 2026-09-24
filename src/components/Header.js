import React from 'react'

const Header = () => {

  //วิธีที่ 1 ประกาศตัวแปร let companyName = 'CCT'  
  let companyName = 'CCT'
  //วิธีที่ 2 ประกาศตัวแปร const companyAddress = <p>BANGKOK</p>
  const companyAddress = <p>BANGKOK</p>

  return (
    <div>
        <h1>บริษัท {companyName}</h1>
        {companyAddress}
        <hr />
    </div>
  )
}

export default Header