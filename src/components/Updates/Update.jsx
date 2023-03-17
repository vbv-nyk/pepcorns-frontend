export default function Update({ companyUpdates }) {
    const updates = companyUpdates.map((update, index) => {
        return (
            <div key={index} className="flex items-center border-4 w-fit ">
                <img className="hidden md:inline h-32 flex-shrink" src="https://api.pepcorns.com/clientassets/icon1677177731365.png" />
                <div className="flex flex-col flex-grow w-fit p-4 gap-2">
                    <div className="text-xs leading-none font-bold">{update.date}</div>
                    <div className="text-xl font-bold">{update.announcement}</div>
                </div>
            </div>)
    })
    return (<div className="flex flex-col gap-4">
        <div className="text-gray-600 font-extrabold text-3xl">Updates</div>
        <div className="flex flex-col gap-2  flex-wrap">{updates}</div>

    </div>)
}