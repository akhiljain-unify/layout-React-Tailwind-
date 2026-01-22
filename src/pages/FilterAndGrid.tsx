
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'
export const Card = () => {
    return (
        <div className="bg-neutral-100 rounded-xl overflow-hidden flex flex-col">
            <div className="h-48 bg-neutral-200"></div>
            <div className="p-4 flex flex-col gap-2">
                <div className="h-5 bg-neutral-200 rounded w-3/4"></div>
                <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                <div className="h-6 bg-neutral-300 rounded w-1/3 mt-2"></div>
            </div>
        </div>
    )
}



function FilterGrid() {

    return (

        <div className='flex flex-col h-screen overflow-hidden'>
            <Header par={navLinks[2].name} />
            <Source source={navLinks[2].source} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="h-16 border-b border-neutral-200 flex items-center px-6 gap-4 shrink-0" >
                    <div className="h-8 w-32 bg-neutral-900 rounded"></div>
                    <div className='flex-1'></div>
                    <div className="h-10 w-80 bg-neutral-100 rounded-full"></div>
                    <div className='flex-1'></div>
                    <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
                </div>


                <div className="w-full h-full flex flex-row">
                    <div className="w-72 h-full  border-r border-neutral-200 flex flex-col gap-6 p-6">
                        <div className="flex flex-col gap-2">
                            <div className="h-5 w-20 rounded bg-neutral-300"></div>
                            <div className="h-10 rounded bg-neutral-100"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="h-5 w-24 bg-neutral-300 rounded"></div>
                            <div className="h-2 bg-neutral-200 rounded-full"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="h-5 w-20 bg-neutral-300 rounded"></div>
                            <div className="flex flex-col gap-2">
                                <div className="h-6 bg-neutral-100 rounded">
                                </div>
                                <div className="h-6 bg-neutral-100 rounded">
                                </div>
                                <div className="h-6 bg-neutral-100 rounded">
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="h-5 w-28 bg-neutral-300 rounded"></div>
                            <div className="flex flex-col gap-2">
                                <div className="h-6 bg-neutral-100 rounded">
                                </div>
                                <div className="h-6 bg-neutral-100 rounded">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
                        <div className="flex flex-row items-center justify-between">
                            <div className="h-6 w-48 bg-neutral-200 rounded"></div>
                            <div className="h-8 w-32 bg-neutral-100 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 flex-1">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterGrid