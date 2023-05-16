input.onPinPressed(TouchPin.P0, function () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
    number += 1
    basic.showNumber(number)
    if (number == 10) {
        basic.showString("You Win!")
        music.playMelody("F G A F G B B C5 ", 140)
        basic.showString("Play Again")
        control.reset()
    }
})
let number = 0
number = 0
basic.showNumber(number)
basic.forever(function () {
	
})
