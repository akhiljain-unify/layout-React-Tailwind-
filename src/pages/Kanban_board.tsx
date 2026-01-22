
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'

const Top = () => (
  <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
    <div className="h-6 w-48 bg-neutral-200 rounded"></div>
    <div className="flex-1"></div>
    <div className="flex -space-x-2">
      <div className="h-8 w-8 bg-neutral-300 rounded-full border-2 border-white"></div>
      <div className="h-8 w-8 bg-neutral-300 rounded-full border-2 border-white"></div>
      <div className="h-8 w-8 bg-neutral-300 rounded-full border-2 border-white"></div>
      <div className="h-8 w-8 bg-neutral-300 rounded-full border-2 border-white"></div>
    </div>
    <div className="h-8 w-24 bg-neutral-100 rounded"></div>
  </div>
);

const Card = () => (
  <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col gap-2">
    <div className="h-4 w-full bg-neutral-200 rounded"></div>
    <div className="h-4 w-3/4 bg-neutral-100 rounded"></div>
    <div className="flex justify-between items-center mt-2">
      <div className="flex gap-1">
        <div className="h-5 w-12 bg-neutral-200 rounded"></div>
      </div>
      <div className="h-6 w-6 bg-neutral-200 rounded-full"></div>
    </div>
  </div>
);

const Column = ({ cardCount = 3 }) => (
  <div className="w-72 shrink-0 bg-neutral-200 rounded-xl p-3 flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <div className="h-5 w-24 bg-neutral-400 rounded"></div>
      <div className="h-5 w-6 bg-neutral-400 rounded"></div>
    </div>
    <div className="flex-1 flex flex-col gap-2">
      {Array.from({ length: cardCount }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
    <div className="h-8 w-full bg-neutral-300 rounded mt-2"></div>
  </div>
);

const Board = () => (
  <div className="flex-1 p-6 flex gap-4 overflow-x-auto bg-neutral-100">
    <Column cardCount={3} />
    <Column cardCount={4} />
    <Column cardCount={2} />
    <Column cardCount={3} />
    <Column cardCount={3} />
  </div>
);

const KanbanLayout = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full">
      <Top />
      <Board />
    </div>
  </div>
);




function Kanban_Board() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[7].name}/>
        <Source source={navLinks[7].source}/>
        <KanbanLayout />
        
    </div>
  )
}

export default Kanban_Board