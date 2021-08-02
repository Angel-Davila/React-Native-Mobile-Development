import URLS from "./url";
import Storage from "./storage";

/* const BASE_URL = 'http://holi.com'

export default BASE_URL */

class UserSession {
    static instance = new UserSession();
    login = async body => {
        try{
            let request = await fetch(`${URLS.users_url}/users/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            });
            let response = request.json();
            let key = `token-${response.user.username}`;
            await Storage.instance.store(key, response.token);   
            return response.user.username;
        }catch(err){
            console.log('Login error', err)
            throw Error(err);
        }
    };

    logout = async key => {
        try{
            await Storage.instance.remove(key);
            return true;
        }catch(err){
            console.log('logout error', err);
            return false;
        }
    };

    signup = async body => {
        try{
            await fetch(`${URLS.users_url}/users/signup/`,{            
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(body),
            })
        }catch(err){
            console.log('Sign up error', err)
            throw Error(err);
        }
    };

    getToken = async key => {
        try{
            return await Storage.instance.get(key);
        }catch(err){
            console.log('Get token error', err);
        }
    };
}
export default UserSession;


