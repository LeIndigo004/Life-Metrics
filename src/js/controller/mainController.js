/**
 * The main controller module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

import '../components/log-form/index.js'
import { MoodLogService } from "../services/moodLogService.js";

export class MainController {
  #moodLogService
  #moodLogForm

  constructor () {
    this.#moodLogService = new MoodLogService()
    this.#moodLogForm = document.querySelector('mood-log-form')
    this.#moodLogForm.addEventListener('createLog', (event) => {
      const mood = event.detail.mood

      this.createMoodLog(mood)
    })
  }

  createMoodLog (mood) {
    this.#moodLogService.saveMoodData(mood)
  }
}