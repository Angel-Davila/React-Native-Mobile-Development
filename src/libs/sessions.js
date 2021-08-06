import URLS from './url'
import Storage from './storage'

class UserSession {
  static instance = new UserSession()

    login = async body => {
        try {
        let request = await fetch(`${URLS.users_url}/users/login/`, {
            method:'POST',
            headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
            },
            body: JSON.stringify(body),
        })
        let response = await request.json()
        try {
            let key = `token-${response.user.username}`
            await Storage.instance.store(key, response.token)
            key = `id-${response.user.username}`
            await Storage.instance.store(key, JSON.stringify(response.user.id))
            return true
        } catch (error) {
            return response
        }
        } catch (error) {
        throw Error(error)
        }
    }

    logout = async () => {
        try {
        const allkeys = await Storage.instance.getAllKeys()
        const tokens = allkeys.filter(key => key.includes('token-'))
        await Storage.instance.multiRemove(tokens)
        const ids = allkeys.filter(key => key.includes('id-'))
        await Storage.instance.multiRemove(ids)
        console.log(allkeys)
        return true
        } catch (error) {
        console.log('Logout error', error)
        return false
        }
    }

    
    signup = async body => {
        try {
            let request = await fetch(`${URLS.users_url}/users/signup/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify(body),
            },
          );
          let response = await request.json();
          if (typeof response.username == 'string') {
            return response.username;
          } else {
            return response;
          }
        } catch (err) {
          console.log('signup err', err);
          throw Error(err);
        }
      };


    getUser = async () => {
        try {
        let request = await fetch(`${URLS.users_url}/users/login/`, {
            method:'POST',
            headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
            },
            body: JSON.stringify(body),
        })
        } catch(error) {
        console.log('Get user data error', error)
        }
    }

    getToken = async username => {
        try {
        const key = `token-${username}`
        return await Storage.instance.get(key)
        } catch (error) {
        console.log('getToken error', error)
        }
    }
    

    editProfile = async (id, token, body) => {
        console.log(body);
        try{
            let request = await fetch (`${URLS.users_url}/profile/${id}/`, {
                method: 'PATCH',
                headers:{
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Token ${token}`,
                },
                body: body,
            });
            let response = await request
            return response;
        }catch(err){
            console.log('Edit profile error', err);
        }
    };
}
    
    
    export default UserSession;


