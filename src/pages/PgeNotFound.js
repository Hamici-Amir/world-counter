import{ Link } from "react-router-dom";
import PageNotFoundImage from "../assets/Page-not-found.jpg";


export const  PageNotFound = () => {
  
    return(
         <main>
           <section className="pnf">
            <div className="oops">
                <p className="pnfText"> Oops - Page Not Found ?</p>
                <img src={PageNotFound} alt=""/>
                <Link to="/">
                    <button data-testid="homeBtn">Go Back To Word Counter </button>
                </Link>
            </div>
           </section>
         </main>   
    ) 
}