 var num =1;
 function a(){
    num++
    $.ajax({
        url: " https://api.themoviedb.org/3/movie/top_rated?api_key=6f829d011cba6ac4dc2afbafd6659f29&language=en-US&page="+num+"",
        method: 'GET'
    }).done(function (d) {
        if (typeof d === 'string')
            d = JSON.parse(d);
        console.log(d);
        console.log(d['results'][0].original_title);
        
        for(let i = 0; i < d['results'].length; i++){
            var tempMovie = `<div class="col-md-3 divmovie"><h1>name: ${d['results'][i].original_title}</h1><br><h3>likes: ${d['results'][i].vote_count}</h3><br><p><strong>overview:</strong> ${d['results'][i].overview}</p></div>`;
            $('#movie').append(tempMovie);
        }
    });
 }


