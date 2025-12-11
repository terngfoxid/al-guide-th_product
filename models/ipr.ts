export interface IPRSerie {
    serie_number: number
    id: string
    ship: IPRShip[]
}

export interface IPRShip {
    unlock: string
    blob: string
    faction_short: string
    name: string
    type: string
    quest: string[]
}