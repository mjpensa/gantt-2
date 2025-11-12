/**
 * Gantt Chart Generator - Pure Vanilla JavaScript
 * Generates customizable Gantt charts from JSON configuration
 */

class GanttChartGenerator {
  constructor(config) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validates the configuration object
   */
  validateConfig() {
    if (!this.config.title) {
      throw new Error('Config must have a title');
    }
    if (!this.config.weeks || this.config.weeks < 1) {
      throw new Error('Config must specify number of weeks (>= 1)');
    }
    if (!this.config.swimlanes || !Array.isArray(this.config.swimlanes)) {
      throw new Error('Config must have swimlanes array');
    }
  }

  /**
   * Generates the complete Gantt chart HTML
   * @param {HTMLElement} container - The container element
   */
  render(container) {
    if (!container) {
      console.error('Container element not found');
      return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Add title
    const titleEl = this.createTitle();
    container.appendChild(titleEl);

    // Create the grid
    const gridEl = this.createGrid();
    container.appendChild(gridEl);
  }

  /**
   * Creates the title element
   */
  createTitle() {
    const titleEl = document.createElement('div');
    titleEl.className = 'gantt-title';
    titleEl.textContent = this.config.title;
    return titleEl;
  }

  /**
   * Creates the main grid with headers and rows
   */
  createGrid() {
    const gridEl = document.createElement('div');
    gridEl.className = 'gantt-grid';
    
    // Set grid template columns dynamically
    gridEl.style.gridTemplateColumns = `minmax(220px, 1.5fr) repeat(${this.config.weeks}, 1fr)`;

    // Add header row
    this.addHeaderRow(gridEl);

    // Add swimlanes and tasks
    this.config.swimlanes.forEach(swimlane => {
      this.addSwimlane(gridEl, swimlane);
    });

    return gridEl;
  }

  /**
   * Adds the header row (week labels)
   */
  addHeaderRow(gridEl) {
    // Empty top-left cell
    const headerLabel = document.createElement('div');
    headerLabel.className = 'gantt-header gantt-header-label';
    gridEl.appendChild(headerLabel);

    // Week headers
    const weekLabel = this.config.weekLabel || 'W';
    for (let i = 1; i <= this.config.weeks; i++) {
      const headerCell = document.createElement('div');
      headerCell.className = 'gantt-header';
      headerCell.textContent = `${weekLabel}${i}`;
      gridEl.appendChild(headerCell);
    }
  }

  /**
   * Adds a swimlane and its tasks
   */
  addSwimlane(gridEl, swimlane) {
    // Add swimlane header row
    this.addSwimlaneHeader(gridEl, swimlane.name);

    // Add tasks
    if (swimlane.tasks && Array.isArray(swimlane.tasks)) {
      swimlane.tasks.forEach(task => {
        this.addTask(gridEl, task);
      });
    }
  }

  /**
   * Adds a swimlane header row
   */
  addSwimlaneHeader(gridEl, name) {
    // Label
    const labelEl = document.createElement('div');
    labelEl.className = 'gantt-row-label swimlane';
    labelEl.textContent = name;
    gridEl.appendChild(labelEl);

    // Bar area (empty for swimlane)
    const barAreaEl = document.createElement('div');
    barAreaEl.className = 'gantt-bar-area swimlane';
    
    // Add grid cells for vertical lines
    for (let i = 1; i <= this.config.weeks; i++) {
      const cell = document.createElement('span');
      cell.setAttribute('data-col', i);
      barAreaEl.appendChild(cell);
    }

    gridEl.appendChild(barAreaEl);
  }

  /**
   * Adds a task row with bar
   */
  addTask(gridEl, task) {
    // Label
    const labelEl = document.createElement('div');
    labelEl.className = 'gantt-row-label task';
    labelEl.textContent = task.name;
    gridEl.appendChild(labelEl);

    // Bar area
    const barAreaEl = document.createElement('div');
    barAreaEl.className = 'gantt-bar-area task';

    // Add grid cells for vertical lines
    for (let i = 1; i <= this.config.weeks; i++) {
      const cell = document.createElement('span');
      cell.setAttribute('data-col', i);
      barAreaEl.appendChild(cell);
    }

    // Add the bar
    if (task.start && task.end) {
      const barEl = this.createBar(task);
      barAreaEl.appendChild(barEl);
    }

    gridEl.appendChild(barAreaEl);
  }

  /**
   * Creates a task bar element
   */
  createBar(task) {
    const barEl = document.createElement('div');
    barEl.className = 'gantt-bar';
    
    // Set color
    if (task.color) {
      barEl.setAttribute('data-color', task.color);
      
      // If custom color hex is provided in config
      if (this.config.colors && this.config.colors[task.color]) {
        barEl.style.backgroundColor = this.config.colors[task.color];
      }
    }

    // Position the bar using grid-column
    barEl.style.gridColumn = `${task.start} / ${task.end}`;

    // Optional: Add task name inside bar
    if (task.showLabel) {
      barEl.textContent = task.name;
    }

    return barEl;
  }

  /**
   * Exports the chart as PNG
   */
  exportAsPNG(containerId = 'gantt-chart-container', filename = 'gantt-chart.png') {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('Container not found for export');
      return;
    }

    // Check if html2canvas is available
    if (typeof html2canvas === 'undefined') {
      console.error('html2canvas library is not loaded');
      alert('Export functionality requires html2canvas library. Please include it in your HTML.');
      return;
    }

    html2canvas(container, {
      useCORS: true,
      logging: false
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
}

/**
 * Helper function to load and render a Gantt chart from a JSON file
 */
async function loadGanttChart(configPath, containerId = 'gantt-chart-container') {
  try {
    const response = await fetch(configPath);
    if (!response.ok) {
      throw new Error(`Failed to load config: ${response.statusText}`);
    }
    
    const config = await response.json();
    const container = document.getElementById(containerId);
    
    const chart = new GanttChartGenerator(config);
    chart.render(container);
    
    // Return the chart instance so methods can be called on it
    return chart;
  } catch (error) {
    console.error('Error loading Gantt chart:', error);
    throw error;
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GanttChartGenerator, loadGanttChart };
}
