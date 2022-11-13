import Link from 'next/link'

export default function ButtonSecondary (props) {
    return <Link className="inline-block px-6 py-3 text-white font-semibold border-2 border-white rounded-full hover:text-gray-900 hover:bg-white transition whitespace-nowrap" href={props.linkTo}>
        {props.text}
    </Link>
}