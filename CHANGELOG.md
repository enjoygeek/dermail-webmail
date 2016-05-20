## Changelog

05/06/2016 -> 2.7.x -> 2.8.0
1. Supports update alias. More functionalities on the way.

05/06/2016 -> 2.6.x -> 2.7.1
1. Reverting to running Socket.io with API processes.
2. Please see Dermail-API changelog for details

05/05/2016 -> 2.6.0 -> 2.6.1
1. Actually, a simple nginx trick will require no modification for existing code:
```
location /socket.io {
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header Connection "upgrade";
	proxy_http_version 1.1;
	proxy_set_header Accept-Encoding "";
	proxy_pass http://IP:1999;
}
```

05/05/2016 -> 2.5.x -> 2.6.0
1. API breaking: Socket.io no longer runs with API processes; it is now running on a single process
2. Please configure `socketEndpoint` in your `config.json`