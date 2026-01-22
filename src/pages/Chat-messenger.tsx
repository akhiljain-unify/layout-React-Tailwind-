
import Header from '../components/Header'
import navLinks from '../config/navLinks'
import Source from '../components/Souce'


function ChatItem({active = false} : {active? :boolean}){
    return(
    <div className={`h-16 flex items-center gap-3 px-4 ${active? "bg-neutral-100": "hover:bg-neutral-50"}`}>
        <div className="h-10 w-10 bg-neutral-300 rounded-full shrink-0"></div>
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex justify-between">
                <div className="h-4 w-24 bg-neutral-200 rounded"></div>
                <div className="h-3 w-10 bg-neutral-200 rounded"></div>
            </div>
            <div className="h-3 w-full bg-neutral-100 rounded"></div>
        </div>
    </div>)
} 

function MessageReceived(){
    return (
        <div className="flex gap-3">
            <div className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></div>
            <div className="max-w-md bg-neutral-100 rounded-2xl rounded-tl-none p-4">
                <div className="h-4 w-64 bg-neutral-200 rounded"></div>
            </div>
        </div>
    )
}

function MessageSent(){
    return(
        <div className="flex gap-3 self-end">
            <div className="max-w-md bg-neutral-900 rounded-2xl rounded-tr-none p-4">
                <div className="h-4 w-48 bg-neutral-700 rounded">
                </div>
                <div className="h-4 w-32 bg-neutral-700 rounded mt-2">
                </div>
            </div>
        </div>
    )
}

function ChatMessenger() {

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
        <Header par={navLinks[8].name}/>
        <Source source={navLinks[8].source}/>
        <div className="flex-1 overflow-hidden flex h-full">

            <div className="w-64 border-r border-neutral-200 flex- flex-col">
                <div className="h-14 border-b border-neutral-200 flex items-center px-4">
                    <div className="h-8 flex-1 bg-neutral-100 rounded"></div>
                </div>

                <div className="flex flex-col overflow-auto flex-1">
                    {[...Array(8)].map((_,idx) => {
                        return (
                            <ChatItem key={idx} active = {idx == 0}/>
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-3">
                    <div className="h-10 w-10 bg-neutral-200 rounded-full"></div>
                    <div className="flex flex-col gap-1">
                        <div className="h-5 w-32 bg-neutral-200 rounded"></div>
                        <div className="h-3 w-20 bg-neutral-200 rounded"></div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="h-8 w-8 bg-neutral-100 rounded"></div>
                    <div className="h-8 w-8 bg-neutral-100 rounded"></div>
                    <div className="h-8 w-8 bg-neutral-100 rounded"></div>
                </div>

                <div className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
                    <MessageReceived/>

                    <MessageSent/>

                    <MessageReceived/>

                    <MessageSent/>
                </div>

                <div className="input-area">
                    <div className="attachment-button"></div>
                    <div className="message-input"></div>
                    <div className="send-button"></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ChatMessenger