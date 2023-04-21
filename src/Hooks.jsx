import { useState } from 'react'

// props must be added as a parameter in the function in order to access props!!!
export default function Hooks(props) {
    const [user, setUser] = useState({
        name: 'Gabe',
        favFood: '🍔'
    })


    let handleUser = (e) => {
        setUser({...user, name: e.target.value})
    }

    let handleFood = (e) => {
        setUser({...user, favFood: e.target.value})
    }
    
    return ( 
        <>
            <h1>{user.name} is a fan of {user.favFood}</h1> 
            <form>
                <label htmlFor="name"> user name:</label>

                <input 
                id="name"
                type="text"
                placeholder="enter name here"
                value={user.name}
                onChange={handleUser} />
                
                <label htmlFor="favFood"> fave Food:</label>

                <input 
                id="name"
                type="text"
                placeholder="enter name here"
                value={user.favFood}
                onChange={handleFood} />
            
                
            </form>
            
        </>
     );
}