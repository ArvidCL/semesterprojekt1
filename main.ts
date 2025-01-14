function DefineRooms (RoomToDefine: number[], XCol: number, XRow: number, StartCol: number, StartRow: number) {
    for (let index = 0; index <= XCol - 1; index++) {
        for (let index2 = 0; index2 <= XRow - 1; index2++) {
            RoomToDefine.push(StartCol + index)
            RoomToDefine.push(StartRow + index2)
        }
    }
}
function SetFunctions () {
    Stue = []
    Soveværelse = []
    Badeværelse = []
    Køkken = []
    Vaskerum = []
    Gang = []
}
let Gang: number[] = []
let Vaskerum: number[] = []
let Køkken: number[] = []
let Badeværelse: number[] = []
let Soveværelse: number[] = []
let Stue: number[] = []
tiles.setCurrentTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
SetFunctions()
DefineRooms(Stue, 8, 11, 17, 7)
DefineRooms(Soveværelse, 7, 6, 3, 7)
DefineRooms(Badeværelse, 7, 4, 3, 14)
DefineRooms(Køkken, 13, 4, 3, 2)
DefineRooms(Vaskerum, 8, 4, 17, 2)
DefineRooms(Gang, 5, 11, 11, 7)
