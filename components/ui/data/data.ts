export interface ICardNeeds {
    title: string,
    text: string,
    subText: string
    isImageLeft?: boolean
}
export const dataCards:ICardNeeds[]=[
    {
        title:"HOTEL XCARET MÉXICO",
        text: 'carouselData.text',
        subText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.',

    },
    {
        title:"HOTEL XCARET MÉXICO",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat.',
        subText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.',
        isImageLeft: true

    },
    {
        title:"HOTEL XCARET MÉXICO",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat.',
        subText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.',

    }
]
