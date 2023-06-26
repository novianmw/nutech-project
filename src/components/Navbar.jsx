import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='flex w-full items-center justify-between p-5'>
            <div className='flex items-center gap-3'>
                <img className='w-14' src={logo} alt='' />
                <h1 className='text-[16px] font-bold'>GAMING MANIA</h1>
            </div>
            <ul className='flex items-center justify-center gap-10'>
                <a href='/'>
                    <li>HOME</li>
                </a>
                <a href='/'>
                    <li>PRODUCT</li>
                </a>
                <a href='/'>
                    <li>ABOUT US</li>
                </a>
            </ul>
            <div className='relative flex items-center gap-5'>
                <Button onClick={() => navigate('/login')} className='bg-white'>
                    Login
                </Button>
                <Button className='bg-white'>Sign Up</Button>
            </div>
        </div>
    )
}
