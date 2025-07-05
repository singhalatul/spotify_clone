import {Icon} from '@iconify/react';

function IconText({iconName,displayText,active}){
    return(
        <>
            <div className={`flex justify-start items-center cursor-pointer`}>
                <div className="px-5 py-2">
                    <Icon icon={iconName} color={`${active ? "white" :"gray"}`} fontSize={27}/>
                </div>
                <div className={`${active ? "text-white": "text-gray-400"} text-sm font-semibold hover:text-white`}>
                    {displayText}
                </div>
            </div>
        </>
    )
}

export default IconText