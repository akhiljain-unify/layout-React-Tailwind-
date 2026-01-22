
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


function Article({height} : {height:number}){
  return (
    <article 
    style={{height : `${height}rem`}}
    className={`bg-neutral-100 rounded border border-neutral-200`}>

    </article>
  )
}
function Column_Feed() {

  return (

    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[0].name}/>
        <Source source={navLinks[0].source}/>
        <div className="flex-1 flex overflow-hidden">
            <nav className="w-64 border-r border-neutral-200 p-4 flex flex-col justify-between">
                <ul className='flex flex-col gap-2 w-full'>
                   {[...Array(5).fill(0)].map((_,idx) => {
                    return (
                    <li className={`h-10 rounded ${idx == 0? "bg-neutral-200": "bg-neutral-100"}`}>
                    </li>)
                   })}
                </ul>
                <button className='h-12 bg-neutral-900 rounded'></button>
            </nav>
            <main className="flex-1 border-r border-neutral-200 flex flex-col">
                <section className="h-14 border-b border-neutral-200"></section>
                <section className="flex flex-col flex-1 p-4 gap-4">
                    <Article height={10}/>
                    <Article height={14}/>
                    <Article height={10}/>
                </section>
            </main>
            <aside className="flex flex-col gap-4 p-4 w-80">
                <section className='h-10 bg-neutral-100 rounded-full'></section>
                <section className='h-48 bg-neutral-100 rounded-xl'></section>
                <section className='h-64 bg-neutral-100 rounded-xl'></section>
            </aside>
        </div>
    </div>
  )
}

export default Column_Feed