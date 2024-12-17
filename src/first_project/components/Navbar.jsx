import reactLogo from '/home/rekun/javascript/learn-react/src/assets/react.svg'

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React logo." />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}