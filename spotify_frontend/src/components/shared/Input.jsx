function Input({placeholder,label,className,value,setValue,labelClassName}){
    return(
        <>
            <div className={`flex flex-col space-y-2 w-full ${className}`}>
                <label 
                for={label}
                className={`font-semibold ${labelClassName}`}
                >{label}</label>
                <input 
                    type="text"
                    placeholder={placeholder}
                    className="bg-white p-2 border border-solid border-gray-400 rounded placeholder-gray-500 "
                    id={label}
                    value={value}
                    onChange={(e)=>{
                        setValue(e.target.value);
                    }}
                />
            </div>
        </>
    )
}

export default Input