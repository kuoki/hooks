import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CustomHook } from './useEffect/CustomHook'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { CounterApp } from './counter/CounterApp'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <SimpleForm/> */}
    {/* <CustomHook/> */}
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
