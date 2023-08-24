
  // para que la prop sea opcional usar?
export type props={
    classText?: string,
    textTitle?: string,
    text?: string,
    id?:string,
    isActive?:boolean,
    useclick?:() => void,
  }

  export  type progressBarProps={
    atribute: number
  }

 export  interface menu {
    isLoading: boolean
    tabActive: number
    tabType: 'digivice' | 'info' | 'attributes'
    isMobile: boolean
    isFirstInteraction: boolean
 }

  export interface vpet {
    name?: string;
    happiness: number; // un valor entre 0 y 100
    discipline: number; // un valor entre 0 y 100
    hungry: number; // un valor entre 0 y 100
    mood?: string; // puede ser "alegre", "triste", "enojado", etc.
    age: number;
}