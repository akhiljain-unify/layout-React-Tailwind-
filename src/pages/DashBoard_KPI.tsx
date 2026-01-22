
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


function DashBoardKPI() {

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Header par={navLinks[4].name} />
            <Source source={navLinks[4].source} />
            <div className="h-svh w-full flex flex-row overflow-hidden">
                <div className="w-16 h-full bg-neutral-900 flex flex-col gap-4 py-6 items-center shrink-0">
                    <div className="size-10 rounded-sm bg-neutral-700"></div>
                    <div className="size-10 rounded-sm bg-neutral-800"></div>
                    <div className="size-10 rounded-sm bg-neutral-800"></div>
                    <div className="size-10 rounded-sm bg-neutral-800"></div>
                    <div className="flex-1"></div>
                    <div className="size-10 rounded-full bg-neutral-800"></div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row px-6 h-14 items-center gap-4 border-b border-neutral-200">
                        <div className="h-6 w-48 rounded-sm bg-neutral-200"></div>
                        <div className="flex-1"></div>
                        <div className="h-8 w-32 rounded-sm bg-neutral-200"></div>
                        <div className="size-8 rounded-sm bg-neutral-200"></div>
                    </div>
                    <div className="p-6 grid grid-cols-12 bg-neutral-50 gap-x-4 gap-y-6 h-full">
                        <div className="col-span-3 h-28 p-4 bg-white flex flex-col gap-2 rounded-xl border border-neutral-300">
                            <div className="w-20 bg-neutral-200 rounded-md h-4"></div>
                            <div className="w-24 bg-neutral-300 rounded-md h-8"></div>
                            <div className="w-16 bg-neutral-100 rounded-md h-3"></div>
                        </div>
                        <div className="col-span-3 h-28 p-4 bg-white flex flex-col gap-2 rounded-xl border border-neutral-300">
                            <div className="w-20 bg-neutral-200 rounded-md h-4"></div>
                            <div className="w-24 bg-neutral-300 rounded-md h-8"></div>
                            <div className="w-16 bg-neutral-100 rounded-md h-3"></div>
                        </div>
                        <div className="col-span-3 h-28 p-4 bg-white flex flex-col gap-2 rounded-xl border border-neutral-300">
                            <div className="w-20 bg-neutral-200 rounded-md h-4"></div>
                            <div className="w-24 bg-neutral-300 rounded-md h-8"></div>
                            <div className="w-16 bg-neutral-100 rounded-md h-3"></div>
                        </div>
                        <div className="col-span-3 h-28 p-4 bg-white flex flex-col gap-2 rounded-xl border border-neutral-300">
                            <div className="w-20 bg-neutral-200 rounded-md h-4"></div>
                            <div className="w-24 bg-neutral-300 rounded-md h-8"></div>
                            <div className="w-16 bg-neutral-100 rounded-md h-3"></div>
                        </div>
                        <div className="col-span-8 p-4 bg-white flex flex-col gap-1 rounded-xl border border-neutral-300">
                            <div className="w-32 bg-neutral-200 rounded-sm h-6 mb-6"></div>
                            <div className="flex-1 bg-neutral-100 rounded-sm"></div>
                        </div>
                        <div className="col-span-4 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
                            <div className="h-6 w-24 bg-neutral-200 rounded mb-4"></div>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="w-40 h-40 rounded-full border-20 border-neutral-200 border-t-neutral-900"></div>
                            </div>
                        </div>
                        <div className="col-span-12 h-64 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
                            <div className="h-6 w-40 bg-neutral-200 rounded mb-4"></div>
                            <div className="flex-1 bg-neutral-100 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardKPI