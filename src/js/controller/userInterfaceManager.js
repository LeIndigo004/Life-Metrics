/**
 * The ui manager module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

export class UIManager {
  #moodLogForm
  #savedMoodData

  constructor(moodLogForm, savedMoodData) {
    this.#moodLogForm = moodLogForm;
    this.#savedMoodData = savedMoodData;
  }

  showMoodForm() {
    this.#moodLogForm.style.display = 'block';
  }

  hideMoodForm() {
    this.#moodLogForm.style.display = 'none';
  }

  showMoodData() {
    this.#savedMoodData.style.display = 'block';
  }

  hideMoodData() {
    this.#savedMoodData.style.display = 'none';
  }

  displayMoodData(moodData) {
    this.#savedMoodData.displayMoodData(moodData);
  }
}