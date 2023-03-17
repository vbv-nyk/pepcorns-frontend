export default function FAQ({ faq }) {
    const qna = faq.map((q, i) => {
        return (
            <li className="p-1">
                <div className="font-bold text-gray-700 text-2xl">{q.question}</div>
                <div className="text-xl text-gray-800">{q.answer}</div>
            </li>
        )
    })
    return (<div className="flex flex-col gap-2">
        <div className="text-3xl font-extrabold">FAQ</div>
        <ul className="list-disc ">{qna}</ul>
    </div>)
}