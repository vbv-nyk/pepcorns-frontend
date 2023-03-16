import Event from "../subcomponents/Event"
export default function Display({ motto, websiteUrl, youtubeVideoID, card, goal, investors, dateStart, dateEnd, length }) {
    return (<section className="p-5 flex flex-col gap-4">
        <div className='flex flex-col gap-1'>
            <div className="text-2xl font-bold">{motto}</div>
            <div className="flex gap-10 font-thin">
                <div className="flex gap-2 items-center">
                    <img className="h-[20px]" src="https://webstockreview.net/images/globe-icon-png-1.png" />
                    <a className="hover:underline text-blue-800" href={websiteUrl}>Website</a>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="h-[18px]" src="https://th.bing.com/th/id/R.d7d9b5ff16d9a531abc13d00c9419522?rik=HsCq20H84%2fVbiQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_169155.png&ehk=lo%2fANlF2DsudgL1lrFf%2fAqpFyDSEul2zfJLJ85WOD4M%3d&risl=&pid=ImgRaw&r=0" />
                    <div>{card}</div>
                </div>
            </div>
        </div>
        <div>
            <iframe className=' w-full aspect-1 md:aspect-2 md:w-2/3' src={`https://www.youtube.com/embed/${youtubeVideoID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Event goal={goal} investors={investors} dateStart={dateStart} dateEnd={dateEnd} length={length} />

        </div>
    </section >)
}