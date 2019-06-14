import React from 'react';
const Contacts1=({hello})=>{
    return(
        <div>
            <center><h1>Contact List</h1></center>
            
                <div className="card">
                    <div className="card-body">
                    <p className="card-title">{hello.login}</p>
                    <p className="card-title">{hello.id}</p>
                    <p className="card-title">{hello.node_id}</p>
                    <p className="card-title">{hello.avatar_url}</p>
                    <p className="card-title">{hello.gravatar_id}</p> 
                    <p className="card-title">{hello.url}</p>
                    <p className="card-title">{hello.html_url}</p>
                    <p className="card-title">{hello.followers_url}</p>
                    <p className="card-title">{hello.following_url}</p>
                    <p className="card-title">{hello.gists_url}</p> 
                    <p className="card-title">{hello.starred_url}</p>
                    <p className="card-title">{hello.subscriptions_url}</p>
                    <p className="card-title">{hello.organizations_url}</p>
                    <p className="card-title">{hello.repos_url}</p>
                    <p className="card-title">{hello.events_url}</p> 
                    <p className="card-title">{hello.received_events_url}</p>
                    <p className="card-title">{hello.type}</p>
                    <p className="card-title">{hello.site_admin}</p>
                    <p className="card-title">{hello.name}</p>
                    <p className="card-title">{hello.company}</p> 
                    <p className="card-title">{hello.blog}</p>
                    <p className="card-title">{hello.location}</p>
                    <p className="card-title">{hello.email}</p>
                    <p className="card-title">{hello.hireable}</p>
                    <p className="card-title">{hello.bio}</p> 
                    <p className="card-title">{hello.public_repos}</p>
                    <p className="card-title">{hello.public_gists}</p>
                    <p className="card-title">{hello.followers}</p>
                    <p className="card-title">{hello.following}</p>
                    <p className="card-title">{hello.created_at}</p> 
                    <p className="card-title">{hello.updated_at}</p> 

                </div>
                </div>
            {/* ))} */}
        </div>
    )
}
export default Contacts1;