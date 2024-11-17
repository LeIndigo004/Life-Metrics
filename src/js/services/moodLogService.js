/**
 * The mood log service module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

export class MoodLogService {

  #moodData

  constructor () {
    this.#moodData = this.#loadMoodData() || []
  }

  saveMoodData (mood) {
    const newMoodData = this.#createMoodData(mood)
    this.#moodData.push(newMoodData)
    this.#setMoodData(this.#moodData)
  }

  getMoodData () {
    return [...this.#moodData]
  }

  clearMoodData () {
    this.#moodData = []
    this.#setMoodData(this.#moodData)
  }

  #loadMoodData () {
    return JSON.parse(localStorage.getItem('moodData'))
  }

  #setMoodData (moodData) {
    localStorage.setItem('moodData', JSON.stringify(moodData))
  }

  #createMoodData (mood) {
    return {
      mood: mood, 
      date: new Date().toISOString()
    }
  }
}