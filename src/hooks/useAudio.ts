import { useState, useEffect } from 'react'
import { type Phonetic } from '../types/types'

interface StateAudioElement {
  audio: HTMLAudioElement
  stateAudio: boolean
  toggleAudio: (stateAudio: boolean) => void
}

export function useAudio (phonetics?: Phonetic): StateAudioElement {
  const [audioElement, setAudioElement] = useState(new Audio(phonetics?.audio))
  const [stateAudio, setStateAudio] = useState(false)

  useEffect(() => {
    setAudioElement(new Audio(phonetics?.audio))
  }, [phonetics])

  return {
    audio: audioElement,
    stateAudio,
    toggleAudio: setStateAudio
  }
}
