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
export const makeauthenticate = async (route, body) => {
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
