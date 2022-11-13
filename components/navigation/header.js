import Link from 'next/link'
import ButtonSecondary from '../buttons/button-secondary'

export default function Header (props) {
    return <div>
        <header className="px-3 bg-blue-900">
            <div className="max-w-screen-lg ml-auto mr-auto py-5">
                <ul className="flex justify-between items-center gap-4">
                    <li>
                        <Link className="text-3xl font-semibold text-white uppercase" href="/">
                            Fintech
                        </Link>
                        </li>
                    <li className="hidden lg:block">
                        <ul className="flex items-center gap-12">
                            <li>
                                <Link className="text-white decoration-2 underline-offset-4 hover:underline whitespace-nowrap" href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white decoration-2 underline-offset-4 hover:underline whitespace-nowrap" href="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white decoration-2 underline-offset-4 hover:underline whitespace-nowrap" href="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white decoration-2 underline-offset-4 hover:underline whitespace-nowrap" href="/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white decoration-2 underline-offset-4 hover:underline whitespace-nowrap" href="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="hidden lg:block">
                        <ButtonSecondary text="Start Free" linkTo="/signup" />
                    </li>
                    {!props.menu ? <svg onClick={props.setMenu} className="block lg:hidden w-8 h-8 my-2.5 text-white rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> : <svg onClick={props.setMenu} className="block lg:hidden w-8 h-8 my-2.5 text-white rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>}
                </ul>
            </div>
        </header>
    </div>
}