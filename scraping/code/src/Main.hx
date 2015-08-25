package ;

import js.Node;
import js.npm.Cheerio;
import js.npm.Request;

/**
 * @author Matthijs Kamstra aka [mck]
 */
class Main
{
	function new()
	{
		trace("Node.js Scraping Example");
		
		var request : Request = Request.construct();
		var url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=02888";

		request.post(url, function (error, response, body) {
			if (!error) {
				// Variables names staring with a dollar are not allowed, that is why I changed $ into _cheerio
				var _cheerio = Cheerio.load(body);
				var temperature = _cheerio("[data-variable='temperature'] .wx-value").html();

				trace("It’s " + temperature + " degrees Celsius.");
			} else {
				trace("We’ve encountered an error: " + error);
			}
		}); 		
	}

    static public function main()
    {
        var main = new Main();
	}
}