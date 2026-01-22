
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


interface NavLinkProps {
  width?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ width = "w-16" }) => (
  <div className={`h-6 ${width} bg-neutral-800 rounded`}></div>
);

const TopNav: React.FC = () => (
  <div className="h-14 bg-neutral-900 flex items-center px-6 gap-4">
    <div className="h-6 w-24 bg-neutral-700 rounded"></div>
    <div className="flex gap-4">
      <NavLink />
      <NavLink />
      <NavLink />
      <NavLink />
      <NavLink />
    </div>
    <div className="flex-1"></div>
    <div className="h-8 w-8 bg-neutral-700 rounded"></div>
  </div>
);

const MatchHeader: React.FC = () => (
  <div className="bg-neutral-800 p-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-neutral-600 rounded"></div>
          <div className="flex flex-col gap-1">
            <div className="h-5 w-20 bg-neutral-600 rounded"></div>
            <div className="h-8 w-32 bg-neutral-500 rounded"></div>
          </div>
        </div>
        <div className="text-center">
          <div className="h-4 w-16 bg-neutral-600 rounded mx-auto mb-2"></div>
          <div className="h-6 w-24 bg-red-500/30 rounded"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1 items-end">
            <div className="h-5 w-20 bg-neutral-600 rounded"></div>
            <div className="h-8 w-32 bg-neutral-500 rounded"></div>
          </div>
          <div className="h-12 w-12 bg-neutral-600 rounded"></div>
        </div>
      </div>
      <div className="h-5 w-72 bg-neutral-700 rounded mx-auto mt-4"></div>
    </div>
  </div>
);

interface TabProps {
  active?: boolean;
}

const Tab: React.FC<TabProps> = ({ active = false }) => (
  <div className={`h-8 w-24 ${active ? 'bg-neutral-900' : 'bg-neutral-100'} rounded`}></div>
);

interface TableRowProps {
  isHeader?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ isHeader = false }) => (
  <div className={`h-${isHeader ? '10' : '12'} flex items-center px-4 ${isHeader ? 'bg-neutral-100' : 'border-t border-neutral-100'}`}>
    <div className={`w-48 h-4 ${isHeader ? 'bg-neutral-300' : 'bg-neutral-200'} rounded`}></div>
    <div className="flex-1"></div>
    <div className={`w-12 h-4 ${isHeader ? 'bg-neutral-300' : 'bg-neutral-100'} rounded`}></div>
    <div className={`w-12 h-4 ${isHeader ? 'bg-neutral-300' : 'bg-neutral-100'} rounded ml-4`}></div>
    <div className={`w-12 h-4 ${isHeader ? 'bg-neutral-300' : 'bg-neutral-100'} rounded ml-4`}></div>
    <div className={`w-12 h-4 ${isHeader ? 'bg-neutral-300' : 'bg-neutral-100'} rounded ml-4`}></div>
  </div>
);

const MainContent: React.FC = () => (
  <div className="flex-1 p-4 flex flex-col gap-4">
    <div className="flex gap-2 border-b border-neutral-200 pb-2">
      <Tab active />
      <Tab />
      <Tab />
      <Tab />
    </div>
    <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
      <TableRow isHeader />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  </div>
);

const NewsCard: React.FC = () => (
  <div className="p-3 bg-neutral-100 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      <div className="h-5 w-12 bg-neutral-300 rounded"></div>
      <div className="h-4 w-4 bg-neutral-200 rounded"></div>
    </div>
    <div className="h-4 w-full bg-neutral-200 rounded"></div>
  </div>
);

const Sidebar: React.FC = () => (
  <div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
    <div className="h-6 w-24 bg-neutral-200 rounded"></div>
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
  </div>
);

const SportsDashboardLayout: React.FC = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full">
      <TopNav />
      <MatchHeader />
      <div className="flex-1 flex overflow-auto">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  </div>
);



function Live_Score() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[13].name}/>
        <Source source={navLinks[13].source}/>
        <SportsDashboardLayout />
       
    </div>
  )
}

export default Live_Score