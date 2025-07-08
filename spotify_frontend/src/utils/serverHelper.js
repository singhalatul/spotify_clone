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
export const makeAuthenticate = async (route, body) => {
  const token = getToken();
 const response = await fetch(`${backendUrl}${route}` ,{
   method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
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
export const makeAuthenticateGet = async (route) => {
  const token = getToken();
 const response = await fetch(`${backendUrl}${route}` ,{
   method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
 } )
   try{
     const formattedResponse = await response.json();
     return formattedResponse;

   }  
   catch(err){
    console.log(err);
   }   
};

const getToken = ()=>{
  const accessToken = document.cookie.replace(
     /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
  )
  return accessToken;
};
