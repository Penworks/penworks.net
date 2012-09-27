function twitterCallback(twitters) {
	var statusHTML = [];
	for (var i=0; i<twitters.length; i++){
		var username = twitters[i].user.screen_name;
		var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
		  return '<a href="'+url+'">'+url+'</a>';
		}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
		  return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
		}).replace(/\B#([_a-z0-9]+)/ig, function(hashtag) {
		   return '<a href="http://twitter.com/search?q=%23'+hashtag.substring(1)+'" class="hashtag">'+hashtag+'</a>';
		 });
		statusHTML.push('<li><span>'+status+'</span> <a style="font-size:75%" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a> &raquo; <a style="font-size:75%" href="http://twitter.com/?status=@'+username+'%20&in_reply_to_status_id='+twitters[i].id_str+'&in_reply_to='+username+'">reply me</a></li>');
	}
	document.getElementById('twitter_update_list').innerHTML = statusHTML.join('');
}