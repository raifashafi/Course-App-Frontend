import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [data,setData]=useState([
        {
        "coursetitle":"",    
        "coursedescription":"",
        "date":"",
        "duration":"",
        "venue":"",
        "trainername":""

        }
    ])
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
            (response)=>
                {
                    console.log(response.data)
                    if (response.data.status=="success") {

                        alert("success")
                    } else {
                        alert("error")
                    }
                }
        ).catch().finally()
    }
  return (
    <div>

         <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">COURSE TITLE</label>
                        <select name="coursetitle" id="" className="form-control" value={data.coursetitle} onChange={inputHandler}>
                            <option value="MTECH">MTECH</option>
                            <option value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                            <option value="MCOM">MCOM</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label className="form-label">COURSE DESCRIPTION</label>
                        <textarea name="coursedescription" id="" className="form-control" value={data.coursedescription} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">date</label>
                        <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-lab">Duration</label>
                        <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">VENUE</label>
                        <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label htmlFor="" className="form-label">TRAINER NAME</label>
                        <input type="text" className="form-control" name='trainername' value={data.trainername} onChange={inputHandler} />
                    </div>
                  
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-success"onClick={readValue}>submit</button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Add