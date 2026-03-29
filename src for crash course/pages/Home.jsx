//import React, {useEffect, useState} from "react";
//import axios from "axios";
//import User from "./components/User.jsx";
//import {Link} from "react-router-dom";

//function Home() {
//const [users, setUsers] =useState([])

//    async function main() {
//        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
//        setUsers(data)
//    }

//    useEffect(() => {
//        setTimeout(() => {
//            fetchUsers();
//        }, 500);
//    }, []);
    
    //const pixels = "2px";
    //This is showing how when you want to style something, you can create variables with long bits of code so you have readable code.
    // Below above the div style, you can see how the variable 'pixels' is used in place of long code that makes things hard to read
    //return (
     //   <div>
            //{users.length > 0 //
            //    ? <h1>{users[0]?.name}</h1> //
            //   : <h1>Loading...</h1> //
          //  }    //
                
                // <div style={{border: '${pixels}}
     //           <div> style={{border:'1px solid black'}}
     //               <div>users[0]?.id</div>
    //                <div>users[0]?.name</div>
     //               <div>users[0]?.email</div>
     //               <div>users[0]?.username</div>
     //   </div>
   // );
    //This is basically saying that if the first statement is true (on line 19), then
    //render it. If not, show Loading..., on line 20.
    //This is also how you create a loading state. For special effects (the spinning wheel), use JS
    //Also for the loading state, see lines 13 and 15 (2000 is 2 seconds)
//}

//Below is an example of how to pull information (in this case, id, name, email, and username). There is another example in users.jsx
//Note: The code in app.jsx do not reflect this code. When making a code similar to this, copy and paste what I have below.
//Also copy and paste the import section from the top. For the App.jsx, get a mentor to help.

//return(
//    <div>
//        {users.map((user) => (
//            <Link to={`/${.userid}`} key={user.id}>
//            <User 
 //           id={user.id} 
//            name={user.name} 
//            email={user.email} 
//            username={user.username} 
//            />
//            </Link>
//        ))}
//        </div>
//);
//}

//export default Home