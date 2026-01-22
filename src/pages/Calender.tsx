import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'

interface SkeletonProps {
  width: string
  height: string
  className?: string
}

interface CalendarDateProps {
  day: number
  isToday: boolean
}

interface TimeSlotProps {
  time: string
}

interface CalendarEvent {
  top: string
  height: string
  className: string
}

interface DayColumnProps {
  day: string
  date: number
  isToday: boolean
  events?: CalendarEvent[]
}


const Skeleton: React.FC<SkeletonProps> = ({ width, height, className = "" }) => (
  <div className={`bg-neutral-200 rounded ${width} ${height} ${className}`}></div>
)

const CalendarDate: React.FC<CalendarDateProps> = ({ day, isToday }) => (
  <div
    className={`h-6 flex items-center justify-center rounded-full text-xs
      ${isToday ? "bg-neutral-900 text-white" : ""}
    `}>
    {day}
  </div>
)

const SidebarItem: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="h-3 w-3 bg-neutral-400 rounded"></div>
    <div className="h-4 flex-1 bg-neutral-100 rounded"></div>
  </div>
)

const TimeSlot: React.FC<TimeSlotProps> = ({ time }) => (
  <div className="flex-1 border-b border-neutral-100 flex items-start justify-end pr-2 pt-1">
    <span className="text-xs text-neutral-400">{time}</span>
  </div>
)

const DayColumn: React.FC<DayColumnProps> = ({ day, date, isToday, events = [] }) => (
  <div className="flex-1 border-r border-neutral-200 flex flex-col">
    <div className="h-12 border-b border-neutral-200 flex flex-col items-center justify-center">
      <span className="text-xs text-neutral-500">{day}</span>
      <span className={`text-sm ${isToday ? "bg-neutral-900 text-white w-6 h-6 rounded-full flex items-center justify-center" : ""}`}>
        {date}
      </span>
    </div>
    <div className="flex-1 relative">
      {events.map((event, idx) => (
        <div 
          key={idx}
          className={`absolute left-1 right-1 rounded text-xs p-1 ${event.className}`}
          style={{ top: event.top, height: event.height }}
        ></div>
      ))}
    </div>
  </div>
)

function Calendar() {
  const days = [
    ...Array.from({ length: 7 }, (_, i) => i + 2),
    ...Array.from({ length: 7 }, (_, i) => i + 9),
    ...Array.from({ length: 7 }, (_, i) => i + 16),
    ...Array.from({ length: 7 }, (_, i) => i + 23),
    1, 2, 3, 4, 5,
  ]

  const weekDays = ['S','M','T','W','T','F','S']
  const timeSlots = ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00']
  
  const weekColumns = [
    { day: 'Mon', date: 15, isToday: false, events: [] },
    { day: 'Tue', date: 16, isToday: false, events: [{ top: '2rem', height: '4rem', className: 'bg-neutral-200' }] },
    { day: 'Wed', date: 17, isToday: true, events: [{ top: '6rem', height: '3rem', className: 'bg-neutral-800' }] },
    { day: 'Thu', date: 18, isToday: false, events: [] },
    { day: 'Fri', date: 19, isToday: false, events: [{ top: '1rem', height: '5rem', className: 'bg-neutral-300' }] },
    { day: 'Sat', date: 20, isToday: false, events: [] },
    { day: 'Sun', date: 21, isToday: false, events: [] },
  ]

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header par={navLinks[15].name} />
      <Source source={navLinks[15].source} />
      <div className="flex h-full">
        <div className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-4">
          <Skeleton width="w-28" height="h-10" className="bg-neutral-900" />

          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {weekDays.map((val, idx) => (
              <div key={idx} className="h-6 flex items-center justify-center text-neutral-500">{val}</div>
            ))}
            {days.map((day, idx) => (
              <CalendarDate key={idx} day={day} isToday={day === 17} />
            ))}
          </div>

          <div className="h-px bg-neutral-200"></div>

          <div className="flex flex-col gap-2">
            <Skeleton width="w-20" height="h-4" />
            {[1, 2, 3].map(i => <SidebarItem key={i} />)}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="h-14 border-b border-neutral-200 flex items-center px-4 gap-4">
            <Skeleton width="w-8" height="h-8" />
            <Skeleton width="w-8" height="h-8" />
            <Skeleton width="w-32" height="h-6" />

            <div className="flex-1"></div>

            <div className="flex bg-neutral-100 rounded p-1 gap-1">
              <div className="h-7 w-16 bg-white rounded shadow-sm"></div>
              <div className="h-7 w-16 rounded"></div>
              <div className="h-7 w-16 rounded"></div>
            </div>
          </div>


          <div className="flex-1 flex">
            <div className="w-16 border-r border-neutral-200 flex flex-col">
              {timeSlots.map((time, idx) => (
                <TimeSlot key={idx} time={time} />
              ))}
            </div>

            <div className="flex-1 flex">
              {weekColumns.map((col, idx) => (
                <DayColumn key={idx} {...col} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar