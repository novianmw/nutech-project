import { useState } from 'react'

const UploadForm = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Perform any data submission or API call here
        // You can access the form data (name, price, description, and image) in this function

        // Reset the form
        setName('')
        setPrice('')
        setDescription('')
        setImage(null)
    }

    return (
        <form onSubmit={handleSubmit} className='mx-auto max-w-md'>
            <div className='mb-4'>
                <label htmlFor='name' className='mb-2 block font-semibold text-gray-700'>
                    Name
                </label>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-blue-500'
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='price' className='mb-2 block font-semibold text-gray-700'>
                    Price
                </label>
                <input
                    type='number'
                    id='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-blue-500'
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='description' className='mb-2 block font-semibold text-gray-700'>
                    Description
                </label>
                <textarea
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-blue-500'
                    required></textarea>
            </div>
            <div className='mb-4'>
                <label htmlFor='image' className='mb-2 block font-semibold text-gray-700'>
                    Image
                </label>
                <input type='file' id='image' onChange={(e) => setImage(e.target.files[0])} className='w-full' required />
            </div>
            <button
                type='submit'
                className='w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none'>
                Upload
            </button>
        </form>
    )
}

export default UploadForm
