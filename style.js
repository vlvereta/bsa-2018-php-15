var app = new Vue ({
	el: '#app',
	data: {
		newUser: [],
		curUser: [],
		ediUser: [],
		showSearchResult: false,
		searchForm: {
			query: '',
			byName: true
		},
		users: [
			{
				name: 'Vlad', email: 'vlad@example.com', photo: 'images/vlad.jpg'
			},
			{
				name: 'Alex', email: 'alex@example.com', photo: 'images/alex.jpg'
			},
			{
				name: 'Kate', email: 'kate@example.com', photo: 'images/kate.jpg'
			},
			{
				name: 'Sean', email: 'sean@example.com', photo: 'images/sean.jpg'
			},
			{
				name: 'Lucy', email: 'lucy@example.com', photo: 'images/lucy.jpg'
			}
		]
	},
	computed: {
		userCounter: function () {
			return this.users.length;
		}
	},
	methods: {
		showPhoto: function (user) {
			return user.photo ? user.photo : 'images/no-photo.png';
		},

		addUser: function() {
			if (this.newUser.name && this.newUser.email) {
				this.users.push({
					name: this.newUser.name, email: this.newUser.email, photo: this.newUser.photo
				});
			}
			this.newUser = [];
		},

		searchUser: function () {
			var user = [];
			if (this.searchForm.byName) {
				user = this.users.find(el => el.name === this.searchForm.query);
			} else {
				user = this.users.find(el => el.email === this.searchForm.query);
			}
			if (user === undefined) {
				return false;
			}
			this.curUser = {
				id: this.users.indexOf(user), name: user.name, email: user.email, photo: user.photo
			};
			return true;
		},

		closeSearchResult: function() {
			this.curUser = [];
			this.searchForm.query = '';
			this.showSearchResult = false;
			this.searchForm.byName = true;
		},

		editUser: function (id) {
			this.ediUser = {
				id: id, name: this.users[id].name, email: this.users[id].email, photo: this.users[id].photo
			}
			this.curUser = [];
		},

		updateUser: function (id) {
			this.users[id].name = this.ediUser.name;
			this.users[id].email = this.ediUser.email;
			this.users[id].photo = this.ediUser.photo;
			this.ediUser = [];
		},

		deleteUser: function (id) {
			this.users.splice(id, 1);
		}
	}
});