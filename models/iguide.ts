export interface IGuide {
    name: string
    _priority: number
    button: string,
    guideV2: {
        image?: string
        desc?: string
    }[],
    youtube: {
        url?: string
        name?: string
    }[],
    id: string
}