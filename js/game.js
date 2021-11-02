
/// GAME LOGIC ////////////////////////////////////////////////////////////////////////

const game = {
    title: 'Globo',
    author: 'Raúl & Adrián',
    license: undefined,
    version: '1.0.0',
    desciption: 'Proyecto 1',
    canvasDOM: undefined,
    ctx: undefined,
    canvasSize: { width: undefined, height: undefined },
    framesCounter: 0,
    frames: 60,
    intervalId: undefined,
    background: undefined,
    player: undefined,
    scoreBoard: undefined,
    obstacles: [], //stoneClouds
    planes: [],
    birds: [],
    keys: {
        player: {
        }
    },



    // BASIC SETTINGS ////////////////////////////////////////////////////////////////////////

    init() {
        this.setContext()
        this.setDimension()
        this.createAll()
        this.setListeners()


        this.start()

    },

    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext("2d")

    },

    setDimension() {
        this.canvasSize.width = 600
        this.canvasSize.height = 700

        this.canvasDOM.setAttribute("width", this.canvasSize.width)
        this.canvasDOM.setAttribute("height", this.canvasSize.height)
    },

    start() {
        this.intervalId = setInterval(() => {
            this.framesCounter++

            if (this.framesCounter > 2000) {
                this.framesCounter = 0
            }

            if (this.framesCounter % 300 === 0) {
                this.createObstacle() //stoneClouds
            }

            if (this.framesCounter % 400 === 0) {
                this.createPlane() //planes
            }

            if (this.framesCounter % 300 === 0) {
                this.createBird() //bird
            }

            this.clearScreen()
            this.drawAll()
            this.moveAll()

            this.clearObstacles() //stoneClouds
            this.clearPlanes() //planes
            this.clearBirds() //birds


            if (this.isCollisionPlayer()) {
                this.gameOver()
            }

            if (this.isCollisionPlanes()) {
                this.gameOver()
            }

            if (this.isCollisionBirds()) {
                this.gameOver()
            }

        }, 1000 / this.frames)
    },




    // DRAW ////////////////////////////////////////////////////////////////////////

    drawAll() {
        this.drawBackground()
        this.drawPlayer()
        this.drawObstacles() //stoneClouds
        this.drawPlanes() //planes
        this.drawBirds() //birds
        this.player.moveGravity()
        this.drawScoreBoard() //score
        this.drawEnergyBar() //energy bar Background
        this.drawEnergy()
    },


    drawBackground() {
        this.background.draw()
    },

    drawPlayer() {
        this.player.draw()
    },

    drawObstacles() {
        this.obstacles.forEach(obs => obs.draw()) //stoneClouds
    },

    drawPlanes() {
        this.planes.forEach(obs => obs.draw()) //planes
    },

    drawBirds() {
        this.birds.forEach(obs => obs.draw()) //birds
    },

    drawScoreBoard() {
        this.scoreBoard.draw(this.framesCounter) //score
    },
    drawEnergyBar() {
        this.energyBar.draw()
    },
    drawEnergy() {
        this.energy.draw()
    },




    // MOVEMENTS ////////////////////////////////////////////////////////////////////////

    moveAll() {
        this.moveBackground()
        this.moveObstacles() //stoneClouds
        this.movePlanes() //planes
        this.moveBirds()  //birds
        this.movePlayer()
        // this.movePlayerFall() //player

    },

    moveBackground() {
        this.background.move()
    },

    moveObstacles() {
        this.obstacles.forEach(obs => obs.move()) //stoneClouds

    },

    movePlanes() {
        this.planes.forEach(obs => obs.move()) //planes

    },

    moveBirds() {
        this.birds.forEach(obs => obs.move()) //birds

    },
    // movePlayerFall() {
    //     this.player.movePlayerFall()
    // },



    // CREATE ////////////////////////////////////////////////////////////////////////

    createAll() {
        this.createBackground()
        this.createPlayer()
        this.createScoreBoard()
        this.createEnergyBar()
        this.createEnergy()

    },

    createBackground() {
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, 1, "bg.jpg")
    },

    createPlayer() {
        this.player = new Player(this.ctx, 400, this.canvasSize.height - 110, 80, 110, 10, "player.png")
    },

    createObstacle() {
        this.obstacles.push(new Obstacle(this.ctx, Math.random() * (0, 600), 0, 100, 50, 1)) //stoneClouds

    },

    createPlane() {
        this.planes.push(new Plane(this.ctx, 0 - 100, Math.random() * (0, 400), 200, 50, 1, 1))
    },

    createBird() {
        this.birds.push(new Bird(this.ctx, Math.random() * (100, 500), 0, 25, 12.5, 1, 1))
    },

    createScoreBoard() {
        this.scoreBoard = new Score(this.ctx, 30, 50) // score 
    },
    createEnergyBar() {
        this.energyBar = new EnergyBar(this.ctx, this.canvasSize.width - 330, 20, 300, 30) // Energy Bar background
    },
    createEnergy() {
        this.energy = new Energy(this.ctx, this.canvasSize.width - 325, 22.5, 290, 25) //energy /gas
    },





    movePlayer() {
        this.pressedLeft && this.player.moveLeft()
        this.pressedRight && this.player.moveRight()
        this.pressedSpace && this.player.jump()
        this.pressedSpace && this.energy.decreaseEnergy()

    },

    // TECLADO ////////////////////////////////////////////////////////////////////////

    setListeners() {
        document.onkeydown = (e) => {
            // e.key === 'ArrowLeft' && this.player.moveLeft()
            // e.key === 'ArrowRight' && this.player.moveRight()
            // e.key === " " && this.player.jump()

            e.key === 'ArrowLeft' && (this.pressedLeft = true)
            e.key === 'ArrowRight' && (this.pressedRight = true)
            e.key === " " && (this.pressedSpace = true)

            /* if (e.key === " " && (this.pressedSpace = true)) {
                this.energy.size.width-- } */
        }

        document.onkeyup = (e) => {
            // e.key === 'ArrowLeft' && this.player.moveLeft()
            // e.key === 'ArrowRight' && this.player.moveRight()
            // e.key === " " && this.player.jump()

            e.key === 'ArrowLeft' && (this.pressedLeft = false)
            e.key === 'ArrowRight' && (this.pressedRight = false)
            e.key === " " && (this.pressedSpace = false)

            /* if (e.key === " " && (this.pressedSpace = false)) {
                this.energy.size.width--} */
        }
    },


    /*
    on key down => pressed = true;
    on key up => pressed = false;

    if(pressed) => move()
    */


    // CLEAR ////////////////////////////////////////////////////////////////////////

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => { //stoneClouds
            if (obs.pos.y > 0) {
                return true
            }
        })
    },

    clearPlanes() {
        this.planes = this.planes.filter(obs => { //planes
            if (obs.pos.y > 0) {
                return true
            }
        })
    },

    clearBirds() {
        this.birds = this.birds.filter(obs => { //birds
            if (obs.pos.y > 0) {
                return true
            }
        })
    },





    // COLISIONES ////////////////////////////////////////////////////////////////////////

    isCollisionPlayer() {
        return this.obstacles.some(obs => { //stoneClouds

            return (
                this.player.pos.y + this.player.size.height > obs.pos.y && // Arriba
                this.player.pos.y < obs.pos.y + obs.size.height && // abajo
                this.player.pos.x < obs.pos.x + obs.size.width &&
                this.player.pos.x + this.player.size.width > obs.pos.x
            )
        })
    },

    isCollisionPlanes() {
        return this.planes.some(obs => { //planes

            return (
                this.player.pos.y + this.player.size.height - 3 > obs.pos.y && // Arriba
                this.player.pos.y < obs.pos.y + obs.size.height && // abajo
                this.player.pos.x < obs.pos.x + obs.size.width &&
                this.player.pos.x + this.player.size.width > obs.pos.x
            )
        })
    },

    isCollisionBirds() {
        return this.birds.some(obs => { //birds

            return (
                this.player.pos.y + this.player.size.height > obs.pos.y && // Arriba
                this.player.pos.y < obs.pos.y + obs.size.height && // abajo
                this.player.pos.x < obs.pos.x + obs.size.width &&
                this.player.pos.x + this.player.size.width > obs.pos.x
            )
        })
    },





    // GAMEOVER ////////////////////////////////////////////////////////////////////////

    gameOver() {
        clearInterval(this.intervalId)
    }





}