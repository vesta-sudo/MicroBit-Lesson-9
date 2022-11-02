input.onPinPressed(TouchPin.P0, function () {
    Binary = "" + Binary + "1"
    basic.showString(Binary)
    Decimal = Decimal * 2 + 1
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Decimal)
})
input.onPinPressed(TouchPin.P1, function () {
    Binary = "" + Binary + "0"
    basic.showString(Binary)
    Decimal = Decimal * 2
})
let Binary = ""
let Decimal = 0
Decimal = 0
Binary = ""
