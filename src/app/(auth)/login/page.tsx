'use client'

export default function LoginPage() {

    const handleRedirect = (url: String) => {
        window.location.href = `${url}`
    }

    return (
        <div className="w-full lg:w-1/2 xl:w-1/3">
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200 border-0">
                <div className="flex-auto px-4 pt-6">
                    {/* tiêu đề */}
                    <h1 className="text-lg text-center font-bold uppercase">Đăng nhập</h1>
                    <div className="mb-2"></div>

                    {/* form đăng nhập */}
                    <form action="" className="text-sm">
                        <div className='relative w-full mb-3'>
                            <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor="">Email / Số điện thoại</label>
                            <div className='flex gap-2'>
                                <input
                                    type="email"
                                    className='w-full p-3 rounded-md border border-blue-500 outline-none'
                                    placeholder='Email / Số điện thoại'
                                />
                            </div>
                        </div>
                        <div className='relative w-full mb-3'>
                            <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor="">Mật khẩu</label>
                            <div className='flex gap-2'>
                                <input
                                    type="password"
                                    className='w-full p-3 rounded-md border border-blue-500 outline-none'
                                    placeholder='Mật khẩu'
                                />
                            </div>
                        </div>
                        <div>
                            <label className='inline-flex items-center cursor-pointer' htmlFor="">
                                <input
                                    type="checkbox"
                                    className='border-0 rounded text-gray-800 w-5 h-5'
                                />
                                <span className='ml-2 text-sm font-semibold text-gray-700'>Ghi nhớ tài khoản</span>
                            </label>
                        </div>
                        <div className='mt-6 text-center'>
                            <button
                                className='bg-blue-500 w-full py-3 px-6 text-white font-bold rounded-md'
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>

                    {/* quên mật khẩu & đăng ký */}
                    <div className='flex justify-between mt-6 text-[13px] text-blue-600'>
                        <span className='cursor-pointer'>Quên mật khẩu?</span>
                        <span className='cursor-pointer' onClick={() => handleRedirect("/register")}>Đăng ký</span>
                    </div>

                    {/* Đăng nhập với Google hoặc Facebook */}
                    <div className='p-6 flex flex-col items-center'>
                        <span className='text-slate-600 font-bold'>Hoặc đăng nhập với</span>
                        <div className='flex gap-4 mt-3 text-white text-[12px] font-bold'>
                            <div className='py-2 flex items-center px-4 bg-red-600 rounded-full cursor-pointer'>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M 18.683594 15.40625 C 18.683594 13.429688 21.894531 13.257813 21.894531 9.394531 C 21.894531 6.597656 19.949219 5.257813 19.75 5.136719 L 21.6875 5.136719 L 23.625 4 L 17.347656 4 C 10.960938 4 9.9375 8.46875 9.9375 9.949219 C 9.9375 12.15625 11.664063 14.898438 15.136719 14.898438 C 15.453125 14.898438 15.789063 14.878906 16.144531 14.839844 C 16.085938 15.003906 15.835938 15.566406 15.835938 16.074219 C 15.835938 17.136719 16.515625 17.8125 16.75 18.222656 C 12.949219 18.1875 8.375 19.835938 8.375 23.503906 C 8.375 24.84375 9.527344 28 14.941406 28 C 21.117188 28 22.988281 24.1875 22.988281 22.050781 C 22.984375 17.96875 18.683594 17.292969 18.683594 15.40625 Z M 16.585938 14.042969 C 14.425781 14.042969 12.601563 11.324219 12.601563 8.417969 C 12.601563 7.554688 13.015625 5.046875 15.40625 5.046875 C 18.484375 5.046875 19.234375 9.609375 19.234375 10.851563 C 19.234375 11.140625 19.4375 14.042969 16.585938 14.042969 Z M 16.4375 26.679688 C 14.457031 26.679688 11.039063 25.835938 11.039063 22.835938 C 11.039063 21.796875 11.644531 19.082031 16.902344 19.082031 C 17.171875 19.082031 17.40625 19.09375 17.605469 19.113281 C 18.699219 19.929688 20.964844 21.109375 20.964844 23.28125 C 20.964844 24.265625 20.378906 26.679688 16.4375 26.679688 Z" />
                                </svg>
                                GOOGLE
                            </div>
                            <div className='py-2 flex items-center px-4 bg-blue-600 rounded-full cursor-pointer'>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z" />
                                </svg>
                                FACEBOOK
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
