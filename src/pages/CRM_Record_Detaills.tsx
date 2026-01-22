
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'

const SkeletonBox = ({ className = '' }) => (
  <div className={`bg-neutral-200 rounded ${className}`}></div>
);

const SkeletonCircle = ({ className = '' }) => (
  <div className={`bg-neutral-200 rounded-full ${className}`}></div>
);

const Button = ({ variant = 'light', className = '' }) => {
  const baseClass = 'h-8 w-20 rounded';
  const variantClass = variant === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100';
  return <div className={`${baseClass} ${variantClass} ${className}`}></div>;
};

const FieldRow = ({ labelWidth = 'w-24', valueWidth = 'w-40' }) => (
  <div className="flex justify-between py-2 border-b border-neutral-100">
    <SkeletonBox className={`h-4 ${labelWidth}`} />
    <div className={`h-4 ${valueWidth} bg-neutral-100 rounded`}></div>
  </div>
);

const FieldSection = ({ title = 'w-32', rows = 4 }) => (
  <div className="flex flex-col gap-4">
    <SkeletonBox className={`h-6 ${title}`} />
    {Array.from({ length: rows }).map((_, i) => (
      <FieldRow key={i} />
    ))}
  </div>
);

const ActivityItem = () => (
  <div className="p-3 bg-neutral-50 rounded-lg flex gap-3">
    <SkeletonCircle className="h-8 w-8 shrink-0" />
    <div className="flex-1 flex flex-col gap-1">
      <SkeletonBox className="h-4 w-full" />
      <div className="h-3 w-20 bg-neutral-100 rounded"></div>
    </div>
  </div>
);

const TabButton = ({ active = false, width = 'w-16' }) => (
  <SkeletonBox className={`h-5 ${width} ${active ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
);

function CRM_Record_Details() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>

      <Header par={navLinks[5].name}/>
      <Source source={navLinks[5].source}/>
      
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
            <SkeletonCircle className="h-8 w-8" />
            <SkeletonBox className="h-6 w-48" />
            <div className="flex-1"></div>
            <Button variant="light" />
            <Button variant="dark" />
          </div>

          <div className="bg-neutral-100 p-6 border-b border-neutral-200">
            <div className="flex gap-6">
              <div className="h-20 w-20 bg-neutral-300 rounded-full"></div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-8 w-64 bg-neutral-300 rounded"></div>
                <SkeletonBox className="h-5 w-96" />
                <div className="flex gap-4 mt-2">
                  <div className="h-8 w-28 bg-white rounded border border-neutral-300"></div>
                  <div className="h-8 w-28 bg-white rounded border border-neutral-300"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="flex-1 flex flex-col">
              <div className="h-12 border-b border-neutral-200 flex items-center px-6 gap-6">
                <TabButton active={true} />
                <TabButton />
                <TabButton />
                <TabButton />
              </div>

              <div className="flex-1 p-6 overflow-auto">
                <div className="grid grid-cols-2 gap-6">
                  <FieldSection />
                  <FieldSection />
                </div>
              </div>
            </div>

            <div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
              <SkeletonBox className="h-6 w-24" />
              <ActivityItem />
              <ActivityItem />
              <ActivityItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRM_Record_Details;

