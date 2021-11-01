// FIXED OBSTACLE (STONE CLOUDS)

class Obstacle {
    constructor(ctx, posX, posY, width, height, speedY) {
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
    }

    draw() {
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    }

    move() {
        this.pos.y += this.speed.y
    }
}



class Plane extends Obstacle {
    constructor(ctx, posX, posY, width, height, speedX){
        super(ctx, posX, posY, width, height)

        this.speed = {
            x: speedX
        }
    }


    draw() {
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    }

    move() {
        this.pos.x += this.speed.x
    }
}




class Bird extends Obstacle {
    constructor(ctx, posX, posY, width, height, speedY, speedX) {
        super(ctx, posX, posY, width, height)

        this.speed = {
            x: speedX,
            y: speedY
        }
    }


    draw() {
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    }

    move() {
        this.pos.y += this.speed.y
    }

}
















// DYNAMIC OBSTACLES (BIRD & PLANE)