export class TableSelection {
  constructor() {
    this.group = []
  }

  select($el) {
    this.group.push($el)
    $el.addCalss('selected')
  }

  selectGroup() {}
}
