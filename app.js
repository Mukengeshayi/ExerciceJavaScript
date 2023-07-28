/**
 * creer un element HTML representant un article
 * @param {{title: string, body: string}} post 
 * @return {HTMLElement}
 */
function createArticle(post) {
    const article=document.createElement('article')
    article.innerHTML=`
       <h2>${post.title}</h2>
       <p>${post.body}</p>
    `
    return article
}

async function main(){
    const wapper= document.querySelector('#lastPosts')
    const loader=document.createElement('p')
    loader.innerHTML='Chargement...'
    wapper.append(loader)

    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts? limit=5',{
            headers:{
                Accept:'Application/json'
            }
        })
        if (!r.ok) {
            throw new Error('Erreur de serveur');
        }   
        const posts= await r.json()
        loader.remove() 
        for(let post of posts) {
            wapper.append(createArticle(post))
        }
    } catch (e) {
        loader.innerHTML='Impossible de charger ces articles'
        loader.style.color= 'red'
        return    
    }
}
main()
