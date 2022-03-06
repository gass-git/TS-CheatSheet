export class Rainbow {
  public colors: string[]
  public width: string
  public lifeSpan: number // in seconds

  constructor() {
    this.colors = ['yellow', 'blue', 'red']
    this.width = '10km'
    this.lifeSpan = Math.floor(Math.random() * 3600)
  }

  getColors() {
    return console.log(`colors: ${this.colors[0]} ${this.colors[1]} ${this.colors[2]}`)
  }

  getWidth() {
    return console.log(`${this.width}`)
  }
}