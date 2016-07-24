var	Vue = require('vue'),
	Vuex = require('vuex');

Vue.use(Vuex);

var store = new Vuex.Store({
	state: require('./state'),
	mutations: require('./mutations'),
	strict: true
})

module.exports = store;
