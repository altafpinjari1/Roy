import React, { useEffect, useState } from 'react';
// import {Card } from "react-bootstrap"
import axios from "axios";
import "./musical.css";

const Musical = () => {
    const [music,setMusic]=useState([])
    const setApiData = async()=>{
        const allAudio=await axios.get("http://localhost:4040/audioList")
        setMusic(allAudio.data.data)
        console.log(allAudio.data.data);
    }
    useEffect(()=>{
        setApiData()
    },[])
    
    return (
        
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:"gray"}}>
            {music.map((item)=>{
                return(
                    
                    <div className='parentDiv'>
                        <div className='childDiv'>
                            <img src={item.poster} alt="" height="250px" width="250px" />
                            <h4>{item.title.substr(0,15)}</h4>
                            <audio src={item.audio} controls style={{height:"70px",width:"200px"}}></audio>
                        </div>
                    </div>
                )
            
            })}
        </div>
    );
};

export default Musical;
//                         <Card style={{ width: '18rem'}}>
//   <Card.Img variant="top" src={item.poster} height="200px" width="150px" />
//   <Card.Body>
//     <Card.Title>{item.title}</Card.Title>
//     <Card.Text>
//       {item.artist}
//     <audio controls style={{width:'16rem'}}>{item.audio}</audio>
//     </Card.Text>
//     </Card.Body>
// </Card>