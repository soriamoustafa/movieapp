export function addToWatchlist(Id,type){
    const sessionId='4406ecf70a61cfbf2a101521af3736ccb7560b96'
    const accountId='21473048'
    const apiurl=`https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=15d8c826c83c70ba6082db74ea00f2fc&session_id=${sessionId}`
    const body = {
        media_type: type,
        media_id: Id,
        watchlist: true
    };
    fetch(apiurl,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(body),
    })
    .then(response=>response.json())
    .then(data=>{
        if (data.status_code === 1) {
            console.log("Movie added to watchlist!");
        } else {
            alert("Failed to add movie to watchlist.");
        }
    }).catch(error=>console.error("Error adding movie to watchlist:", error));
}