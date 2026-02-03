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




// POST route
// router.post('/teams/notification-when-removing-an-agent/service-manager/remove-user', (req, res) => {
//   const sm = req.session.data?.notificationWhenRemovingAgent?.sm;

//   if (sm === 'No') {
//     // Clear the flag if you don't want the banner on agent-details
//     req.session.data.agents = undefined;
//     res.redirect('agent-details');
//   } else {
//     // Set the flag so Nunjucks sees data['agents'] === "yes"
//     req.session.data.agents = 'yes';
//     res.redirect('agents');
//   }
// });


}
