export default function Event({ investors, dateStart, dateEnd, length, goal }) {
    const daysLeft = new Date(dateStart).getUTCDate() - new Date().getUTCDate();
    return (<section className="flex col-start-1 col-end-3 row-start-2 row-end-3 bg-slate-100 w-fit p-5 items-baseline gap-3 justify-around sm:gap-10 text-center flex-wrap ">
        <div className="flex flex-col">
            <div >{"Goal"}</div>
            <div className="text-2xl font-semibold">₹{goal}</div>
        </div>
        <div className="flex flex-col">
            <div >{"Number of investors"}</div>
            <div className="text-2xl font-semibold">{investors}</div>
        </div>
        <div className="flex flex-col">
            <div >{"Days Until Start"}</div>
            <div className="text-2xl font-semibold">{daysLeft}</div>
        </div>
        <button className="py-4 w-fit px-5 bg-neutral-500 text-white font-bold">Invest Now</button>
    </section>)
}   