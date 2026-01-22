
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


const YouTubeTopNav = () => (
  <div className="h-14 bg-white border-b border-neutral-200 flex items-center px-6 gap-4">
    <div className="h-6 w-24 bg-neutral-900 rounded"></div>
    <div className="flex-1 max-w-xl h-10 bg-neutral-100 rounded-full mx-auto"></div>
    <div className="flex gap-4">
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
    </div>
  </div>
);


const VideoPlayer = () => (
  <div className="aspect-video bg-neutral-900 rounded-xl"></div>
);

// Channel Info Component
const ChannelInfo = () => (
  <div className="flex items-center gap-4">
    <div className="h-10 w-10 bg-neutral-300 rounded-full"></div>
    <div className="flex flex-col gap-1">
      <div className="h-4 w-32 bg-neutral-200 rounded"></div>
      <div className="h-3 w-24 bg-neutral-100 rounded"></div>
    </div>
    <div className="h-9 w-28 bg-neutral-900 rounded-full ml-4"></div>
    <div className="flex-1"></div>
    <div className="flex gap-2">
      <div className="h-9 w-24 bg-neutral-200 rounded-full"></div>
      <div className="h-9 w-20 bg-neutral-200 rounded-full"></div>
      <div className="h-9 w-9 bg-neutral-200 rounded-full"></div>
    </div>
  </div>
);


const VideoInfoSection = () => (
  <div className="py-4 flex flex-col gap-3">
    <div className="h-6 w-3/4 bg-neutral-300 rounded"></div>
    <ChannelInfo />
  </div>
);


const VideoDescription = () => (
  <div className="bg-neutral-200 rounded-xl p-4">
    <div className="h-4 w-48 bg-neutral-300 rounded mb-2"></div>
    <div className="h-4 w-full bg-neutral-300 rounded"></div>
  </div>
);


const MainVideoSection = () => (
  <div className="flex-1 flex flex-col">
    <VideoPlayer />
    <VideoInfoSection />
    <VideoDescription />
  </div>
);


const SuggestedVideoItem = () => (
  <div className="flex gap-2">
    <div className="w-40 h-24 bg-neutral-300 rounded-lg shrink-0"></div>
    <div className="flex-1 flex flex-col gap-1">
      <div className="h-4 w-full bg-neutral-200 rounded"></div>
      <div className="h-4 w-3/4 bg-neutral-200 rounded"></div>
      <div className="h-3 w-1/2 bg-neutral-100 rounded mt-1"></div>
      <div className="h-3 w-1/3 bg-neutral-100 rounded"></div>
    </div>
  </div>
);


const SuggestedVideosSidebar = () => (
  <div className="w-96 flex flex-col gap-3">
    <SuggestedVideoItem />
    <SuggestedVideoItem />
    <SuggestedVideoItem />
    <SuggestedVideoItem />
    <SuggestedVideoItem />
    <SuggestedVideoItem />
  </div>
);


const MainContent = () => (
  <div className="flex-1 flex p-6 gap-6 overflow-auto">
    <MainVideoSection />
    <SuggestedVideosSidebar />
  </div>
);


const YouTubeVideoPageLayout = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full bg-neutral-100">
      <YouTubeTopNav />
      <MainContent />
    </div>
  </div>
);


function Video_Player() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[11].name}/>
        <Source source={navLinks[11].source}/>
        <YouTubeVideoPageLayout />
       
    </div>
  )
}

export default Video_Player