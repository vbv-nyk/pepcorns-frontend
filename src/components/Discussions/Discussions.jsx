import { useState } from "react"

export default function Discussions({ companyDiscussions }) {
    console.log(companyDiscussions);
    const [showTextField, setShowTextField] = useState(false);
    const discussions = companyDiscussions.map((discussion, index) => {
        return (<div className="flex flex-col border-4 p-4" key={index}>
            <div className="text-2xl text-gray-600 font-bold">{discussion.name}</div>
            <div className="text-xl text-gray-700">{discussion.comment}</div>
        </div>)
    });
    return (<div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-gray-600">Discussions</div>
            {!showTextField && <button onClick={() => setShowTextField(true)} className="px-3 py-2 bg-slate-600 text-white font-bold">Add Comment</button>}
        </div>
        {showTextField && <div className="flex flex-col gap-2">
            <textarea className="border w-full" rows={10} />
            <div className="flex gap-2 text-white font-bold">
                <button className="py-2 bg-green-600 px-3">Submit</button>
                <button onClick={() => setShowTextField(false)} className="py-2 bg-red-600 px-3">Cancel</button>
            </div>
        </div>}
        <div className="flex flex-col gap-3">{discussions}</div>
    </div>)
}