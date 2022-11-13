import React, {FC} from 'react';
interface ICardNeeds {
    title: string,
    text: string,
    subText: string
    isImageLeft?: boolean
}
const CardXcaret: FC<ICardNeeds> = ({isImageLeft,text,title,subText}) => {
    return (
        <div
            style={{flexDirection:  isImageLeft ? 'initial' : 'row-reverse'}}
        >
            <div>
                <div>
                    //carrusel y icon arrows
                </div>
                <img src="" alt="logo"/>
                <title>{title}</title>
                <p>{text}</p>
                <p>{subText}</p>
                <button></button>
            </div>
        </div>
    );
};

export default CardXcaret;
