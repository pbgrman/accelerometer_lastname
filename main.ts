basic.forever(function () {
    if (input.acceleration(Dimension.X) < -500) {
        basic.showArrow(ArrowNames.North)
    } else if (input.acceleration(Dimension.X) > 500) {
        basic.showArrow(ArrowNames.South)
    } else if (input.acceleration(Dimension.X) < -500) {
        basic.showArrow(ArrowNames.West)
    } else if (input.acceleration(Dimension.X) > 500) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.clearScreen()
    }
})
