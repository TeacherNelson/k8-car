radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motion.driveStraight(40)
    } else if (receivedNumber == 2) {
        motion.turnLeft(40)
    } else if (receivedNumber == 3) {
        motion.stop()
    } else if (receivedNumber == 4) {
        motion.drive(-40, -40)
    }
})
radio.setGroup(7)
basic.showIcon(IconNames.Meh)
