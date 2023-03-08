const page = (
    <body>
        <img src='./logo-react-icon.png' alt="logo" width='40px' />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps,including mobile apps</li>
        </ul>
    </body>
)

// ReactDOM.createRoot(document.getElementById('root')).render(navbar);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);