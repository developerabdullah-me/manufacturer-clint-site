const { useState, useEffect } = require("react")

const UseToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {
        // console.log('data inside useer', user);
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://parse-and-co.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token]
}

export default UseToken