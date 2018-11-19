$( document ).ready( readyNow );

function addSong(){
    console.log( 'in addSong' );
    // get user input
    // package in an object
    const objectToSend = {
        artist: $( '#artistIn' ).val(),
        published: $( '#publishedIn' ).val(),
        rank: $( '#rankIn' ).val(),
        track: $( '#trackIn' ).val()
    } // end objectToSend
    console.log( 'sending:', objectToSend );
    // send to server via AJAX
    $.ajax({
        method: 'POST',
        url: '/songs',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST with:', response );
        getSongs();
    }).catch( function( err ){
        console.log( 'error wit POST:', err );
    }) //end ajax
} // end addSong

function getSongs(){
    $.ajax({
        method: 'GET',
        url: '/songs'
    }).then( function( response ){
        console.log( 'back from GET with:', response );
    }).catch( function( err ){
        console.log( 'error getting data:', err );
    })
} // end getSongs

function readyNow(){
    $( '#addSongButton' ).on( 'click', addSong );
    getSongs();
} // end readynow