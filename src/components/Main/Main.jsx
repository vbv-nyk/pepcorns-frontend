export default function Main({ logo, title, location, tags }) {
    const tagList = tags.map((tag, index) => {
        return <li style={tag.style} className="text-xs shrink-0 font-bold px-2 py-1 rounded" key={index}>#{tag.name.toUpperCase()}</li>
    });

    return (
        <>
            <header className="flex  flex-wrap sm:flex-nowrap justify-center items-center border-b-2 p-5 bg-cyan-900   gap-4" >
                <img className="h-32" src={logo} />
                <div className="flex flex-col  gap-3 ">
                    <div className="text-white">
                        <h1 className="text-md text-center sm:text-start font-extrabold">{title}</h1>
                        <div className="text-sm text-center sm:text-start">{location}</div>
                    </div>
                    <ul className="flex gap-2 flex-wrap justify-center">{tagList}</ul>
                    <div className="flex gap-2 mx-auto sm:mx-0 text-sm text-white">
                        <button className="px-2 py-1 bg-blue-500 font-bold">Save</button>
                        <button className="px-2 py-1 font-bold bg-blue-500 ">Share</button>
                    </div>
                </div>
            </header>
        </>
    )
}