import SubDetails from "../subcomponents/FAQ"
export default function Details({ companyDetails }) {

    const people = companyDetails.people.map((person => {
        return <div className="flex flex-col items-center gap-2">
            <img className="w-60 aspect-1" src={person.imageURL} />
            <div className="flex flex-col gap-2 text-center">
                <div>
                    <div className="text-3xl text-gray-800">{person.name}</div>
                    <div className="text-2xl text-gray-700">{person.position}</div>
                </div>
                <div className="flex justify-center gap-4">
                    <a href={person.handles.linkedin}>
                        <img className="h-8" src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png" />
                    </a>
                    <a href={person.handles.facebook}>
                        <img className="h-8" src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0" />
                    </a>
                    <a href={person.handles.twitter}>
                        <img className="h-8" src="https://th.bing.com/th/id/R.6c3ea8b640f61035021c20dd5dcd37fa?rik=31mzN9qX%2bAR9pA&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f377-3776210_facebook-logo-vector-logovectornet-logo-facebook-2019-png.png&ehk=feGZ0i4yauVvpdtQu%2bTAeLkp%2bpCt2QN1zx7GrMwtQuA%3d&risl=&pid=ImgRaw&r=0" />
                    </a>
                </div>
            </div>
        </div>
    }));
    return (<section className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
            <div className="text-3xl text-center">Team</div>
            <div className="flex  gap-10  flex-wrap justify-center items-center">
                {people}
            </div>
        </div>
        <SubDetails faq={companyDetails.faq} />
    </section>)
}