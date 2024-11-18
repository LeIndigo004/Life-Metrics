/**
 * The main controller module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

import '../components/log-form/index.js'
import '../components/saved-mood-data/index.js'
import { MoodLogService } from "../services/moodLogService.js";
import { DiagramModule } from 'diagram-module';
import { DiagramController } from './diagramController.js';
import { UIManager } from './uiManager.js';

export class MainController {
  #moodLogService
  #diagramController
  #UIManager

  constructor () {
    this.#moodLogService = new MoodLogService()
    this.#UIManager = new UIManager(document.querySelector('mood-log-form'), document.querySelector('saved-mood-data'))
    this.#diagramController = new DiagramController(new DiagramModule('canvas-id'))

    this.#setupEventListeners()
  }

  #setupEventListeners() {
    document.getElementById('showSavedDataBtn').addEventListener('click', this.displayMoods.bind(this));
    document.getElementById('showMoodFormBtn').addEventListener('click', () => {
      this.#UIManager.showMoodForm()
      this.#UIManager.hideMoodData()
    })

    document.querySelector('mood-log-form').addEventListener('createLog', (event) => {
      const mood = event.detail.mood;
      this.createMoodLog(mood);
    });

    document.querySelector('saved-mood-data').addEventListener('deleteAllMoodData', this.confirmAndDeleteAllMoodData.bind(this));
  }

  createMoodLog (mood) {
    this.#moodLogService.saveMoodData(mood)
    this.#diagramController.updateChart(this.getSavedData())
    this.displayMoods()
  }

  displayMoods() {
    this.#UIManager.showMoodData()
    this.#UIManager.hideMoodForm()
    this.#UIManager.displayMoodData(this.getSavedData())
    this.#diagramController.updateChart(this.getSavedData())
  }

  getSavedData () {
    return this.#moodLogService.getMoodData()
  }

  confirmAndDeleteAllMoodData() {
    this.#moodLogService.clearMoodData()
  }
}