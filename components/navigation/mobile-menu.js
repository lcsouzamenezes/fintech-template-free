import Link from 'next/link'

export default function MobileMenu () {
    return <section className="px-3 py-4">
        <Link className="block p-3 text-xl text-white text-center underline-offset-4 hover:underline" href="/">
            Home
        </Link>
        <Link className="block p-3 text-xl text-white text-center underline-offset-4 hover:underline" href="/dashboard">
            Dashboard
        </Link>
        <Link className="block p-3 text-xl text-white text-center underline-offset-4 hover:underline" href="/pricing">
            Pricing
        </Link>
        <Link className="block p-3 text-xl text-white text-center underline-offset-4 hover:underline" href="/contact-us">
            Contact Us
        </Link>
        <Link className="block p-3 text-xl text-white text-center underline-offset-4 hover:underline" href="/login">
            Login
        </Link>
        <Link className="block p-3 text-xl text-white text-center underline-offset-4 hover:underline" href="/signup">
            Start Free
        </Link>
    </section>
}