const fetch=require('node-fetch')

exports.handler=async function()
{
    const Apilink='https://pokeapi.co/api/v2/pokedex/kanto'

    const res=await fetch(Apilink);
    const data=await res.json();

    return{
        statusCode:200,
        body:JSON.stringify(data)
    }
}