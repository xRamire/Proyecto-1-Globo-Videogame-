class Player {
    constructor(ctx, posX, posY, width, height, speedY, imageName) {
        this.ctx = ctx

        this.pos = {
            x: posX,
            y: posY,
            // initialY: posY
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


    moveLeft() {
        
        this.pos.x > 0 ? this.pos.x -= 20 : null
    }

    moveRight() {

       this.pos.x < 510 ? this.pos.x += 20 : null //deberia ser canvasSize - player.width
    }

    draw () {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.width, this.size.height)
    }























    // draw(framesCounter) {
    //     //ancho de un recorte this.imageInstance.width / this.frames
    //     this.ctx.drawImage(
    //         this.imageInstance,
    //         this.framesIndex * this.imageInstance.width / this.frames,  //inicio de recorte x
    //         0,                                                          //inicio de recorte y
    //         this.imageInstance.width / this.frames,                     //ancho de recorte
    //         this.imageInstance.height,                                  //alto de recorte
    //         this.pos.x,
    //         this.pos.y,
    //         this.size.width,
    //         this.size.height
    //     )

    //     if (framesCounter % 10 === 0) {
    //         this.animate()
    //     }
    // }

    // jump() {
    //     //Si estás en el suelo saltas!
    //     if (this.pos.y >= this.pos.initialY) {
    //         this.pos.y -= 30
    //         this.speed.y = -15
    //     }
    // }

    // move() {
    //     //Si no estás en el suelo cada vez caes más rápido
    //     if (this.pos.y < this.pos.initialY) {
    //         this.pos.y += this.speed.y
    //         this.speed.y += 0.6
    //     }
    // }



}