import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import "./Styles/Index.css"
import "./Styles/Hero.scss"
import "./Styles/Navbar.scss"
import "./Styles/Sidebar.scss"
import "./Styles/Styles.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
