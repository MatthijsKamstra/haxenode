package ;

import slack.*;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Slack Incoming Webhooks Example");

		var webhookURL = "https://hooks.slack.com/services/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";
		var slack = new Webhook(webhookURL);

		var payload : Webhook.Payload = { 
			text : "another test",
			icon_emoji : ":8ball:",
			username : "3cpo"

		};
		slack.send(payload); 		
	}

    static public function main()
    {
        var main = new Main();
	}
}