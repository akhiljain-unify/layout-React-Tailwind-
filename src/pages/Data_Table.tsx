
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'



const TopHeader = () => (
  <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
    <div className="h-6 w-40 bg-neutral-200 rounded"></div>
    <div className="flex-1"></div>
    <div className="h-8 w-32 bg-neutral-100 rounded"></div>
    <div className="h-8 w-24 bg-neutral-900 rounded"></div>
  </div>
);


const FilterBar = () => (
  <div className="h-12 border-b border-neutral-200 flex items-center px-6 gap-2">
    <div className="h-7 w-28 bg-neutral-100 rounded-full"></div>
    <div className="h-7 w-28 bg-neutral-100 rounded-full"></div>
    <div className="h-7 w-28 bg-neutral-100 rounded-full"></div>
    <div className="flex-1"></div>
    <div className="h-7 w-48 bg-neutral-100 rounded"></div>
  </div>
);


const TableHeader = () => (
  <div className="h-10 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 sticky top-0">
    <div className="w-12 h-5 bg-neutral-200 rounded"></div>
    <div className="w-48 h-5 bg-neutral-200 rounded ml-4"></div>
    <div className="w-40 h-5 bg-neutral-200 rounded ml-4"></div>
    <div className="w-32 h-5 bg-neutral-200 rounded ml-4"></div>
    <div className="w-32 h-5 bg-neutral-200 rounded ml-4"></div>
    <div className="w-24 h-5 bg-neutral-200 rounded ml-4"></div>
    <div className="flex-1"></div>
    <div className="w-20 h-5 bg-neutral-200 rounded"></div>
  </div>
);


const TableRow = () => (
  <div className="h-14 border-b border-neutral-100 flex items-center px-4 hover:bg-neutral-50">
    <div className="w-12 h-5 bg-neutral-200 rounded"></div>
    <div className="w-48 h-5 bg-neutral-100 rounded ml-4"></div>
    <div className="w-40 h-5 bg-neutral-100 rounded ml-4"></div>
    <div className="w-32 h-5 bg-neutral-100 rounded ml-4"></div>
    <div className="w-32 h-5 bg-neutral-100 rounded ml-4"></div>
    <div className="w-24 h-5 bg-neutral-200 rounded ml-4"></div>
    <div className="flex-1"></div>
    <div className="w-20 flex gap-2">
      <div className="h-6 w-6 bg-neutral-200 rounded"></div>
      <div className="h-6 w-6 bg-neutral-200 rounded"></div>
    </div>
  </div>
);


const Pagination = () => (
  <div className="h-12 border-t border-neutral-200 flex items-center justify-between px-6">
    <div className="h-5 w-32 bg-neutral-200 rounded"></div>
    <div className="flex gap-2">
      <div className="h-8 w-8 bg-neutral-100 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-100 rounded"></div>
      <div className="h-8 w-8 bg-neutral-100 rounded"></div>
      <div className="h-8 w-8 bg-neutral-100 rounded"></div>
    </div>
  </div>
);


const TableBody = () => (
  <div className="flex-1 overflow-auto">
    <div className="min-w-full">
      <TableHeader />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  </div>
);


const TableLayout = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full">
      <TopHeader />
      <FilterBar />
      <TableBody />
      <Pagination />
    </div>
  </div>
);



function Data_Table() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[6].name}/>
        <Source source={navLinks[6].source}/>
        <TableLayout />
    </div>
  )
}

export default Data_Table