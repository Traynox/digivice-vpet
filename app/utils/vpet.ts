
import styles from './../../public/css/Digivice.module.css' // buscar si es recomedable usar import de css en logica
import {vpet} from './../types/types'
import { Dispatch } from 'redux'
import { setName } from '../redux/store/slices/vpetSlice';
import { setIsLoading } from '../redux/store/slices/uiSlice';

export const stats={
          add: { happiness:10, discipline:10, hungry:20 }, 
          down: { happiness:5, discipline:10, hungry:10 }
        }

export const evolucion = (element_id:string, name:string, dispatch: Dispatch) => {
      
    try {
       
        const vpet_screen = document.getElementById(element_id) as HTMLDivElement | null; 
       

        if(vpet_screen){

            dispatch(setIsLoading(true));
            vpet_screen.classList.remove(styles['character-fadeIn']);
            vpet_screen.classList.add(styles['character-fadeOut']);  
           
            setTimeout(() => {
            
              vpet_screen.classList.remove(styles['character-fadeOut']);
             
              dispatch(setName(name));
            
              vpet_screen.classList.add(styles['character-fadeIn']);
             
            }, 3500)
              setTimeout(() => {
      
              dispatch(setIsLoading(false));
            }, 5500)
            
        }else{
            console.warn(`Div element with ID "${element_id}" not found.`);
        }   
    } catch (error) {
        console.error('Error retrieving audio element:', error);
        return null;
      }
}

export const setMood = (state:vpet) =>{

    let newMood= ''
    const rules = [
        { condition: state.discipline >= 80, moodState: 'stressed' },
        { condition: state.happiness <= 35, moodState: 'sad' },
        { condition: state.discipline <= 35, moodState: 'lazy' },
        { condition: state.hungry <= 35, moodState: 'hungry' },
        { condition: state.happiness <= 20 && state.discipline >= 80 && state.hungry < 40, moodState: 'stressed' },
        { condition: state.happiness >= 40 && state.hungry >= 40 && state.discipline < 80, moodState: 'happy' },
        
      ];
      
      for (const cond of rules) {
        if (cond.condition) {
          newMood = cond.moodState;
          break; // Terminar la evaluación en cuanto se cumpla una condición
        }
      }
      
     
   return newMood;
}