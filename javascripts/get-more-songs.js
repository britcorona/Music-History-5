define(function() {
  var songs = [];

  return {
    querySongs: function() {

			$.ajax({
				url: "secondsongs.json",
				async: false
				}).done(function(data){
					songs = data.songs;
			});

    },
    getSongs: function() {
      return songs;
    }
  };
});