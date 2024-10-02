
import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/aboutus"}><li>Aboutus</li></Link>
                <Link href={"/contactus"}><li>Contactus</li></Link>
                <Link href={"/portfolio"}><li>Portfolio</li></Link>
                
            </ul>
        </div>
    )
}