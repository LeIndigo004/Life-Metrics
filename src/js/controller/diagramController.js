/**
 * The diagram controller module.
 *
 * @author Leia Lindberg <ll224np@student.lnu.se>
 * @version 1.0.0
 */

export class DiagramController {
  #diagramModule

  constructor(diagramModule) {
    this.#diagramModule = diagramModule;
  }

  updateChart(moodData) {
    this.#diagramModule.clear();
    const labels = {
      yTitle: 'Mood Rating',
      xTitle: 'Date',
      maxValueForY: 10,
      numOfYLabels: 10,
    };
    this.#diagramModule.setSize(1200, 800);
    this.#diagramModule.createLineChart(moodData, labels);
  }
}
