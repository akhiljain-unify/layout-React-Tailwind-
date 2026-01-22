
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


const TopNav = () => (
  <div className="flex items-center gap-6">
    <div className="h-8 w-24 bg-neutral-300 rounded"></div>
    <div className="h-12 flex-1 max-w-2xl bg-neutral-100 rounded-full border border-neutral-300"></div>
    <div className="flex-1"></div>
    <div className="h-8 w-8 bg-neutral-200 rounded"></div>
    <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
  </div>
);


const TabNav = () => (
  <div className="flex gap-6 mt-4 ml-32">
    <div className="h-5 w-12 bg-neutral-900 rounded"></div>
    <div className="h-5 w-16 bg-neutral-200 rounded"></div>
    <div className="h-5 w-14 bg-neutral-200 rounded"></div>
    <div className="h-5 w-12 bg-neutral-200 rounded"></div>
    <div className="h-5 w-10 bg-neutral-200 rounded"></div>
  </div>
);


const Head = () => (
  <div className="border-b border-neutral-200 px-6 py-4">
    <TopNav />
    <TabNav />
  </div>
);


const EmailItem = () => (
  <div className="mb-8">
    <div className="h-3 w-64 bg-neutral-100 rounded mb-1"></div>
    <div className="h-5 w-96 bg-neutral-300 rounded mb-2"></div>
    <div className="h-4 w-full bg-neutral-100 rounded mb-1"></div>
    <div className="h-4 w-3/4 bg-neutral-100 rounded"></div>
  </div>
);


const EmailList = () => (
  <div className="max-w-2xl ml-32">
    <div className="h-4 w-48 bg-neutral-200 rounded mb-6"></div>
    <EmailItem />
    <EmailItem />
    <EmailItem />
    <EmailItem />
    <EmailItem />
  </div>
);


const ContentArea = () => (
  <div className="flex-1 overflow-auto px-6 py-4">
    <EmailList />
  </div>
);


const InboxLayout = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full">
      <Head />
      <ContentArea />
    </div>
  </div>
);


function Search_Result() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[10].name}/>
        <Source source={navLinks[10].source}/>
        <InboxLayout />
    </div>
  )
}

export default Search_Result