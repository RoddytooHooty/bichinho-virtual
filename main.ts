input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showString("Hello!")
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . . .
        . . # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showString("Socorro")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . #
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
basic.forever(function () {
    basic.pause(input.runningTime())
    basic.pause(500)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
