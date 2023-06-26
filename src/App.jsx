import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'
export default function App() {
    return (
        // <Home/>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
        </Router>
    )
}
