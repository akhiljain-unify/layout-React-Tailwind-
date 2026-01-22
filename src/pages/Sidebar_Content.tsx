
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'
const Box = ({ className }: { className?: string }) => {
    return (
        <div className={`h-10 bg-neutral-100 rounded-sm ${className}`}></div>
    )
}

const CenterBarBox = () => {
    return (

        <div className={`h-12 border-b border-neutral-100 flex items-center gap-3 px-2`}>
            <div className="w-5 h-5 bg-neutral-200 rounded"></div>
            <div className="w-5 h-5 bg-neutral-200 rounded"></div>
            <div className="w-32 h-4 bg-neutral-200 rounded"></div>
            <div className="flex-1 h-4 bg-neutral-100 rounded"></div>
            <div className="w-16 h-4 bg-neutral-100 rounded"></div>
        </div>

    )
}

function SidebarContent() {

    return (

        <div className='flex flex-col h-screen overflow-hidden'>
            <Header par={navLinks[1].name} />
            <Source source={navLinks[1].source} />
            <div className="flex-1 w-full flex flex-row">
                <div className="w-64 border-px border-r border-neutral-200 flex flex-col">
                    <div className="p-4">
                        <Box className='bg-neutral-900 h-12' />
                    </div>
                    <div className="flex-1 p-4 pt-0">
                        <div className="flex flex-col gap-1">
                            <Box className='bg-neutral-200' />
                            <Box />
                            <Box />
                            <Box />

                            <div className="h-px my-2 bg-neutral-200"></div>
                            <Box />
                            <Box />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-row justify-between items-center px-4 h-14 border-b border-neutral-200">
                        <div className="flex flex-row gap-2">
                            <div className="size-8 rounded-sm bg-neutral-200"></div>
                            <div className="size-8 rounded-sm bg-neutral-200"></div>
                        </div>
                        <div className="w-64 h-8 bg-neutral-100 mx-2 rounded-sm"></div>
                    </div>

                    <div className="flex-1 p-4 flex flex-col gap-0 overflow-auto">
                        {[...Array(8).fill(0)].map((_) => {
                            return (<CenterBarBox />)
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SidebarContent