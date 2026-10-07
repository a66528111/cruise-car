radio.onReceivedNumber(function (receivedNumber) {
    // 1：前進
    // 2：後退
    // 3：左轉
    // 4：右轉
    // 0：停止
    if (receivedNumber == 1) {
        CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.forward, 1023)
    } else if (receivedNumber == 2) {
        CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.backward, 1023)
    } else if (receivedNumber == 3) {
        CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.backward, 100)
        CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.forward, 1023)
    } else if (receivedNumber == 4) {
        CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.forward, 1023)
        CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.backward, 100)
    } else if (receivedNumber == 0) {
        CruiseE.stopAllMotor()
    }
})
// 無線電群組
radio.setGroup(255)
// 開機 LED 顯示 14
basic.showLeds(`
    # . # . #
    # . # . #
    # . # # #
    # . . . #
    # . . . #
    `)
// 車頭 LED
let strip = neopixel.create(DigitalPin.P5, 24, NeoPixelMode.RGB)
// 紫色、靛藍色交替
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(500)
})
