/**
 * The mood-log-form web component module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
  #container {
  display: flex;
  justify-content: center;
  align-items: center;
}

  h2 {
    font-size: 24px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #364A60;
  }

  input {
    display: block;
    padding: 15px;
    border-radius: 10px;
    font-family:inherit;
    font-size: 16px;
    border: 2px solid #8594A6;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  input:hover {
    background-color: #fafafa;
    border: 2px solid #3E4658;
  }

</style>
  <h2>How are you feeling today? (Rate from 1-10)</h2>
   <form id="logForm">
    <div id="container">
      <input type="number" id="mood" min="1" max="10" required>
    </div>
   </form>

`

customElements.define('mood-log-form',

  class extends HTMLElement {

    #moodInput;

    #form;

    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#moodInput = this.shadowRoot.getElementById('mood')
      this.#form = this.shadowRoot.getElementById('logForm')
    }

    connectedCallback() {
      this.#form.addEventListener('keydown', this.#handleSubmitEvent.bind(this))
    }

    disconnectedCallback() {
      this.#form.removeEventListener('keydown', this.#handleSubmitEvent.bind(this))
    }

    getUserMoodInput() {
      return this.#validateMoodNumber(parseInt(this.#moodInput.value, 10))
    }

    #handleSubmitEvent(event) {
      try {
        if (event.key === 'Enter') {
          event.preventDefault()
          const mood = this.getUserMoodInput()
          this.dispatchEvent(new CustomEvent('createLog', { detail: { mood } }))
        }
      } catch (error) {
        console.error(error.message)
      }
    }

    #validateMoodNumber(mood) {
      if (this.#isMoodNotValidNumber(mood)) {
        throw new Error('Mood must be a number between 1 and 10.')
      }
      return mood
    }

    #isMoodNotValidNumber(mood) {
      return isNaN(mood) || mood < 1 || mood > 10
    }
  }
)
