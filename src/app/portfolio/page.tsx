//import Link from "next/link"

export default  function Portfolio(){
    return(
        <div style={{padding: `0px`}}>
            
            
        <h1 style={{fontSize:"40px",color:"black",textAlign:"center"}}><b>Portfolio</b></h1>
        <p style={{color:"rgb",fontSize:"24px", height:30}}>Here are some of the project I've worked on:</p>
        <ul>
            <li style={{fontSize:"25px", fontWeight:"-moz-initial",color:"purple"}}>Project 1: countdown timer</li>
            <li style={{fontSize:"25px", fontWeight:"-moz-initial",color:"blue"}}>Project 2: hackton milestone(1 to 5)</li>
        </ul>
        <div>
        <img className="w-45, h-40 , rounded-full relative"  src="images/nature2.PNG"alt="nature2 image"/>
           
            </div>

        <br/>
        <div>
                
                <img className="w-45 , h-40 , rounded-full relative"  src="images/profile.jpg"alt="profile image" />



            </div>
            

            <br/>
            <div>
                <img className="w-45 , h-40 , rounded-full relative" src="images/nature.JPEG" alt="nature image"/>
            </div>
            <div>
            <a href="http://localhost:3000/aboutus">
            <button className="flex mx-auto mt-16 text-white bg-green-500 border-1 py-2 px-8 foucs:outline-none rounded text-1g">Visit my About us page</button>
             </a>

            </div>

       
       
        </div>
    )
}