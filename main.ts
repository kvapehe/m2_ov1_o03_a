input.onButtonPressed(Button.A, function () {
    t2 = t2 * 1.5
})
input.onButtonPressed(Button.B, function () {
    t2 = t2 / 1.5
})
let t2 = 0
let t0 = 0
let t1 = 20
t2 = 200
/**
 * Eksperimentere med github hyppig commit
 * 
 * Oppgave 3
 * 
 * Lag et program som kontinuerlig "blinker" hjerteikonet av og på
 * 
 * Vil prøve å lage et "ekte hjerte" med annen sekvens og lyd. Muligens noe slikt i oppg 4, men får se. https://www.youtube.com/watch?v=SVqU5YeKfEM
 * 
 * Knapp A reduserer hjerterytmen med faktor 1.5 for hvert trykk.
 * 
 * Knapp B øker hjerterytmen med faktor 1.5 for hvert trykk.
 * 
 * A+B kan nullstille, men blir ikke brukt.
 * 
 * Vurdere å teste med tilt slik at vannrett = ok hjerterytme, mens loddrett framover er hurtig og bakover er "Game over"...
 * 
 * Lyden går da over til EKG kontinuerlig lyd (irriterende som bare det, men gøy ide.
 * 
 * Noe for en annen oppgave
 */
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    music.ringTone(262)
    basic.pause(70)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(t1)
    basic.showIcon(IconNames.Heart)
    music.ringTone(262)
    basic.pause(100)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(t2)
})
