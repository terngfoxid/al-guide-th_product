export interface IEvent {
    guide?: string
    name: string
    time: string
    _priority: number
    note: {
        beginner: Array<string|null>,
        special: Array<string|null>,
        veteran: Array<string|null>,
        summary: Array<string|null>,
    },
    quests: string[]
    ships: {
        type: string
        name: string
        image: string
        faction_short: string
        chibi: string
    }[]
    special: {
        blob: string
        text: string
        title: string
    }[],
    banner: string
    button: string
    chibi: string
    id: string
}