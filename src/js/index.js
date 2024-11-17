import './components/log-form/index.js'
import { MainController } from './controller/mainController.js'

const bodyElement = document.querySelector('body')
const moodForm = document.createElement('mood-log-form')

bodyElement.appendChild(moodForm)

document.addEventListener('DOMContentLoaded', () => {
  new MainController()
})