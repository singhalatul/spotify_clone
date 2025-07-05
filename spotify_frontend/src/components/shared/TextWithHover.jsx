
function TextWithHover({displayText,active}){
    return(
        <>
            <div className={`flex justify-start items-center cursor-pointer`}>
                <div className={`${active ? "text-white" : "text-gray-500"} text-lg hover:text-white`}>
                   {displayText}
                </div>
            </div>
        </>
    )
}

export default TextWithHover;