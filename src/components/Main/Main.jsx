export default function Main({ logo, title, location, tags }) {
    const tagList = tags.map((tag, index) => {
        return <li style={tag.style} className="text-[14px]  shrink-0 font-bold px-2 py-1 rounded" key={index}>#{tag.name.toUpperCase()}</li>
    });

    return (
        <>
            <header className="flex flex-wrap items-center p-5 gap-4 bg-slate-200" >
                <img className="h-40" src={logo} />
                <div className="flex flex-col gap-3 ">
                    <div>
                        <h1 className="text-md  font-extrabold text-3xl text-gray-900">{title}</h1>
                        <div className="text-[16px] ">{location}</div>
                    </div>
                    <ul className="flex gap-2 flex-wrap">{tagList}</ul>
                    <div className="flex gap-2 text text-white">
                        <button className="px-2 py-1 bg-blue-500 font-bold">Save</button>
                        <button className="px-2 py-1 font-bold bg-blue-500 ">Share</button>
                    </div>
                </div>
            </header>
        </>
    )
}