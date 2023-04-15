export function getCategories(){
    
    try {
        const dataCat: any = fetch('https://api.chucknorris.io/jokes/categories').then((res) => {res.json}).then(console.log(res.json))
        return dataCat 
    } catch (error) {
        console.error(error);
    }}

export function getJoke(){
    try {
        
    } catch (error) {
        
    }
}