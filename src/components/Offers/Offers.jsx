export default function Offers({ companyOffers }) {
    const offers = companyOffers.map((companyOffer, index) => {
        const rewards = companyOffer.rewards.map((reward, i) => <li key={i}>{reward}</li>)
        const tnc = companyOffer.tnc.map((term, i) => <li key={i}>{term}</li>)
        return (<div key={index} className={"flex  flex-col gap-5"} >
            <div className="text-3xl font-extrabold border-b-4 text-center">₹{companyOffer.price}</div>
            <div className="text-sm font-bold">{companyOffer.type}</div>
            <div className="flex flex-col gap-2">
                <div className="font-bold text-2xl">Rewards</div>
                <div className="">{rewards}</div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold text-2xl">Terms And Conditions</div>
                <div className="">{tnc}</div>
            </div>
            <div className="flex flex-col gap-2">
                <button className="border cursor-pointer w-fit px-10 py-5 bg-neutral-500 font-bold text-white ">₹{companyOffer.price}</button>
            </div>
        </div>)
    })
    return (<div className="aspect-1 overflow-y-scroll w-full col-start-3 col-end-4  p-10 bg-slate-100 flex flex-col  gap-8 border-b-2">
        {offers}
    </div>)
}