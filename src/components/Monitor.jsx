export default function Monitor() {
    return (
        <div className='flex flex-col items-start p-5' id='container'>
            <h1 className='py-5 text-[24px] font-semibold'>Kategori : Monitor Gaming</h1>
            <div className='flex flex-row items-center justify-between' id='wrapper'>
                <div className='flex flex-col items-center justify-center border-2 p-3'>
                    <div className='p-32' id='image'>
                        <img src='' alt='' />
                    </div>
                    <div id='name'>
                        <h1 className=''>Monitor Gaming #1</h1>
                    </div>
                    <div id='price'>
                        <p className=''>IDR 123.123.123</p>
                    </div>
                    <div id='stock'>
                        <p className=''>10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
