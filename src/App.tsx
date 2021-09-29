import { useEffect, useState } from 'react';




import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


interface SidebarProps{
  handleClickButton: Function,
  selectedGenreId : number
}

export function App() {

 
    
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [sidebarProps, setSidebarProps] = useState<SidebarProps>({} as SidebarProps);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  useEffect(()=>{
    setSidebarProps({
      handleClickButton: handleClickButton,
      selectedGenreId : selectedGenreId
    })
  }, [selectedGenreId])
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     <SideBar {...sidebarProps}/>
     <Content {...{selectedGenreId: selectedGenreId}}/>
     
    </div>
  )
}