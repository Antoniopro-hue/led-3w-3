let CONTROL = 0
led.enable(false)
CONTROL += 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
    while (CONTROL < 1020) {
        CONTROL += 1
        pins.analogWritePin(AnalogPin.P0, CONTROL)
        basic.pause(1000)
    }
    while (CONTROL > 0) {
        CONTROL += 0
        pins.analogWritePin(AnalogPin.P0, CONTROL)
        basic.pause(1000)
    }
})
