import Link from 'next/link'

export default function ButtonPrimary (props) {
    return <Link className="inline-block px-6 py-3 font-semibold text-gray-900 uppercase bg-white rounded hover:bg-gray-200 transition whitespace-nowrap" href={props.linkTo}>
        {props.text}
    </Link>
}