let player = new Image ()
let background = new Image()
player.src = './image/images.player.png'
background.src = './image/images (3).level.png'

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

let playerX = canvas.width / 3
let playerY = canvas.height / 1.5
let playerW = 50
let playerH = 50
let gravity = 9.8

let bgSpeed = 7
let bgX = 0
let jumpState = false

setInterval(()=>{
    ctx.drawImage(background, bgX, 0, canvas.width, canvas.height)
    ctx.drawImage(background, bgX + canvas.width, 0, canvas.width, canvas.height)
    ctx.drawImage(player, playerX, playerY, playerW, playerH)

    if(bgX <= canvas.width * -1){
        bgX = 0
    } else {
        bgX -= bgSpeed
    }
    if (jumpState){
        playerY -= gravity
        if (playerY <=canvas.height - playerH - 100){
            jumpState = false
        }
    } else {
        if (!(playerY >= canvas.height -playerH)){
            playerY += gravity
        }
    }
}, 30)

canvas.addEventListener('click', () =>{

    if (playerY >= canvas.height - playerH) {
        jumpState = true
    }
})