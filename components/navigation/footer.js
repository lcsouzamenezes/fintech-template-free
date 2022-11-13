import Link from 'next/link'

export default function Footer () {
    return <footer className="px-3 bg-white">
        <div className="max-w-screen-lg ml-auto mr-auto md:py-20 py-14">
            <ul className="flex flex-col md:flex-row justify-between gap-4">
                <li>
                    <p className="font-semibold uppercase whitespace-nowrap">
                        © 2022 Fintech <br className="hidden md:block"/>Platform
                    </p>
                </li>
                <li>
                    <ul className="space-y-2">
                        <li>
                            <p className="font-semibold">
                                Navigation
                            </p>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/signup">
                                Signup
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="space-y-2">
                        <li>
                            <p className="font-semibold">
                                Company
                            </p>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/about-us">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/partners">
                                Partners
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/careers">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/investors">
                                Investors
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="space-y-2">
                        <li>
                            <p className="font-semibold">
                                Support
                            </p>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/help-desk">
                                Help Desk
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="space-y-2">
                        <li>
                            <p className="font-semibold">
                                Legal
                            </p>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/terms-of-service">
                                Terms Of Service
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 hover:text-gray-900" href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
}