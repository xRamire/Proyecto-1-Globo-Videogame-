class Player {
    constructor(ctx, posX, posY, width, height, speedY, imageName) {
        this.ctx = ctx

        this.pos = {
            x: posX,
            y: posY,
            initialY: posY
        }

        this.size = {
            width: width,
            height: height
        }

        this.speed = {
            y: speedY,
            x: speedY,
            yGravity: 2
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

        this.pos.x > 0 ? this.pos.x -= this.speed.x : null
    }

    moveRight() {

        this.pos.x < canvas.width - this.size.width ? this.pos.x += this.speed.x : null //deberia ser canvasSize - player.width
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.width, this.size.height)
    }

    moveGravity() {

        if (this.pos.y < this.pos.initialY) {
            this.pos.y += this.speed.yGravity
            //this.speed.yGravity + 2
        }
    }




    jump() {
        //Si estás en el suelo saltas!
        if (this.pos.y > 0){
            this.pos.y -= this.speed.y
        }
        
        

        //this.speed.y = -10
    }

    // movePlayerFall() {
    //     //Si no estás en el suelo cada vez caes más rápido
    //     if (this.pos.y < this.pos.initialY) {
    //         this.pos.y += this.speed.y
    //         this.speed.y += 0.6
    //     }

    //     // this.speed.y += this.physics.gravity
    // }



}