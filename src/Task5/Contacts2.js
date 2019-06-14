import React from 'react';
const Contacts2=({hello})=>{
    return(
        <div>
            <center><h1>Contact List2</h1></center>
            {/* {hello((display2)=>( */}
                <div className="card">
                    <div className="card-body">
                    <p className="card-title">{hello.userId}</p>
                    <p className="card-title">{hello.id}</p>
                    <p className="card-title">{hello.title}</p>
                    <p className="card-title">{hello.body}</p>  
                </div>
                </div>
            {/* ))} */}
        </div>
    )
}
export default Contacts2;