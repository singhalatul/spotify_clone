function PasswordInput({placeholder,label,className,value,setValue}){
    return(
        <>
            <div className={`flex flex-col space-y-2 w-full ${className}`}>
                <label 
                for={label}
                className="font-semibold"
                >{label}</label>
                <input 
                    type="password"
                    placeholder={placeholder}
                    className="p-2 border border-solid border-gray-400 rounded placeholder-gray-500 "
                    id={label}
                    vlaue={value}
                    onChange={(e)=>{
                        setValue(e.target.value)
                    }}
                />
            </div>
        </>
    )
}

export default  PasswordInput;