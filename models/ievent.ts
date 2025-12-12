export interface IEvent {
    guide?: string
    lore?: {
        image?: string
        desc?: string
    }[]
    guideV2?: {
        image?: string
        desc?: string
    }[]
    name: string
    time: string
    _priority: number
    note?: {
        beginner: Array<string | null>,
        special: Array<string | null>,
        veteran: Array<string | null>,
        summary: Array<string | null>,
    },
    noteV2?: {
        beginner: Array<{
            image?: string
            desc?: string
        }|null>,
        special: Array<{
            image?: string
            desc?: string
        }|null>,
        veteran: Array<{
            image?: string
            desc?: string
        }|null>,
        summary: Array<{
            image?: string
            desc?: string
        }|null>,
    },
    quests: string[]
    ships?: {
        type?: string
        name: string
        image?: string
        faction_short?: string
        chibi?: string
        retrofit?:boolean
    }[]
    special?: Array<{
        blob: string
        text: string
        title: string
    } | null>,
    banner: string
    button: string
    chibi?: string
    id: string
}