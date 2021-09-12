/**
 * Eksperimentere med github hyppig commit
 * 
 * Oppgave 3
 * 
 * Lag et program som kontinuerlig "blinker" hjerteikonet av og på.
 */
basic.forever(function () {
    music.ringTone(175)
    basic.pause(100)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(9000)
})
