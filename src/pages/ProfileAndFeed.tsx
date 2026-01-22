
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'

const TopNav = () => (
  <div className="h-14 bg-white border-b border-neutral-200 flex items-center px-6 gap-4">
    <div className="h-8 w-8 bg-neutral-900 rounded"></div>
    <div className="h-10 w-64 bg-neutral-100 rounded-full"></div>
    <div className="flex-1"></div>
    <div className="flex gap-4">
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
    </div>
    <div className="h-8 w-8 bg-neutral-300 rounded-full"></div>
  </div>
);


const ProfileHeaderCard = () => (
  <div className="bg-white rounded-xl overflow-hidden border border-neutral-200">
    <div className="h-32 bg-neutral-300"></div>
    <div className="p-4 relative">
      <div className="h-24 w-24 bg-neutral-200 rounded-full border-4 border-white absolute -top-12"></div>
      <div className="ml-28 flex flex-col gap-2">
        <div className="h-6 w-48 bg-neutral-200 rounded"></div>
        <div className="h-4 w-64 bg-neutral-100 rounded"></div>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-8 w-28 bg-neutral-900 rounded"></div>
        <div className="h-8 w-28 bg-neutral-100 rounded border border-neutral-300"></div>
      </div>
    </div>
  </div>
);


const AboutCard = () => (
  <div className="bg-white rounded-xl border border-neutral-200 p-4">
    <div className="h-5 w-20 bg-neutral-200 rounded mb-3"></div>
    <div className="h-4 w-full bg-neutral-100 rounded"></div>
    <div className="h-4 w-3/4 bg-neutral-100 rounded mt-2"></div>
  </div>
);


const ActivityCard = () => (
  <div className="bg-white rounded-xl border border-neutral-200 p-4">
    <div className="h-5 w-24 bg-neutral-200 rounded mb-3"></div>
    <div className="flex gap-4">
      <div className="h-12 w-12 bg-neutral-200 rounded"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-4 w-48 bg-neutral-200 rounded"></div>
        <div className="h-3 w-32 bg-neutral-100 rounded"></div>
      </div>
    </div>
  </div>
);


const SuggestionItem = () => (
  <div className="flex gap-2 py-2">
    <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
    <div className="flex-1 flex flex-col gap-1">
      <div className="h-3 w-full bg-neutral-100 rounded"></div>
      <div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
    </div>
  </div>
);


const SuggestionsCard = () => (
  <div className="bg-white rounded-xl border border-neutral-200 p-4">
    <div className="h-5 w-32 bg-neutral-200 rounded mb-3"></div>
    <SuggestionItem />
    <SuggestionItem />
    <SuggestionItem />
  </div>
);


const TrendingCard = () => (
  <div className="bg-white rounded-xl border border-neutral-200 p-4">
    <div className="h-5 w-24 bg-neutral-200 rounded"></div>
  </div>
);


const MainColumn = () => (
  <div className="flex-1 flex flex-col gap-4">
    <ProfileHeaderCard />
    <AboutCard />
    <ActivityCard />
  </div>
);


const SidebarColumn = () => (
  <div className="w-72 flex flex-col gap-4">
    <SuggestionsCard />
    <TrendingCard />
  </div>
);


const ContentArea = () => (
  <div className="flex-1 overflow-auto">
    <div className="max-w-4xl mx-auto py-4 flex gap-4">
      <MainColumn />
      <SidebarColumn />
    </div>
  </div>
);

const ProfileLayout = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full bg-neutral-100">
      <TopNav />
      <ContentArea />
    </div>
  </div>
);


function ProfileAndFeed() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[9].name}/>
        <Source source={navLinks[9].source}/>
        <ProfileLayout />
        
    </div>
  )
}

export default ProfileAndFeed