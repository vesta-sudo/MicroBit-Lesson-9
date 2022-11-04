input.onPinPressed(TouchPin.P0, function () {
    Binary = "" + Binary + "1"
    basic.showString(Binary)
    Decimal = Decimal + 1
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Decimal)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    Binary = "" + Binary + "1"
    basic.showString(Binary)
    Decimal = Decimal + 4
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        while (!(input.pinIsPressed(TouchPin.P0))) {
            Binary = "" + Binary + "0"
            basic.showString(Binary)
            Decimal = Decimal - 4
        }
        while (!(input.pinIsPressed(TouchPin.P1))) {
            Binary = "" + Binary + "0"
            basic.showString(Binary)
            Decimal = Decimal - 2
        }
        while (!(input.pinIsPressed(TouchPin.P2))) {
            Binary = "" + Binary + "0"
            basic.showString(Binary)
            Decimal = Decimal - 1
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    Binary = "" + Binary + "1"
    basic.showString(Binary)
    Decimal = Decimal + 2
})
let Binary = ""
let Decimal = 0
Decimal = 0
Binary = ""
