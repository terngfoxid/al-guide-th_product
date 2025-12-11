export interface ShipV2{
    id?:string
    name:string
    rarity: Array<"C"|"R"|"E"|"SR"|"UR"|"PR"|"DR"|"EM"|"SRM">,
    class:string[]
    type:Array<"AE"|"AR"|"BB"|"BBV"|"BC"|"BM"|"CA"|"CB"|"CL"|"CV"|"CVL"|"DD"|"DDG"|"IX(M)"|"IX(S)"|"IX(V)"|"SS"|"SSV">,
    tag:string[]
    faction:{
        short?:string
        full?:string
        sub?:string
    }
    skins:{
        profile?:string
        chibi?:string
        name:string
        image:string
    }[]

    skill_detail:{
        skill:string[]
        retrofit:string[]
        fate_simulation:string[]
    }

    //augment
    augment?:string

    //review
    review?:string
    history?:string

    //meta showdown
    meta_showdown_armor?:string
    meta_showdown_comment?:string
    meta_showdown?:{
        skill_name?:string
        skill_detail?:string
        skill_image?:string
    }[]
    meta_showdown_team?:string[]

    //note
    aoa:{
        image?:string
        desc?:string
    }[]
    note_skill:{
        image?:string
        desc?:string
    }[]
    note:{
        image?:string
        desc?:string
    }[]

    //gear
    gear:string[]
}