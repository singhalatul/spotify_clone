import {useRef,useEffect} from 'react';
import { cloudname, cloudpreset } from './config';
const UploadWidget = ({setUrl,setSongFileName})=>{
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
                setUrl(result.info.secure_url);
                setSongFileName(result.info.original_filename);
            }
        })
    }, [])

    return(
        <button className=" bg-white tect-black rounded-full p-4 font-semibold"
        onClick={()=> widgetRef.current.open()}
        >Select Track</button>
    )
};

export {UploadWidget};
