import React from 'react';
const Contacts=({hello})=>{
    return(
        <div>
            <center><h1>Contact List</h1></center>
            {hello.map((display)=>(
                <div className="card">
                    <div className="card-body">
                    <p className="card-title">{display.id}</p>
                    <p className="card-title">{display.name}</p>
                    <p className="card-title">{display.username}</p>
                    <p className="card-subtitle mb-2 text-muted">{display.email}</p>
                    <p className="card-subtitle mb-2 text-muted">{display.address.street}</p>
                    <p className="card-subtitle mb-2 text-muted">{display.address.suite}</p>
                    <p className="card-subtitle mb-2 text-muted">{display.address.city}</p>
                    <p className="card-subtitle mb-2 text-muted">{display.address.zipcode}</p>
                    <p class="card-text">{display.company.lat}</p>
                    <p class="card-text">{display.company.lng}</p>
                    <p class="card-text">{display.phone}</p>
                    <p class="card-text">{display.website}</p>
                    <p class="card-text">{display.company.catchPhrase}</p>
                    <p class="card-text">{display.company.bs}</p>
                </div>
                </div>
            ))}
        </div>
    )
}
export default Contacts;