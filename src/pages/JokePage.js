import{ Header } from "../conponants/Header";
import{ Joke } from "../conponants/Joke";


export function  JokePage() {

    return(
         <main>
            <Header heading="word Counter" subHeading="Free online character and wod counter" />    
            <Joke />

         </main>   


    )
}