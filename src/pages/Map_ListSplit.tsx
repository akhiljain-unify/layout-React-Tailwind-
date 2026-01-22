
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


const Top = () => (
  <div className="h-16 border-b border-neutral-200 flex items-center px-6 gap-4">
    <div className="h-8 w-32 bg-neutral-900 rounded"></div>
    <div className="h-10 flex-1 max-w-2xl bg-neutral-100 rounded-full"></div>
    <div className="flex-1"></div>
    <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
  </div>
);

const FilterTabs = () => (
  <div className="h-12 border-b border-neutral-200 flex items-center px-4 gap-2">
    <div className="h-8 w-24 bg-neutral-100 rounded-full"></div>
    <div className="h-8 w-24 bg-neutral-100 rounded-full"></div>
    <div className="h-8 w-24 bg-neutral-100 rounded-full"></div>
  </div>
);

const ListItem = () => (
  <div className="flex gap-4 p-2 rounded-xl hover:bg-neutral-50">
    <div className="w-72 h-48 bg-neutral-200 rounded-xl shrink-0"></div>
    <div className="flex-1 py-2 flex flex-col gap-2">
      <div className="h-4 w-32 bg-neutral-200 rounded"></div>
      <div className="h-6 w-3/4 bg-neutral-200 rounded"></div>
      <div className="h-4 w-1/2 bg-neutral-100 rounded"></div>
      <div className="flex-1"></div>
      <div className="h-6 w-24 bg-neutral-300 rounded"></div>
    </div>
  </div>
);


const ListPanel = () => (
  <div className="w-1/2 flex flex-col border-r border-neutral-200">
    <FilterTabs />
    <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  </div>
);


const MapPanel = () => (
  <div className="w-1/2 bg-neutral-200 relative">
    <div className="absolute top-4 left-4 flex flex-col gap-2">
      <div className="h-10 w-10 bg-white rounded shadow"></div>
      <div className="h-10 w-10 bg-white rounded shadow"></div>
    </div>
    <div className="absolute top-20 left-32 h-8 px-3 bg-white rounded-full shadow"></div>
    <div className="absolute top-40 right-48 h-8 px-3 bg-white rounded-full shadow"></div>
    <div className="absolute bottom-32 left-48 h-8 px-3 bg-white rounded-full shadow"></div>
    <div className="absolute bottom-20 right-32 h-8 px-3 bg-neutral-900 rounded-full shadow"></div>
  </div>
);


const Layout = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full">
      <Top />
      <div className="flex flex-1">
        <ListPanel />
        <MapPanel />
      </div>
    </div>
  </div>
);


function Map_ListSplit() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[3].name}/>
        <Source source={navLinks[3].source}/>
        <Layout/>

    </div>
  )
}

export default Map_ListSplit