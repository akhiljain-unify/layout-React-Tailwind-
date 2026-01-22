

import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'

import React from 'react';


interface PlaceholderProps {
  className?: string;
  height?: string;
  width?: string;
  bg?: string;
}

interface HeaderProps {
  className?: string;
}

interface ToolbarProps {
  tools?: number;
  selectedIndex?: number;
  className?: string;
}

interface CanvasProps {
  className?: string;
}

interface EditorPanelProps {
  toolCount?: number;
  selectedTool?: number;
  className?: string;
}

interface PropertyItem {
  bg?: string;
  content?: string;
}

interface PropertyRowProps {
  label: string;
  items: PropertyItem[];
  selectedIndex?: number;
  variant?: 'color' | 'size';
}

interface PropertiesPanelProps {
  className?: string;
}

interface EditorLayoutProps {
  toolCount?: number;
  selectedTool?: number;
}


const Placeholder: React.FC<PlaceholderProps> = ({ 
  className = "", 
  height = "h-10", 
  width = "", 
  bg = "bg-neutral-100" 
}) => (
  <div className={`${height} ${width} ${bg} rounded ${className}`}></div>
);


const Top: React.FC<HeaderProps> = ({ className = "" }) => (
  <div className={`h-14 bg-neutral-900 flex items-center px-6 gap-4 ${className}`}>
    <Placeholder height="h-8" width="w-24" bg="bg-neutral-700" />
    <Placeholder height="h-10" bg="bg-neutral-800" className="flex-1 max-w-2xl" />
    <div className="flex gap-4">
      <Placeholder height="h-8" width="w-8" bg="bg-neutral-700" />
      <Placeholder height="h-8" width="w-8" bg="bg-neutral-700" />
    </div>
  </div>
);


const Toolbar: React.FC<ToolbarProps> = ({ tools = 4, selectedIndex = 0, className = "" }) => (
  <div className={`w-20 flex flex-col gap-2 ${className}`}>
    {Array.from({ length: tools }).map((_, i) => (
      <Placeholder 
        key={i}
        height="h-20"
        bg="bg-neutral-200"
        className={i === selectedIndex ? "border-2 border-neutral-900" : ""}
      />
    ))}
  </div>
);


const Canvas: React.FC<CanvasProps> = ({ className = "" }) => (
  <div className={`flex-1 bg-neutral-100 rounded-lg ${className}`}></div>
);


const EditorPanel: React.FC<EditorPanelProps> = ({ toolCount = 4, selectedTool = 0, className = "" }) => (
  <div className={`w-1/2 p-6 flex gap-4 ${className}`}>
    <Toolbar tools={toolCount} selectedIndex={selectedTool} />
    <Canvas />
  </div>
);


const PropertyRow: React.FC<PropertyRowProps> = ({ label, items = [], selectedIndex = 0, variant = "color" }) => (
  <div className="flex flex-col gap-2">
    <Placeholder height="h-5" width={label} bg="bg-neutral-200" />
    <div className="flex gap-2">
      {items.map((item, i) => {
        const isSelected = i === selectedIndex;
        const baseClasses = variant === "color" ? "h-10 w-10 rounded" : "h-10 w-12 rounded flex items-center justify-center text-sm";
        const borderClasses = isSelected 
          ? "border-2 border-neutral-900" 
          : variant === "size" 
            ? "border border-neutral-300" 
            : "";
        
        return (
          <div 
            key={i} 
            className={`${baseClasses} ${borderClasses} ${item.bg || 'bg-neutral-100'}`}
          >
            {item.content || ""}
          </div>
        );
      })}
    </div>
  </div>
);


const PropertiesPanel: React.FC<PropertiesPanelProps> = ({ className = "" }) => {
  const colorOptions = [
    { bg: "bg-neutral-200" },
    { bg: "bg-neutral-100" },
    { bg: "bg-neutral-100" },
    { bg: "bg-neutral-100" }
  ];
  
  const sizeOptions = [
    { content: "" },
    { content: "" },
    { content: "" },
    { content: "" }
  ];
  
  return (
    <div className={`w-1/2 p-6 flex flex-col gap-4 border-l border-neutral-200 ${className}`}>
      <Placeholder height="h-4" width="w-24" bg="bg-neutral-200" />
      <Placeholder height="h-8" width="w-full" bg="bg-neutral-200" />
      <Placeholder height="h-6" width="w-48" bg="bg-neutral-100" />
      
      <div className="h-px bg-neutral-200"></div>
      
      <Placeholder height="h-10" width="w-32" bg="bg-neutral-300" />
      <Placeholder height="h-4" width="w-40" bg="bg-neutral-100" />
      
      <div className="h-px bg-neutral-200"></div>
      
      <PropertyRow 
        label="w-16" 
        items={colorOptions} 
        selectedIndex={0} 
        variant="color" 
      />
      
      <PropertyRow 
        label="w-12" 
        items={sizeOptions} 
        selectedIndex={1} 
        variant="size" 
      />
      
      <div className="flex gap-3 mt-4">
        <Placeholder height="h-12" bg="bg-neutral-900" className="flex-1" />
        <Placeholder height="h-12" width="w-12" bg="bg-neutral-200" />
      </div>
    </div>
  );
};


const EditorLayout: React.FC<EditorLayoutProps> = ({ 
  toolCount = 4, 
  selectedTool = 0 
}) => (
  <div className="flex-1 overflow-hidden">
    <div className="flex flex-col h-full">
      <Top />
      <div className="flex-1 flex overflow-auto">
        <EditorPanel toolCount={toolCount} selectedTool={selectedTool} />
        <PropertiesPanel />
      </div>
    </div>
  </div>
);


function E_commerce_PDP() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[12].name}/>
        <Source source={navLinks[12].source}/>
        <EditorLayout 
            toolCount={4}
            selectedTool={0}
        />
    </div>
  )
}

export default E_commerce_PDP