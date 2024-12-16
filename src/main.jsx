// original

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// Learn React / Static pages / Custom Components - Parent/Child Components / Exercise #1

import { createRoot } from "react-dom/client"
import "./index.css"
import reactLogo from './assets/react.svg'

const root = createRoot(document.getElementById("root"))

function Header() {
    return (
        <header className="header">
            <img src={reactLogo} className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainComponent() {
    return (
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
    </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Rekun development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainComponent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
