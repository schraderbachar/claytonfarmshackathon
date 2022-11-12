import React, {useContext, useState, useEffect} from 'react'
import { auth, firestore, storage} from './Firebase'

//context to do call firebase authentication function and get current user
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);

    async function signUp(email, password){
        const response = {ok: true, error: ""};
        try{
            const newUser = await auth.createUserWithEmailAndPassword(email, password);
            await firestore.collection('Users').doc(newUser.user.uid).set({
                email
            })
            await Promise.all([
                newUser.user.sendEmailVerification()
            ]);
            // await auth.signOut();
        }catch(error){
            response.ok = false;
            response.error = error.message;
        }
        return response;
    }

    async function signIn(email, password){
        const response = {ok: true, error: ""};
        try{
            const user = await auth.signInWithEmailAndPassword(email, password);
 
            setLoggedIn(true)
        }catch(error){
            await auth.signOut();
            response.ok = false;
            response.error = error.message;
        }
        return response;
    }

    async function signOut(){
        setCurrentUser(null)

        if(!loggedIn){
            return;
        }
        const response = {ok: true, error: ""};
        
        await auth.signOut()
        .catch((error) => {
            response.ok = false;
            response.error = error.message;
        })
        setLoggedIn(false)

        return response;
    }
    
    // --------------------------------------------------------------
 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user =>{
            if(user){
                setCurrentUser(user);
                setLoggedIn(true)
            }
            else{
                setCurrentUser(null);
                setLoggedIn(false)
            }
            setLoading(false);
        })
        return unsubscribe;
    }, [loggedIn, refresh]);

    const value = {
        // signUp,
        signIn,
        signOut,
    
        currentUser,
        loggedIn
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
