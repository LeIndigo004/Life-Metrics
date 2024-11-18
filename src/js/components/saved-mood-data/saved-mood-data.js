/**
 * The saved mood web component module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>

  li {
    list-style: none;
    display: inline-block;
    padding: 20px
  }
 .mood {
      font-size: 20px;
      color: #364A60;
    }

 .date {
      font-size: 14px;
      color: #8594A6;
    }

    #deleteDataBtn {
      padding: 10px 20px;
      margin: 10px;
      background-color: red;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
     }
    }
</style>

  <div>
    <h2>Saved Mood Data</h2>
    <ul id="moodList"></ul>
    <button id="deleteDataBtn">Delete all data</button>
  </div>

`

customElements.define('saved-mood-data',

  class extends HTMLElement {

    #moodList
    #deleteDataBtn

    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#moodList = this.shadowRoot.getElementById('moodList')
      this.#deleteDataBtn = this.shadowRoot.getElementById('deleteDataBtn')
    }

    connectedCallback() {
      this.#deleteDataBtn.addEventListener('click', this.confirmAndDeleteAllMoodData.bind(this))
    }

    disconnectedCallback() {
      this.#deleteDataBtn.removeEventListener('click', this.confirmAndDeleteAllMoodData.bind(this))
    }

    displayMoodData(moodData) {
      this.#moodList.innerHTML = ''
      if (moodData.length === 0) {
        this.#renderNoMoodDataMessage()
      } else {
        this.#renderMoodList(moodData)
      }
    }

    #renderMoodList(moodData) {

      moodData.forEach(element => {
        const listItem = document.createElement('li')
        const moodText = document.createElement('p')
        const dateText = document.createElement('p')

        moodText.classList.add('mood')
        dateText.classList.add('date')

        moodText.textContent = `Mood: ${element.value}`
        dateText.textContent = `Date: ${new Date(element.label).toLocaleString()}`
        listItem.appendChild(moodText)
        listItem.appendChild(dateText)

        this.#moodList.appendChild(listItem)
      })
    }

    #renderNoMoodDataMessage() {
      this.#moodList.innerHTML = 'You do not have any moods saved.'
    }

    confirmAndDeleteAllMoodData() {
      if (confirm("Are you sure you want to delete all saved data?")) {

        this.dispatchEvent(new CustomEvent('deleteAllMoodData'))
      }
    }
  }
)
