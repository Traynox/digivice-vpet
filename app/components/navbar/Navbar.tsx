
import React from 'react'
import styles from '../../../public/css/Navbar.module.css'
import {navbarData} from './navbarData'
import  Item  from './Item'
import { useSelector, useDispatch } from 'react-redux'
import { setTabActive } from '../../redux/store/slices/uiSlice';
import type { RootState } from '../../redux/store/store'
import { setHungry, setHappiness,setDiscipline } from '../../redux/store/slices/vpetSlice'
import {stats} from './../../utils/vpet'
import { getAudioSound } from '../../utils/sounds'

const Navbar = () => {

    const {tabActive,tabType} = useSelector((state: RootState) => state.ui)
    const {add} = stats;
    const id_sound = 'sound_transition'
    const dispatch = useDispatch()
  
    const handleClick = (index:number) => {
   
     dispatch(setTabActive(index));
      switch (index) {
        case 1:
          dispatch(setHungry(add.hungry));
          break;
        case 2:
          dispatch(setHappiness(add.happiness));
          break;
        case 3:
          dispatch(setDiscipline(add.discipline));
          break;
       
         
        
        default:
          break;
      }
      
   
    }
  
  return (
    <nav className={`${styles.box}  ${styles['mobile-menu']} `}>
    <div className={`${styles.navigation} `}>
        <ul>
           {navbarData.map((item,index)=>(
            
               <Item key={index} isActive={tabActive===(index+1)} useclick={() => handleClick((index+1))} classText={item.icon} text={item.text} />
           )) }
           
        </ul>
      
    </div>
    </nav>
  )
}

export default Navbar;
