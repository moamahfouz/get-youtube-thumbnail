    $("#get").click(function() {
	        var ytl = $("#youtubeLink").val();
	        var yti = ytl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
	        $("#msg").html("<h1 class\"display-6\">الصورة المصغرة للفيديو المطلوب</h1><p><a href=\"https://i3.ytimg.com/vi/" + yti[1] + "/maxresdefault.jpg\"><img src=\"https://i3.ytimg.com/vi/" + yti[1] + "/maxresdefault.jpg\" class=\"image\" /></a></p><p><img src=\"https://i3.ytimg.com/vi/" + yti[1] + "/hqdefault.jpg\" class=\"image\" /></p><h1 class\"display-6\">روابط التحميل:</h2><br /><input name=\"imageURL\" id=\"copyimageURL\" class=\"form-control\" size=\"70\" type=\"text\" value=\"https://i3.ytimg.com/vi/" + yti[1] + "/maxresdefault.jpg\" onclick=\"this.select()\" readonly /><br /><input class=\"form-control\" name=\"imageURL\" id=\"copyimageURL\" class=\"text\" size=\"70\" type=\"text\" value=\"https://i3.ytimg.com/vi/" + yti[1] + "/hqdefault.jpg\" onclick=\"this.select()\" readonly />");

	    });


	    $("#copyimageURL").click(function() {
	        $(this).select();
	    });
