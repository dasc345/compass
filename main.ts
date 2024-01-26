bluetooth.startMagnetometerService()
bluetooth.startLEDService()
let degrees = input.compassHeading()
basic.showString("COMPASS")
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    if (true || degrees > 315) {
        basic.showString("" + (degrees < 45))
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
    degrees = 0
})
