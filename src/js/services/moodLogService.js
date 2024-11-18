/**
 * The mood log service module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

export class MoodLogService {

  #moodData

  constructor () {
    this.#moodData = this.#loadMoodData()
  }

  saveMoodData (mood) {
    const newMoodData = this.#createMoodData(mood)
    this.#moodData.push(newMoodData)
    this.#setMoodData(this.#moodData)
  }

  getMoodData () {
    return this.#loadMoodData()
  }

  #loadMoodData () {
    const moodData = localStorage.getItem('moodData')
    if (!moodData) {
      return []
    }
    return JSON.parse(moodData)
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

  clearMoodData() {
    localStorage.removeItem('moodData')
    this.#moodData = []
  }
}