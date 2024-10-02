
//import Header from "../app/componets/header"
import Footer from "@/app/componets/footer";
import { pages } from "next/dist/build/templates/app-page";
export default function Home(){
  return(
    <div style={{display: `flex`, flexDirection: `column`,minHeight: `100vh`}}>
      
      <h1 style={{fontSize:"25px",alignItems:"center", justifyContent:"space-between", textAlign:"center"}}><b>Welcome to my Home page</b></h1>
      <p style={{color:"blue",fontSize:"18px",height:30}}> I am a passionate web developer specialized in creating dynamic and responsive websites.</p>
      <br/>
      <img className="w-45 , h-45 rounded-full relative" src="https://www.pentaxforums.com/forums/attachments/12-post-your-photos/32343d1239416053-beauty-canada-spirit-island.jpg" alt="beautyofcanda image" />

      
      
      <main style={{flex: `1`}}>
        
        
      
       </main>


      <Footer/>
     

      
      
      
    </div>
  )
}