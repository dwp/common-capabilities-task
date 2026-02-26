module.exports = router => {

// End-to-end prototype 

router.post('/end-to-end-prototype/select-user', (req, res) => {
	if (req.session.data.endToEndPrototype.selectYourRole == 'Admin'){
		res.redirect("v1/admin/home-admin")
	} else if (req.session.data.endToEndPrototype.selectYourRole == 'Service manager'){
		res.redirect("v1/service-manager/home-service-manager")
	} else if (req.session.data.endToEndPrototype.selectYourRole == 'Team leader') {
		res.redirect("v1/team-leader/home-team-leader")
	} else {
		res.redirect("v1/agents/home-agent")
	}
})


}
