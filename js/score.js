class Score {
  constructor(ctx, posX, posY) {
    this.ctx = ctx
    this.pos = {
      x: posX,
      y: posY
    }
    this.score = 0
  }

  draw(framesCounter) {
    this.ctx.font = '48px sans-serif';
    this.ctx.fillText(this.score + " m ", this.pos.x, this.pos.y);

    this.increaseScore(framesCounter)
  }

  increaseScore(framesCounter) {
    if (framesCounter % 40 === 0) {
      this.score++
    }
  }
}