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

    init () {
        this.setContext()
        this.setDimension()
        this.createAll()
        this.setListeners()
        
        this.start()

    },

    setContext () {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx =  this.canvasDOM.getContext("2d")

    },

    setDimension () {
        this.canvasSize.width = 600
        this.canvasSize.height = 700

        this.canvasDOM.setAttribute("width", this.canvasSize.width)
        this.canvasDOM.setAttribute("height", this.canvasSize.height)
    },

    start () {
        this.intervalId = setInterval(() => {
            this.framesCounter++

            if (this.framesCounter > 2000){
                this.framesCounter = 0
            }
            
            if (this.framesCounter % 200 === 0){
                this.createObstacle() //stoneClouds
            }

            this.clearScreen()
            this.drawAll()
            this.moveAll()
            this.clearObstacles() //stoneClouds

            if (this.isCollisionPlayer()){
                this.gameOver()
            }

        }, 1000 / this.frames)
    },

    drawAll () {
        this.drawBackground()
        this.drawPlayer()
        this.drawObstacles() //stoneClouds
    },

    drawBackground () {
        this.background.draw()
    },

    drawPlayer () {
        this.player.draw()
    },

    drawObstacles () {
        this.obstacles.forEach(obs => obs.draw()) //stoneClouds
    },

    moveAll () {
        this.moveBackground()
        this.moveObstacles() //stoneClouds
    },

    moveBackground () {
        this.background.move()
    },


    // CREO QUE ES PARA QUE SE MUEVA SOLO
    // movePlayer () { 
    //     this.player.move
    // },

    moveObstacles() {
        this.obstacles.forEach(obs => obs.move()) //stoneClouds
        // FALTAN LOS DINAMICOS
    },

    createAll () {
        this.createBackground()
        this.createPlayer()
    },

    createBackground () {
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, 1, "bg.jpg")
    },

    createPlayer() {
    this.player = new Player(this.ctx, 400, 500, 80, 110, 0, "player.png")
  },

    createObstacle() {
        this.obstacles.push(new Obstacle(this.ctx, Math.random() * (0, 600), 0, 100, 50, 1)) //stoneClouds
        console.log(this.obstacles) //stoneClouds
        //FALTAN LOS DINAMICOS
    },

    setListeners() {
    document.onkeydown = (e) => {
        e.key === 'ArrowLeft' ? this.player.moveLeft() : null
        e.key === 'ArrowRight' ? this.player.moveRight() : null
      }
    },

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

    gameOver() {
        clearInterval(this.intervalId)
    }





}