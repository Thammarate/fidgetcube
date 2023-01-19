input.onButtonPressed(Button.A, function () {
    basic.showString("Yes!")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Thank You!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("No!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Maybe")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Sad)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Angry)
})
basic.showIcon(IconNames.Asleep)
