scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    let mySprite: Sprite = null
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    info.setLife(Animales)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
let Animales: Sprite = null
Animales.setImage(assets.image`pato`)
