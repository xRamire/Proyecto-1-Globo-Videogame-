class EnergyBar {
    constructor(ctx, posX, posY, width, height, /* speedY */) {
        this.ctx = ctx

        this.pos = {
            x: posX,
            y: posY
        }

        this.size = {
            width: width,
            height: height,
            initialWidth: width
        }

        /*   // this.speed = {
          //     y: speedY
          // } */
    }

    draw() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
        this.ctx.fillStyle = "black";
    }

    // drawBackgroundBar() {
    //     this.ctx.fillStyle = "white";
    //     this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    //     this.ctx.fillStyle = "black";
    // }

    move() {
        this.pos.y += this.speed.y
    }


}

class Energy extends EnergyBar {
    constructor(ctx, posX, posY, width, height) {
        super(ctx, posX, posY, width, height)


    }


    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
        this.ctx.fillStyle = "black";
    }

    increaseEnergy() {
        if (this.size.width > this.size.initialWidth) {
            this.size.width = this.size.initialWidth
        }
    }

    decreaseEnergy() {
       if(this.size.width < 0) {
          this.size.width = 0

       }
        this.size.width -= 0.5
    }


}



// al presionar el espacio usas gas/energia y lo que hace es restar de un contador de 100 , cuando llega a 0 game over
//jump / decrease and increase  