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

  constructor () {
    this.#moodLogService = new MoodLogService()
    this.#moodLogForm = document.querySelector('mood-log-form')
    this.#savedMoodData = document.querySelector('saved-mood-data')
    this.#moodLogForm.addEventListener('createLog', (event) => {
      const mood = event.detail.mood

      this.createMoodLog(mood)
    })
  }

  createMoodLog (mood) {
    this.#moodLogService.saveMoodData(mood)
    this.#moodLogForm.classList.add('hidden')
    this.renderMoodList()
  }

  renderMoodList() {
    this.#savedMoodData.renderMoodList(this.#moodLogService.loadMoodData())
  }
}