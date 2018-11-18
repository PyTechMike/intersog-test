<template>
	<div class="dashboard-item">
		<div class="title-dash-part">
			<p class="dash-title">{{info.title}}</p>
			<p class="dash-subtitle">{{info.subtitle}}</p>
		</div>
		<div class="main-dash-part">
			<div class="main-dash-item">
				<p class="main-dash-item-title">{{info.main1.mainSubtitle}}</p>
				<p class="main-dash-item-number">{{info.main1.mainNuber}}</p>
			</div>
			<div class="main-dash-item">
				<p class="main-dash-item-title">{{info.main2.mainSubtitle}}</p>
				<p class="main-dash-item-number">{{info.main2.mainNuber}}</p>
			</div>
			<div class="main-dash-item">
				<p class="main-dash-item-title">{{info.main3.mainSubtitle}}</p>
				<p class="main-dash-item-number">{{info.main3.mainNuber}}</p>
			</div>
			<div class="main-dash-item">
				<p class="main-dash-item-title">{{info.main4.mainSubtitle}}</p>
				<p class="main-dash-item-number">{{info.main4.mainNuber}}</p>
			</div>
			<div class="main-dash-item-comments">{{info.comments}}</div>
		</div>
		<div class="menu-dash-part">
			<div class="menu-dash-hide">{{info.hideText}}</div>
			<div class="menu-dash-show-details">{{info.showDetailsText}}</div>
		</div>
    </div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			info: { 
                id: 0, 
                title: 'Random name 1',
                subtitle: 'Challenge',
                main1: {
                    mainSubtitle: 'APROVED POSTS',
                    mainNuber: '4554',
                },
                main2: {
                    mainSubtitle: 'INFLUENCERS',
                    mainNuber: '0',
                },
                main3: {
                    mainSubtitle: 'LIKES',
                    mainNuber: '45454',
                },
                main4: {
                    mainSubtitle: 'COMMENTS',
                    mainNuber: '2218',
                },
                comments: '100 % (51/51 days)',
                hideText: 'HIDE',
                showDetailsText: 'SHOW DETAILS'
            },
		}
	}
}
// <style src="./style.css"></style>
</script>

Vue.component('dashboard-item', {
  props: ['info'],
  template: `<div class="dashboard-item">
    <div class="title-dash-part">
        <p class="dash-title">{{info.title}}</p>
        <p class="dash-subtitle">{{info.subtitle}}</p>
    </div>
    <div class="main-dash-part">
        <div class="main-dash-item">
            <p class="main-dash-item-title">{{info.main1.mainSubtitle}}</p>
            <p class="main-dash-item-number">{{info.main1.mainNuber}}</p>
        </div>
        <div class="main-dash-item">
            <p class="main-dash-item-title">{{info.main2.mainSubtitle}}</p>
            <p class="main-dash-item-number">{{info.main2.mainNuber}}</p>
        </div>
        <div class="main-dash-item">
            <p class="main-dash-item-title">{{info.main3.mainSubtitle}}</p>
            <p class="main-dash-item-number">{{info.main3.mainNuber}}</p>
        </div>
        <div class="main-dash-item">
            <p class="main-dash-item-title">{{info.main4.mainSubtitle}}</p>
            <p class="main-dash-item-number">{{info.main4.mainNuber}}</p>
        </div>
        <div class="main-dash-item-comments">{{info.comments}}</div>
    </div>
    <div class="menu-dash-part">
        <div class="menu-dash-hide">{{info.hideText}}</div>
        <div class="menu-dash-show-details">{{info.showDetailsText}}</div>
    </div>
    </div>`
})

var app7 = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { 
                id: 0, 
                title: 'Random name 1',
                subtitle: 'Challenge',
                main1: {
                    mainSubtitle: 'APROVED POSTS',
                    mainNuber: '4554',
                },
                main2: {
                    mainSubtitle: 'INFLUENCERS',
                    mainNuber: '0',
                },
                main3: {
                    mainSubtitle: 'LIKES',
                    mainNuber: '45454',
                },
                main4: {
                    mainSubtitle: 'COMMENTS',
                    mainNuber: '2218',
                },
                comments: '100 % (51/51 days)',
                hideText: 'HIDE',
                showDetailsText: 'SHOW DETAILS'
            },
            { 
                id: 1, 
                title: 'Random name 2',
                subtitle: 'Challenge',
                main1: {
                    mainSubtitle: 'APROVED POSTS',
                    mainNuber: '4321',
                },
                main2: {
                    mainSubtitle: 'INFLUENCERS',
                    mainNuber: '564',
                },
                main3: {
                    mainSubtitle: 'LIKES',
                    mainNuber: '342',
                },
                main4: {
                    mainSubtitle: 'COMMENTS',
                    mainNuber: '4322',
                },
                comments: '100 % (56/41 days)',
                hideText: 'HIDE',
                showDetailsText: 'SHOW DETAILS'
            },
            { 
                id: 2, 
                title: 'Random name 3',
                subtitle: 'Challenge',
                main1: {
                    mainSubtitle: 'APROVED POSTS',
                    mainNuber: '54',
                },
                main2: {
                    mainSubtitle: 'INFLUENCERS',
                    mainNuber: '4540',
                },
                main3: {
                    mainSubtitle: 'LIKES',
                    mainNuber: '43',
                },
                main4: {
                    mainSubtitle: 'COMMENTS',
                    mainNuber: '321',
                },
                comments: '100 % (21/53 days)',
                hideText: 'HIDE',
                showDetailsText: 'SHOW DETAILS'
            },
            { 
                id: 3, 
                title: 'Random name 4',
                subtitle: 'Challenge',
                main1: {
                    mainSubtitle: 'APROVED POSTS',
                    mainNuber: '42',
                },
                main2: {
                    mainSubtitle: 'INFLUENCERS',
                    mainNuber: '432',
                },
                main3: {
                    mainSubtitle: 'LIKES',
                    mainNuber: '4332',
                },
                main4: {
                    mainSubtitle: 'COMMENTS',
                    mainNuber: '23',
                },
                comments: '100 % (3/1 days)',
                hideText: 'HIDE',
                showDetailsText: 'SHOW DETAILS'
            },
        ]
    }
})