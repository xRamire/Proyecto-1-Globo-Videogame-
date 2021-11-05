// FIXED OBSTACLE (STONE CLOUDS)

class Obstacle {
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

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.width, this.size.height)
    }

    move() {
        this.pos.y += this.speed.y
    }

}



class Plane extends Obstacle {
    constructor(ctx, posX, posY, width, height, speedY, speedX, imageName) {
        super(ctx, posX, posY, width, height, speedY, imageName)

        this.speed = {
            x: speedX,
            y: speedY
        }
    }


    // draw() {
    //     this.ctx.fillStyle = "red";
    //     this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    //     this.ctx.fillStyle = "black";
    // }

    move() {
        this.pos.y += this.speed.y
        this.pos.x += this.speed.x
    }
}




class Bird extends Obstacle {
    constructor(ctx, posX, posY, width, height, speedY, speedX, imageName) {
        super(ctx, posX, posY, width, height, speedY, imageName)

        this.speed = {
            x: speedX,
            y: speedY
        }

        this.range = 100
        this.initialPosX = posX
    }


    // draw() {
    //     this.ctx.fillStyle = "yellow";
    //     this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    //     this.ctx.fillStyle = "black";
    // }

    // move() {
    //     this.pos.y += this.speed.y
    //     this.pos.x += this.speed.x

    //     if (this.pos.x === this.pos.x + 50){
    //     this.turn()
    //     }
    // }

    move() {

        if (this.pos.x >= this.initialPosX + this.range || this.pos.x < 0 || this.pos.x + this.size.width > canvas.width) {
            this.turn()

        } else if (this.pos.x <= this.initialPosX - this.range || this.pos.x < 0 || this.pos.x + this.size.width > canvas.width) {
            this.turn()
            
        }


        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
    }

    turn() {
        this.speed.x = this.speed.x * -1
    }


}



class Gas extends Obstacle {
    constructor(ctx, posX, posY, width, height, speedY, speedX, imageName) {
        super(ctx, posX, posY, width, height, speedY, imageName)

        this.speed = {
            y: speedY,
            x: speedX
        }
    }


    // draw() {
    //     this.ctx.fillStyle = "green";
    //     this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    //     this.ctx.fillStyle = "black";
    // }


}












// DYNAMIC OBSTACLES (BIRD & PLANE)