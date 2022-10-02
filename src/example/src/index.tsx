import React from 'react'
import { render } from "react-dom"
import { classnames } from '../..'

const App = ()=>{
    return <div className={classnames('aa')}>1221</div>
}
render(<App/>,document.getElementById("#app"))