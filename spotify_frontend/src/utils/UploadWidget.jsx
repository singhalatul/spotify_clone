import {useRef,useEffect} from 'react';
import { cloudname, cloudpreset } from './config';
const UploadWidget = ()=>{
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current=window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            // cloudName:'dz4ipampq',
            cloudName:`${cloudname}`,
            uploadPreset:`${cloudpreset}`,
            // sources:["local"]
        },function(error,result){
            if(!error &&result.event ==="success"){
                console.log(result.info.secure_url);
            }
        })
    }, [])

    return(
        <button className=" bg-white"
        onClick={()=> widgetRef.current.open()}
        >upload</button>
    )
};

export {UploadWidget};
