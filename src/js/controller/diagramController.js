
export class DiagramController {
  #diagramModule
  #moodLogService

  constructor(diagramModule, moodLogService) {
    this.#diagramModule = diagramModule;
    this.#moodLogService = moodLogService;
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
