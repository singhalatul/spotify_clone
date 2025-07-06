import { backendUrl } from "./config";

export const makeUnauthenticate = async (route, body) => {
 const response = await fetch(`${backendUrl}${route}` ,{
   method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
 } )
   try{
     const formattedResponse = await response.json();
     return formattedResponse;

   }  
   catch(err){
    console.log(err);
   }   
};

// const settings = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         }
//     };
//     try {
//         const fetchResponse = await fetch(`http://${location}:9000/api/sensors/`, settings);
//         const data = await fetchResponse.json();
//         return data;
//     } catch (e) {
//         return e;
//     }    