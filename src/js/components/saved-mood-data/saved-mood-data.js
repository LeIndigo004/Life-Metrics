const template = document.createElement('template')
template.innerHTML = `
<style>
 .mood {
      font-size: 20px;
      color: #364A60;
    }

    .date {
      font-size: 14px;
      color: #8594A6;
    }
  </style>

  <div>
    <h2>Saved Mood Data</h2>
    <ul id="moodList"></ul>
  </div>

`

customElements.define('saved-mood-data',

  class extends HTMLElement {

    #moodList

    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#moodList = this.shadowRoot.getElementById('moodList')
    }

    renderMoodList(moodData) {
      this.#moodList.innerHTML = ''
      moodData.forEach(element => {
        const listItem = document.createElement('li')
        const moodText = document.createElement('p')
        const dateText = document.createElement('p')

        moodText.classList.add('mood')
        dateText.classList.add('date')

        moodText.textContent = `Mood: ${element.mood}`
        dateText.textContent = `Date: ${new Date(element.date).toLocaleString()}`
        listItem.appendChild(moodText)
        listItem.appendChild(dateText)

        this.#moodList.appendChild(listItem)
      });
    }
  }
)
