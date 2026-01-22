
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'

import React from 'react';

interface EmailItemProps {
  selected?: boolean;
}

const EmailItem: React.FC<EmailItemProps> = ({ selected = false }) => (
  <div className={`p-3 rounded-lg border ${selected ? 'border-neutral-900 bg-neutral-100' : 'border-neutral-200'}`}>
    <div className="flex items-center gap-2 mb-2">
      <div className="h-4 w-4 bg-neutral-300 rounded"></div>
      <div className="h-4 w-4 bg-neutral-200 rounded"></div>
      <div className="h-4 flex-1 bg-neutral-200 rounded"></div>
    </div>
    <div className="h-3 w-3/4 bg-neutral-100 rounded"></div>
  </div>
);

const LeftSidebar: React.FC = () => (
  <div className="w-72 border-r border-neutral-200 flex flex-col">
    <div className="h-14 border-b border-neutral-200 flex items-center px-4">
      <div className="h-6 w-32 bg-neutral-200 rounded"></div>
    </div>
    <div className="p-4">
      <div className="h-10 bg-neutral-900 rounded mb-4"></div>
    </div>
    <div className="flex-1 p-4 pt-0 flex flex-col gap-2 overflow-auto">
      <EmailItem />
      <EmailItem selected />
      <EmailItem />
      <EmailItem />
      <EmailItem />
    </div>
  </div>
);

const MainContent: React.FC = () => (
  <div className="flex-1 flex flex-col bg-neutral-100">
    <div className="h-14 bg-white border-b border-neutral-200 flex items-center justify-center gap-4">
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-8 w-8 bg-neutral-900 rounded"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
    </div>
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <div className="h-6 w-3/4 bg-neutral-200 rounded mb-6"></div>
        <div className="flex flex-col gap-4">
          <div className="h-12 bg-neutral-100 rounded"></div>
          <div className="h-12 bg-neutral-100 rounded"></div>
          <div className="flex gap-3 mt-4">
            <div className="h-10 flex-1 bg-neutral-200 rounded"></div>
            <div className="h-10 flex-1 bg-neutral-900 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface ToggleRowProps {
  active?: boolean;
  labelWidth: string;
}

const ToggleRow: React.FC<ToggleRowProps> = ({ active = false, labelWidth }) => (
  <div className="flex items-center justify-between">
    <div className={`h-4 ${labelWidth} bg-neutral-200 rounded`}></div>
    <div className={`h-6 w-10 ${active ? 'bg-neutral-900' : 'bg-neutral-300'} rounded-full`}></div>
  </div>
);

const RightSidebar: React.FC = () => (
  <div className="w-72 border-l border-neutral-200 flex flex-col">
    <div className="h-14 border-b border-neutral-200 flex items-center px-4">
      <div className="h-5 w-24 bg-neutral-200 rounded"></div>
    </div>
    <div className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="h-4 w-16 bg-neutral-200 rounded"></div>
        <div className="h-10 bg-neutral-100 rounded"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-20 bg-neutral-200 rounded"></div>
        <div className="h-10 bg-neutral-100 rounded"></div>
      </div>
      <ToggleRow labelWidth="w-20" />
      <ToggleRow labelWidth="w-24" active />
    </div>
  </div>
);

const EmailComposeLayout: React.FC = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex h-full">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  </div>
);




function Form_Builder() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[0].name}/>
        <Source source={navLinks[0].source}/>
        <EmailComposeLayout />
        
    </div>
  )
}

export default Form_Builder