module.exports = router => {

// Routes for bulk change
// it is posting to itself and after redirected to v1 or v2

router.post('/teams/notification-when-removing-an-agent/select-user', (req, res) => {
	if (req.session.data.teams.selectUser == 'Admin'){
		res.redirect("admin/home")
	} else if (req.session.data.teams.selectUser == 'Service manager') {
		res.redirect("service-manager/home")
	} else {
		res.redirect("team-leader/home")
	}
})

router.post('/teams/notification-when-removing-an-agent/service-manager/delete', (req, res) => {
	res.redirect("list-of-agents")
})

router.post('/teams/notification-when-removing-an-agent/service-manager/remove-user-v2', (req, res) => {
	res.redirect("agents")
})


// team-notification-when-removind-an-agent-from-a-team

router.post('/teams/team-notification-when-removind-an-agent-from-a-team/service-manager/remove-agent-01', (req, res) => {
	res.redirect("manage-agents")
})



}
