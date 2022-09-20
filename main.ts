input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
basic.showIcon(IconNames.Heart)
let enemy = game.createSprite(randint(0, 5), randint(0, 5))
player = game.createSprite(0, 0)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.Happy)
        game.addScore(1)
    }
})
