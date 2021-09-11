# About Socket.io

This chapter is a Haxe translation of <https://github.com/DonaldDerek/Chat-Node>

### What we primarily use are sockets.

Socket.IO enables real-time bidirectional event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.

_source: <http://socket.io/>_


This example is a combination of

1. Express (read more about that [here](../05website/exampleAdvanced.md))
2. Automation (read more about that [here](../11automation/example2.md)
3. Jade - node template system (I have not written about that, check this [site](http://jade-lang.com/))
4. JQuery (you can find info about that [here](http://matthijskamstra.github.io/haxejs/01jquery/example.html))
5. Vanilla js (you can find more info [here](http://matthijskamstra.github.io/haxejs/03vanillajs/example.html))





I have split the files in two different files, but you could combine them.


To do this add `-D client` to the `.hxml` :
```
# add the conditinal to the client code: "#if client ... #end"
-D client

# add the conditinal to the server code: "#if server ... #end"
-D server
```


----
