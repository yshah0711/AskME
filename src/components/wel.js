import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Welcome()
{
    const [data,setdata]=useState([]);

    useEffect (()=>{
        fetch("http://localhost:5000/wel",{
            method:'GET',
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userdata");
            setdata(data.data);
        });
    },[]);

    const location=useLocation();
    return(
        
        <div className="auth-wrapper">
            <div className="auth-inner" style={{width:"auto"}}>
                <h1 style={{textAlign:"center"}}>Welcome {location.state.id} </h1>
                <h3>List of all users</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(i=>{
                            return(
                                <tr>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>  
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Welcome;