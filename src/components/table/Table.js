import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from './table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const resize = event.target.dataset.resize
      console.log('start resizing to', resize)
    }
  }
}
