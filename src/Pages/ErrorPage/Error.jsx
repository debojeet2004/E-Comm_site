import { Error_Image }  from '../../Assets/assets'

function Error() {
    return (
        <div className='h-screen font-bold text-8xl flex justify-center items-center flex-col'>
            <img src={Error_Image} alt="error" className='h-[40rem]' />
            {/* <p className='uppercase font-semibold text-xl'>Page not found</p> */}
        </div>
    )
}

export default Error