import React,{useState, useEffect} from 'react';

import musica from "../../public/bensound-buddy.mp3"

import comSomBranco from '../../public/com-som-branco.png'
import semSomBranco from '../../public/sem-som-branco.png'

const useAudio = musica => {
  const [audio] = useState(new Audio(musica));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = () => {
const [playing, toggle] = useAudio(musica);

  return (
      <a onClick={toggle}>{playing ? <img src={comSomBranco} style={{padding:"1em"}}/> : <img src={semSomBranco} style={{padding:"1em"}}/>}</a>
  );
};

export default Music;