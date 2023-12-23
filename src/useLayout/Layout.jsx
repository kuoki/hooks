import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter";


export const Layout = () => {

    const {counter, increment } = useCounter(1)
    const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {author, quote} = !!data && data[0]
    // console.log({data, hasError, isLoading })

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div> Loading ...</div>
                    )
             : (
                <blockquote>
                <p>{quote}</p>
                <footer> {author}</footer>
            </blockquote>
            )
             }
            
             <button onClick={() =>increment()}  disabled={ isLoading } >
                Next quote
             </button>
         
        </>
    )
}
