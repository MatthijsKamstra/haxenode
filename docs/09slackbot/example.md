# Example incoming webhooks

https://api.slack.com/incoming-webhooks

## How to start

Create a folder named **foobar** (please use a better name; any name will do) and create folders **bin** and **src**.
See example below:

```
+ foobar
	+ bin
	+ src
		+ slack
			- Webhook.hx
		- Main.hx
	- javascript.hxml
```

## Install

check out [the installation](installation.md).

## The Main.hx

Open your favorite editor, copy/paste the code and save it in the `src` folder.

```haxe
package;

import slack.*;

class Main {
	function new() {
		trace("Slack Incoming Webhooks Example");

		var webhookURL = "https://hooks.slack.com/services/USE/YOUR/CODE/HERE";
		var slack = new Webhook(webhookURL);

		var payload:Webhook.Payload = {
			text: "another test",
			icon_emoji: ":8ball:",
			username: "3cpo"
		};
		slack.send(payload);
	}

	static public function main() {
		var main = new Main();
	}
}
```

Create a folder named `slack` into the `src` folder

Copy and save document in folder `src/slack` with the name `Webhook.hx`

```haxe
package slack;

import js.Node;
import js.npm.Request;

class Webhook {
	// source: https://api.slack.com/incoming-webhooks
	private var _url:String;

	public function new(url:String) {
		_url = url;
	}

	public function send(payload:Payload):Void {
		var request:Request = Request.construct();

		var option = {
			url: _url,
			body: haxe.Json.stringify(payload)
		};

		request.post(option, function(error, response, body) {
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


```

## The Haxe build file, javascript.hxml

Copy and past the following lines in a document named `javascript.hxml`
This is the short version, you want to chech out the full version open this [file](/code/javascript.hxml);

```
# // javascript.hxml
-lib js-kit
-lib hxnodejs
-cp src
-main Main
-js bin/example.js
-cmd node bin/example.js
```

## Build js with Haxe and start Node

To finish and see what we have, build the file and see the result

1. Open your terminal
2. `cd ` to the correct folder where you have saved the `javascript.hxml`
3. type `haxe javascript.hxml`
4. press enter
