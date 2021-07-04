const BASE_URL = 'https://cybernadero-heroku.herokuapp.com/'

class Http {
    static instant = new Http();

    get_all = async () => {
        try {
            let request = await fetch(`${BASE_URL}/all/`);
            let response = await request.json();
            return response;
        }catch(error){
            console.log('http get method error', error);
            throw Error(error);
        }
    };

    get = async badgeId =>{
        try {
            let request = await fetch(`${BASE_URL}/_id:${badgeId}/`);
            let request = await fetch(${BASE_URL}/_id:${badgeId}/);
            let response = await request.json();
            return response;
        }catch(error){
            console.log('http get method error', error);
            throw Error(error);
        }
    };
    
    post = async badge =>{
        try {
            let request = await fetch(`${BASE_URL}/new/`,{
                method: 'POST',
                body: JSON.stringify(badge),
            });            
            let response = await request.json();
            return response;
        }catch(error){
            console.log('http post method error', error);
            throw Error(error);
        }
    };
    
    put = async (badgeId, body) =>{
        try {
            let request = await fetch(`${BASE_URL}/_id:${badgeId}/`, {           
                method: 'PUT',
                body: JSON.stringify(body)
            });            
            let response = await request.json();
            return response;
        }catch(error){
            console.log('http put method error', error);
            throw Error(error);
        }
    };

    remove = async badgeId =>{
        try {
            let request = await fetch(`${BASE_URL}/_id:${badgeId}/`, {           
                method: 'DELETE',
            });            
            let response = await request.json();
            return response;
        }catch(error){
            console.log('http delete method error', error);
            throw Error(error);
        }
    };
}

export default Http;

