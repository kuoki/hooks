import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClickBtn =  () => {
        // document.querySelector('input').select()
        inputRef.current.select()
    }
  return (
    <>
    <h1>FocusScreen</h1>
    <hr /> 

    <input type="text"
    placeholder="Ingresa tu nombre" 
    ref={inputRef}/>
    <button>
        Set focus
    </button>
    </>
  )
}
