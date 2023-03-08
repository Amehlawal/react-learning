function Header() {
    return (
    <header>
            <nav>
                <img src='./logo-react-icon.png' alt="logo" width='40px' />
            </nav>
   </header>
)
}
function MainContent() {

    return (
    <div>
       <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps,including mobile apps</li>
        </ul>
    </div>    
)
}

function Footer() {
    return (
        <footer>
        <small>© 2023 Abuh development. All rights reserved."</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

// ReactDOM.createRoot(document.getElementById('root')).render(navbar);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);