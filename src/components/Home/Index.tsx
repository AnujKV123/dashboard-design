import { useState } from 'react'
import Page from './Sidebar'
import { Rightsidebar } from './Rightsidebar';

const Index = () => {
  const [isRightSidebarExpanded, setIsRightSidebarExpanded] = useState(true);
  return (
    <div className='flex flex-row w-full'>
        <div className='w-full'>
            <Page isExpanded={isRightSidebarExpanded} setIsExpanded={setIsRightSidebarExpanded} />
        </div>
        {isRightSidebarExpanded && 
        <div className='w-[20%] h-full border-l'>
            <div>
                <Rightsidebar />
            </div>
        </div>
        }
    </div>
  )
}

export default Index