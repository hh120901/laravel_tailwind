import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Header } from './sections';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);