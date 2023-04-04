import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +52 5543905938</label>
            <i className='fa fa-envelope'></i>
            <label> support@reactshop.com</label>
          </div>
          <div className='right row RText'>
            <label>Customer Service</label>
            <label>Today's Deals</label>
            <span>🌎</span>
            <label>EN</label>
            <span>🔘</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
