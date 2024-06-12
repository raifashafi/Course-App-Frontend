import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export const Search = () => {

  const [data,setData]=useState(
    {
        "coursetitle":""
    }
  )
  const [result,setResult]=useState([])
  // INPUT FETCHING
    const deleteCourse=(id)=>{
      let input = {"_id": id}
      axios.post("http://localhost:8084/delete",input).then(
        (response)=>{
          console.log(response.data)
          if (response.data.status== "success") {
            alert("successfully deleted")
          } else {
            alert("error in deletion")
          }
        }
      ).catch().finally()
    }
    const inputHandler=(event)=>
        {
      setData({...data,[event.target.name]:event.target.value})
        }
        // SEARCH BUTTON EVENT
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8084/search",data).then(
          (response)=>{
          console.log(response.data)           
          setResult(response.data)
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
                            <label htmlFor="" className="form-label">coursetitle</label>
                            <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-primary" onClick={readValue}>search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


              <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">coursetitle</th>
      <th scope="col">coursedescription</th>
      <th scope="col">date</th>
      <th scope="col">duration</th>
      <th scope="col">venue</th>
      <th scope="col">trainername</th>
    </tr>
  </thead>
  <tbody>
   {
    result.map(
      (value,index)=>{
        return  <tr>
        <th scope="row">{index}</th>
        <td>{value.coursetitle}</td>
        <td>{value.coursedescription}</td>
        <td>{value.date}</td>
        <td>{value.duration}</td>
        <td>{value.venue}</td>
        <td>{value.trainername}</td>
        <td>
          <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>delete</button>
        </td>
      </tr>
      }
    )
   }
    
  </tbody>
</table>
              </div>
            </div>
        </div>
    </div>
  )
}
