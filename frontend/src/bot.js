async function bot(input){
    const URL = `http://localhost:3000/${input}`
    try{
        const response = await fetch(URL)
        //if(response.ok){
            const data = await response.json()
            console.log(data)
            return data
        //}else{
            console.log('not')
            return 'something went wrong'
        //}
    }
    catch(err){
        console.log(err)
        return 'something went wrong'
    }
}

bot('hello world')

export default bot