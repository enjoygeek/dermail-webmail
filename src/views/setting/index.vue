<template>
	<div>
		<div class="overflow-hidden bg-white rounded mb2">
			<div class="m0 p1">
				<div class="clearfix">
					<span class="btn black h5">General: </span>
				</div>
				<div class="clearfix">
					<span class="ml1 btn black h6 muted not-clickable">General functionalities such as color scheme.</span>
				</div>
			</div>
			<div class="m0 p2 border-top">
				<div class="clearfix">
					<a class="muted h6 ml1 mb1 bold btn btn-outline {{ color }}" v-link="{ name: 'settingColor' }">Color Scheme</a>
				</div>
			</div>
		</div>
		<div class="overflow-hidden bg-white rounded mb2">
			<div class="m0 p1">
				<div class="clearfix">
					<span class="btn black h5">Push Notifications: </span>
				</div>
				<div class="clearfix">
					<span class="ml1 btn black h6 muted not-clickable">Settings for push notifications.</span>
				</div>
			</div>
			<div class="m0 p2 border-top">
				<div class="clearfix">
					<a class="muted h6 ml1 mb1 bold btn btn-outline {{ color }}" v-link="{ name: 'settingPushNotification' }">Push Notification</a>
				</div>
			</div>
		</div>
		<div class="overflow-hidden bg-white rounded mb2">
			<div class="m0 p1">
				<div class="clearfix">
					<span class="btn black h5">Security: </span>
				</div>
				<div class="clearfix">
					<span class="ml1 btn black h6 muted not-clickable">Safeguarding your emails' authenticity and integrity.</span>
				</div>
			</div>
			<div class="m0 p2 border-top">
				<div class="clearfix">
					<a class="muted h6 ml1 mb1 bold btn btn-outline {{ color }}" v-link="{ name: 'settingSPFDKIMDMARC' }">SPF, DKIM, and DMARC</a>
				</div>
			</div>
		</div>
        <div class="overflow-hidden bg-white rounded mb2">
			<div class="m0 p1">
				<div class="clearfix">
					<span class="btn black h5">Spam filter: </span>
				</div>
				<div class="clearfix">
					<span class="ml1 btn black h6 muted not-clickable">You should periodically retrain Bayesian filter with new mails.</span>
				</div>
			</div>
			<div class="m0 p2 border-top">
				<div class="clearfix">
					<a class="muted h6 ml1 mb1 bold btn btn-outline {{ color }}" @click="train">Retrain</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

var getters = require('../../lib/vuex/getters.js')
var actions = require('../../lib/vuex/actions.js')

module.exports = {
	vuex: {
		getters: getters,
		actions: actions
	},
    methods: {
        train: function() {
            this.trainBayes().then(function() {
                this.alert().success('Requested.');
            })
        }
    },
	ready: function() {
		this.loading().go(100);
		this.setTitle('Settings');
	}
}
</script>
