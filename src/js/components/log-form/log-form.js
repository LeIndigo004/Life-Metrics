/**
 * The nickname-form web component module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.1.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>

  h2 {
    font-size: 24px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #364A60;
  }

  input {
    display: block;
    padding: 15px;
    padding-right: 100px;
    margin: 10px 0;
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
<h2>How are you feeling today?</h2>
<form id="logForm">
    <input type="number" id="mood" min="1" max="10" placeholder="Rate your mood (1-10)" required>
</form>

`

customElements.define('log-form',
  /**
   * Represents a nickname-form element.
   */
  class extends HTMLElement {
    /**
     * The user's mood input.
     */
    #moodInput;

    /**
     * The form element.
     */
    #form;

    /**
     * Handle enter key.
     */
    #handleEnter;

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#moodInput = this.shadowRoot.getElementById('mood')
      this.#form = this.shadowRoot.getElementById('logForm')
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {
      this.#form.addEventListener('keydown',
        (event) => {
          if (event.key === 'Enter') {
            event.preventDefault()
            const mood = this.userMoodInput()
            console.log(mood)
            this.dispatchEvent(new CustomEvent('createLog', { detail: { mood } }))
          }
        })
    }

    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback() {
      this.#form.removeEventListener('keydown', this.#handleEnter.bind(this))
    }

    userMoodInput() {
      return parseInt(this.#moodInput.value, 10)
    }
  }
)
