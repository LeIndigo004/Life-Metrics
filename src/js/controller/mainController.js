/**
 * The main controller module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

import '../components/log-form/index.js'
import '../components/saved-mood-data/index.js'
import { MoodLogService } from "../services/moodLogService.js";

export class MainController {
  #moodLogService
  #moodLogForm
  #savedMoodData
  #savedDataButton
  #logMoodButton

  constructor () {
    this.#moodLogService = new MoodLogService()

    this.#moodLogForm = document.querySelector('mood-log-form')
    this.#savedMoodData = document.querySelector('saved-mood-data')

    this.#savedDataButton = document.getElementById('showSavedDataBtn')
    this.#logMoodButton = document.getElementById('showMoodFormBtn')

    this.#savedDataButton.addEventListener('click', this.displayMoods.bind(this))

    this.#logMoodButton.addEventListener('click', () => {
      this.#showMoodForm()
      this.#hideMoodData()
    })

    this.#moodLogForm.addEventListener('createLog', (event) => {
      const mood = event.detail.mood
      this.createMoodLog(mood)
    })

    this.#savedMoodData.addEventListener('deleteAllMoodData', this.confirmAndDeleteAllMoodData.bind(this))
  }

  createMoodLog (mood) {
    this.#moodLogService.saveMoodData(mood)
    this.displayMoods()
  }

  displayMoods() {
    this.#showMoodData()
    this.#hideMoodForm()
    this.#savedMoodData.displayMoodData(this.#moodLogService.getMoodData())
  }

  confirmAndDeleteAllMoodData() {
    this.#moodLogService.clearMoodData()
  }

  #hideMoodData () {
    this.#savedMoodData.style.display = 'none'
  }

  #hideMoodForm () {
    this.#moodLogForm.style.display = 'none'
  }

  #showMoodData () {
    this.#savedMoodData.style.display = 'block'
  }

  #showMoodForm () {
    this.#moodLogForm.style.display = 'block'
  }
}