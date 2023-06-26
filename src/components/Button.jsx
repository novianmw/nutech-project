/* eslint-disable react/prop-types */
export default function Button({ className = 'bg-blue-500', children, text, onClick, type = 'submit', ...props }) {
    return (
        <button
            {...props}
            type={type}
            onClick={onClick}
            className={`${className} rounded-lg border border-black px-4 py-2 text-[14px] shadow-lg duration-300 hover:bg-[#E9652A] hover:text-white`}>
            {text || children}
        </button>
    )
}
