     async function fetchUsers() {
            const r= await fetch('https://jsonplaceholder.typicode.com/users',{
                method:"POST",
                headers:{
                    "accept":"application/json",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({title:'Mon premier titre'})
            })
            if (r.ok===true) {
                return r.json()
            }
            throw new Error('impossible de contacter le serveur');
        }
       fetchUsers().then(users=>console.log(users))
