requirejs(
	["dom-access", "populate-songs", "get-more-songs"],
	function(access, populate, more){

		populate.querySongs();
		songs = populate.getSongs();
		for (var i = 0; i <songs.length; i++) {
		   var songName = songs[i].name;
		   var songArtist = songs[i].artist;
		   var songAlbum = songs[i].album;
		   var songsText = '<div class="song-name">' + "<h3>" + songName + '</h3>' + '<p>' + songArtist + " | " + songAlbum + "</p>" + '<button id="deleteButton">Delete</button>' + "</div>";
		   $("#more").before(songsText);
 		}
	

		access.getMoreButton().click(function(){
			more.querySongs();
			songs = more.getSongs();
				for (var i = 0; i <songs.length; i++) {
			   var songName = songs[i].name;
			   var songArtist = songs[i].artist;
			   var songAlbum = songs[i].album;
			   var songsText = '<div class="song-name">' + "<h3>" + songName + '</h3>' + '<p>' + songArtist + " | " + songAlbum + "</p>" + '<button id="deleteButton">Delete</button>' + "</div>";
			   $("#more").before(songsText);
	 		}
		});
	//sarah said delete button goes here before final close tags
		$(document).on('click', '#deleteButton', function(){
			$(this).parent().remove();
		});
});

