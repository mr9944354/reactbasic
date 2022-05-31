 import React from 'react'
import Banner from './Banner';
import NavBar from './NavBar';
 
function HomePage({itemtopost}) {
   return (
       <div>this is HomePage
           <Banner />
           <NavBar items={itemtopost}/>
     </div>
   )
}
export default HomePage;
 