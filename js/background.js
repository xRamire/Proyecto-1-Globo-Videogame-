class Background {
    constructor(ctx, posX, posY, width, height, speedY, imageName) {
        this.ctx = ctx

        this.pos = {
            x: posX,
            y: posY
        }

        this.size = {
            width: width,
            height: height
        }

        this.speed = {
            y: speedY
        }

        this.imageInstance = undefined
        this.imageName = imageName

        this.init()
    }

    init () {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw () {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.width, this.size.height)
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y - this.size.height, this.size.width, this.size.height)
    }

    move () {
        if (this.pos.y > this.size.height) {
            this.pos.y = 0
        }
        this.pos.y += this.speed.y
    }

    

}