function getEndpoint() {
	return self.registration.pushManager.getSubscription()
		.then(function(subscription) {
			if (subscription) {
				return subscription.endpoint;
			}

			throw new Error('User not subscribed');
		});
}

self.addEventListener("push", function(event){

	if (event.data) {
		var payload = event.data.json();
		event.waitUntil(
			self.registration.showNotification("New Mail", {
				body: payload.message,
				data: payload,
				icon: './mail_256x256.png',
				vibrate: [300, 100, 300]
			})
		)
	}else{
		event.waitUntil(
			getEndpoint()
			.then(function(endpoint) {
				return fetch('__APIENDPOINT__/read/getPayload?endpoint=' + endpoint, {mode: 'cors'});
			})
			.then(function(response) {
				return response.json();
			}).then(function(payload) {
				return self.registration.showNotification("New Mail", {
					body: payload.message,
					data: payload,
					icon: './mail_256x256.png',
					vibrate: [300, 100, 300]
				})
			})
		)
	}

});

self.addEventListener('notificationclick', function(event) {
	var data = event.notification.data;
	event.notification.close();
	event.waitUntil(clients.matchAll({
		type: "window"
	}).then(function(clientList) {
		if (!!data.accountId) {
			for (var i = 0; i < clientList.length; i++) {
				var client = clientList[i];
				if (client.url == '__SITEURL__/accounts/' + data.accountId && 'focus' in client)
					return client.focus();
	    	}
			if (clients.openWindow) {
				return clients.openWindow('__SITEURL__/accounts/' + data.accountId);
			}
		}
	}));
});
