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
    this.#moodData.push(this.#createMoodData(mood))
    this.#trimMoodData()
    this.#setMoodData(this.#moodData)
  }

  #trimMoodData() {
    if (this.#moodData.length > 7) {
      this.#moodData.shift()
    }
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
      label: this.#formatDate(),
      value: mood
    }
  }

  #formatDate () {
    return new Date().toISOString().split('T')[0]
  }

  clearMoodData() {
    localStorage.removeItem('moodData')
    this.#moodData = []
  }
}