function getRandInt (min, max) {
    let r = Math.round(Math.random())
    const calcul = r*(max - min) + min
    return calcul
}
