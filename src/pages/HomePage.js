import{ Header } from "../conponants/Header";
import{ Counter } from "../conponants/counter";


export function  HomePage() {

    return(
         <main>
            <Header heading="word Counter" subHeading="Free online character and wod counter" />    
            <Counter />

         </main>   


    )
}