package slack;

import js.Node;
import js.npm.Request;

class Webhook {
	
	// source: https://api.slack.com/incoming-webhooks

	private var _url : String;


	public function new (url:String)
	{
		_url = url;
	}

	public function send(payload:Payload):Void
	{
		var request : Request = Request.construct();

		var option = {
			url: _url,
			body: haxe.Json.stringify(payload)
		};

		request.post(option, function (error, response, body) 
		{
			if (!error) {
				trace("body: " + body);
			} else {
				trace("We’ve encountered an error: " + error);
			}
		}); 
	    
	}
}

typedef Payload = {

	var text:String;
  
  	@:optional var username:String;
	@:optional var channel:String;
	@:optional var icon_url:String;
	@:optional var icon_emoji:String;
	// @:optional var attachments:String;
	@:optional var unfurl_links:String;
	@:optional var link_names:String;


}