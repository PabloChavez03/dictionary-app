import { type WordProperties } from '../types/types'

export function adapterApi (results: WordProperties): WordProperties {
  return {
    word: results?.word,
    phonetic: results.phonetic,
    phonetics: results.phonetics?.map((phonetic) => ({
      text: phonetic.text,
      audio: phonetic.audio,
      sourceUrl: phonetic.sourceUrl,
      license: phonetic.license
    })),
    meanings: results.meanings?.map((meaning) => ({
      partOfSpeech: meaning.partOfSpeech,
      definitions: meaning.definitions.map((definition) => ({
        definition: definition.definition,
        example: definition.example,
        synonyms: definition.synonyms
      })),
      synonyms: meaning.synonyms,
      antonyms: meaning.antonyms
    })),
    license: results.license,
    sourceUrls: results.sourceUrls
  }
}
