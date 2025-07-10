import {Icon} from '@iconify/react';
import { Link } from 'react-router-dom';

function IconText({iconName,displayText,active,targetLink,onClick}){
    return(
        <>
        <Link to={targetLink}>
            <div className={`flex justify-start items-center cursor-pointer`} onClick={onClick}>
                <div className="px-5 py-2">
                    <Icon icon={iconName} color={`${active ? "white" :"gray"}`} fontSize={27}/>
                </div>
                <div className={`${active ? "text-white": "text-gray-400"} text-sm font-semibold hover:text-white`}>
                    {displayText}
                </div>
            </div>
        </Link>
        </>
    )
}

export default IconText