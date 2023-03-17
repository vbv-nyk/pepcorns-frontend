export default function Pitch({ pdfUrl, sections }) {
    const pitches = sections.map((section, index) => {
        const content = section.contents.map((content, index) => {
            return <li key={index}>{content}</li>
        })
        const images = section.imageURLs.map((imageURL, index) => {
            return <img className="  mx-auto" key={index} src={imageURL} />
        })
        return (<div key={index} className="flex w-full flex-col gap-5">
            <div className="text-2xl text-gray-800">{section.name}</div>
            <div className="font-bold text-gray-700 text-3xl">{section.title}</div>
            <ul className="list-disc cursor-all-scroll font-medium tracking-wider text-gray-600 text-xl">{content}</ul>
            <div className="grid grid-cols-1 gap-2">{images}</div>
        </div>)
    })
    return (<div >
        <div className="text-2xl font-bold">Deck Info</div>
        <div className="flex flex-col gap-5">{pitches}</div>
    </div>)
}