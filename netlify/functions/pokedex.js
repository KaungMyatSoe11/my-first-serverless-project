const fetch=require('node-fetch')

exports.handler=async function(event,context)
{
    const bodyevent=JSON.parse(event.body)
    const Apilink='https://pokeapi.co/api/v2/pokedex/'+bodyevent.region

    const res=await fetch(Apilink);
    const data=await res.json();

    return{
        statusCode:200,
        body:JSON.stringify(
            {
                pokemon:data.pokemon_entries
            }
        )
    }
}