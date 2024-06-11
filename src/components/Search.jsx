import React, { useState } from 'react'
import Navbar from './Navbar'

export const Search = () => {

  const [data,setData]=useState([
    {
        "coursetitle":""
    }
  ])
    const inputHandler=(event)=>
        {
      setData({...data,[event.target.name]:event.target.value})
        }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
       
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">coursetitle</label>
                            <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-primary" onClick={readValue}>search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
