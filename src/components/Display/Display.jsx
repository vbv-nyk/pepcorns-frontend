import Offers from "../Offers/Offers"
import Event from "../subcomponents/Event"
export default function Display({ motto, websiteUrl, youtubeVideoID, card, goal, investors, dateStart, dateEnd, length, companyOffers, pdfUrl, companyDocuments }) {
    const documents = companyDocuments.links.map((link, index) => {
        return (<a className="hover:underline font-bold" key={index} href={link.link}>
            {link.linkName}
        </a>)
    })
    return (<section className="p-5 flex flex-col gap-4">
        <div className='flex flex-col gap-1'>
            <div className="text-2xl font-bold">{motto}</div>
            <div className="flex gap-x-10 gap-y-4 flex-wrap items-center justify-start font-thin">
                <div className="flex  gap-2 items-center">
                    <img className="h-[20px]" src="https://webstockreview.net/images/globe-icon-png-1.png" />
                    <a className="hover:underline text-blue-800" href={websiteUrl}>Website</a>
                </div>
                <div className="flex  gap-2 items-center">
                    <img className="h-[20px]" src="https://cdn0.iconfinder.com/data/icons/upload-download-files/128/file_pdf_document-4096.png" />
                    <a className="hover:underline text-blue-800" href={pdfUrl}>Pitch PDF</a>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="h-[18px]" src="https://pngimg.com/uploads/credit_card/credit_card_PNG110.png" />
                    <div>{card}</div>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="h-[18px]" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/important-document-1673025-1419767.png" />
                    <div className="text-red-800  flex-wrap flex gap-4">
                        {documents}
                    </div>
                </div>
            </div>
        </div>
        <div className="md:grid grid-cols-3">
            <div className="col-start-1 col-end-3">
                <iframe className='w-full aspect-1 md:aspect-2' src={`https://www.youtube.com/embed/${youtubeVideoID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <Offers companyOffers={companyOffers} />
            <Event goal={goal} investors={investors} dateStart={dateStart} dateEnd={dateEnd} length={length} />
        </div>
    </section >)
}