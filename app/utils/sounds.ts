

export const getAudioSound = (text : string) =>{
  try {
    const audio = document.getElementById(text) as HTMLAudioElement | null; 
   
    if(audio){
        audio.volume=0.1;
        audio.play()
    }else{
        console.warn(`Audio element with ID "${text}" not found.`);
    }   
} catch (error) {
    console.error('Error retrieving audio element:', error);
    return null;
  }
};


