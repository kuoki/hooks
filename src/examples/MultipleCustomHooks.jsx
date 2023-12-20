import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {


    const { data, hasError, isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');

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
            
             <button>
                Next quote
             </button>
         
        </>
    )
}
