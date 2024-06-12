import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get(" http://localhost:8081/view").then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
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
    {data.map(
        (value,index)=>{
            return   <tr>
        <th scope="row">{index}</th>
        <td>{value.coursetitle}</td>
        <td>{value.coursedescription}</td>
        <td>{value.date}</td>
        <td>{value.duration}</td>
        <td>{value.venue}</td>
        <td>{value.trainername}</td>
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

export default View