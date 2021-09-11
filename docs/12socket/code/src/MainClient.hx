package;

import jQuery.*;
import js.Browser;
import js.html.*;

class MainClient {

	private var _messages = [];
	private var _socket : Dynamic;
	private var _inputField : InputElement;
	private var _sendButton : Dynamic;
	private var _content : Element;
	private var _inputName : InputElement ;

	public function new()
	{

		new JQuery(Browser.document).ready ( function ()
		{
			trace ("MainClient document ready!");

			init();

			new JQuery("#inputField").keyup( function (e : Dynamic)
			{
				if(e.keyCode == 13) {
					sendMessage();
				}
			});
		});
	}


	private function init() : Void
	{
		_messages   = [];
		_socket     = js.browser.SocketIo.connect('http://localhost:3700');
		_inputField = cast (Browser.document.getElementById("inputField") , InputElement);
		_sendButton = Browser.document.getElementById("sendBtn");
		_content    = Browser.document.getElementById("content");
		_inputName  = cast (Browser.document.getElementById("inputName") , InputElement);

		_socket.on('message', function (data)
		{
			if(data.message != null)
			{
				_messages.push(data);
				var html = '';

				for (i in 0 ... _messages.length)
				{
					html += '<b>' + (_messages[i].username != null ? _messages[i].username : 'Server') + ': </b>';
					html += _messages[i].message + '<br />';
				}

				_content.innerHTML = html;
			} else {
				trace("There is a problem: " + data);
			}
		});

		_sendButton.addEventListener('click',  function() {
			if(_inputName.value == "") {
				Browser.alert("Please type your name!");
			} else {
				sendMessage();
			}
		},false);
	}

	private function sendMessage():Void
	{
		var text = _inputField.value;
		_socket.emit('send', { message: text, username: _inputName.value });
		_inputField.value = "";
	}


    static public function main()
    {
        var main = new MainClient();
	}
}