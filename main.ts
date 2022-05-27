input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . # # . .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . .
        . # # # .
        `)
    basic.pause(150)
    music.ringTone(988)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.rest(music.beat(BeatFraction.Whole))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        . # . # .
        # . # . #
        . . # . .
        `)
})
basic.showString("" + (input.temperature()))
