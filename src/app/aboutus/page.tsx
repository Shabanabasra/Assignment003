
export default function Aboutus(){
    return(
        
        <div style={{padding: `0px`}}>
            
       
       
       
            <h1 style={{fontSize:"40px",color:"black",textAlign:"center"}}><b>About me</b></h1>
        <p style={{color:"blue",fontSize:"24px", height:30}}> I am Shabana, a skilled web developer with experties in both front-end technologies.
        <br/>
        I enjoy building user-friendly websites that help businesses grow online.</p>

        <br/>
        <br/>

        <br/>
       <div>

       <img className="w-50, h-50 "  src="images/sunflower.jpg"alt="sunflower image"/>

       </div>

       <br/>
       <br/>

        <div>

        <a href="http://localhost:3000/portfolio">
        <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-1 py-2 px-8 foucs:outline-none rounded text-1g">Visit my Portfolio page</button>
        </a>
        </div>

    


       

        
        </div>
        
    )
}