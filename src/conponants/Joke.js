import{useEffect,useState} from "react";

export const Joke=()=>{
    const [Joke,setJoke]= useState(" ");

    useEffect(()=>{
        const fetchJoke = async() => {
            const response = await fetch("");
            const data= await response.json();
            setJoke(data.value);



        }    
        fertchJoke();


    },[])

    return(
        <section className="Joke">
            <p>
                <span data-testid="jokeHeadline">{joke}</span>
                <span> - api.chucknorris.io </span>
            </p>

        </section>    



    )






}