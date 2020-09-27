import ReactDOM from "react-dom"
import React from "react"
import App from "./UI/layout/app"
import {Provider} from "react-redux"
import store from './API/store'
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)