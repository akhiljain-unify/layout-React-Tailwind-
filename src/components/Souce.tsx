

function Source({source} : {source : string}) {
  return (
    <div className='h-8 border-b bg-neutral-100 border-neutral-200 flex items-center px-4 shrink-0' >
        <span className='text-xs text-neutral-500'>Source: {source}</span>
    </div>
  )
}

export default Source