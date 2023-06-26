import { useState } from 'react'
import { useEffect } from 'react'
import { axiosInstance } from '../lib/axios'

export default function Keyboard() {
    const [datas, setDatas] = useState([])
    const fetchKeyboard = async () => {
        try {
            const productsResponse = await axiosInstance('/products')
            setDatas(productsResponse.data)
        } catch (error) {
            console.log(error)
        }
    }

    const renderProducts = () => {
        return datas.map((product) => {
            return (
                <div key={product.id} className='flex h-[600px] max-w-[300px] flex-col items-center justify-start border-2 p-3'>
                    <img className='w-[200px]' src={product.image} alt='' />
                    <h1 className='py-5 text-center text-[20px] font-semibold'>{product.name}</h1>
                    <p className='py-5 text-center text-[16px] font-normal'>IDR {product.price}</p>
                    <p className='text-center text-[16px] font-normal'>{product.description}</p>
                </div>
            )
        })
    }

    useEffect(() => {
        fetchKeyboard()
    }, [])

    return (
        <div className='flex flex-col items-center p-5 ' id='container'>
            <h1 className='text-[24px] font-semibold'>Kategori : Keyboard Gaming</h1>
            <div className='flex flex-row items-start justify-start gap-10'>{renderProducts()}</div>
        </div>
    )
}
