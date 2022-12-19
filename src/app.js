import React from "react";
import Header from './components/header';
import Footer from './components/footer';
import Section from './components/aboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            {/* <Navbar/> */}
            <Header/>
            <Section/>
            <Footer/>
        </div>
    )
}

export default App;