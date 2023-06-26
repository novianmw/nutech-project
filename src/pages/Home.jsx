import { Navbar, Hero, Keyboard, AddProduct } from '../components'

export default function App() {
    return (
        <div className='w-full overflow-hidden'>
            <Navbar />
            <Hero />
            <Keyboard />
            <AddProduct />
        </div>
    )
}
