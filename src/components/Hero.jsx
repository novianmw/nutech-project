import hero from '../assets/hero.jpg'

export default function Hero() {
    return (
        <div className='relative flex flex-col items-center justify-center'>
            <div className='bg-gradient-to-b from-transparent to-black'>
                <img src={hero} alt='' className='h-[500px] w-[100vw]' />
            </div>
            <div className='absolute'>
                <h1 className='font bold text-[100px] text-slate-50'>Cari Kebutuhan Gaming mu</h1>
            </div>
        </div>
    )
}
