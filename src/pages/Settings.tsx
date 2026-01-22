
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


import React from 'react';

interface MenuItemProps {
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ active = false }) => (
  <div className={`h-10 rounded flex items-center px-3 ${active ? 'bg-neutral-200' : 'hover:bg-neutral-100'}`}>
    <div className={`h-4 w-24 rounded ${active ? 'bg-neutral-400' : 'bg-neutral-200'}`}></div>
  </div>
);

const Sidebar: React.FC = () => (
  <div className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-1">
    <div className="h-10 w-full bg-neutral-100 rounded flex items-center px-3 mb-4">
      <div className="h-4 flex-1 bg-neutral-200 rounded"></div>
    </div>
    <MenuItem active />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
  </div>
);

interface SettingRowProps {
  labelWidth: string;
  descWidth: string;
  hasToggle?: boolean;
  toggleActive?: boolean;
}

const SettingRow: React.FC<SettingRowProps> = ({ labelWidth, descWidth, hasToggle = false, toggleActive = false }) => (
  <div className="flex items-center justify-between">
    <div className="flex flex-col gap-1">
      <div className={`h-4 ${labelWidth} bg-neutral-200 rounded`}></div>
      <div className={`h-3 ${descWidth} bg-neutral-100 rounded`}></div>
    </div>
    {hasToggle ? (
      <div className={`h-6 w-12 ${toggleActive ? 'bg-neutral-900' : 'bg-neutral-300'} rounded-full`}></div>
    ) : (
      <div className="h-10 w-64 bg-neutral-100 rounded"></div>
    )}
  </div>
);

interface SettingsSectionProps {
  titleWidth: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ titleWidth, children }) => (
  <div className="flex flex-col gap-4 pb-6 border-b border-neutral-200">
    <div className={`h-5 ${titleWidth} bg-neutral-300 rounded`}></div>
    {children}
  </div>
);

const MainContent: React.FC = () => (
  <div className="flex-1 flex flex-col">
    <div className="h-14 border-b border-neutral-200 flex items-center px-6">
      <div className="h-6 w-24 bg-neutral-300 rounded"></div>
    </div>
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-2xl flex flex-col gap-6">
        <SettingsSection titleWidth="w-32">
          <SettingRow labelWidth="w-24" descWidth="w-48" />
          <SettingRow labelWidth="w-20" descWidth="w-40" />
        </SettingsSection>
        <SettingsSection titleWidth="w-28">
          <SettingRow labelWidth="w-32" descWidth="w-56" hasToggle />
          <SettingRow labelWidth="w-28" descWidth="w-48" hasToggle toggleActive />
        </SettingsSection>
        <div className="flex justify-end gap-3">
          <div className="h-10 w-24 bg-neutral-200 rounded"></div>
          <div className="h-10 w-24 bg-neutral-900 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const SettingsLayout: React.FC = () => (
  <div className="flex-1 overflow-hidden">
    <div className="flex h-full">
      <Sidebar />
      <MainContent />
    </div>
  </div>
);

function Settings() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[14].name}/>
        <Source source={navLinks[14].source}/>
        <SettingsLayout />
        
    </div>
  )
}

export default Settings