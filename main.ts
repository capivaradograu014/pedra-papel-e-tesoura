let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 2)
    if (x == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (x == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
