export default function ButtonAction (props) {
    return <button className="block w-full mt-4 px-5 py-3 font-semibold text-white bg-blue-500 hover:bg-blue-400 rounded-full transition whitespace-nowrap">
        {props.text}
    </button>
}