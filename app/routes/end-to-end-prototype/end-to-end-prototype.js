module.exports = router => {

// End-to-end prototype 

router.post('/end-to-end-prototype/select-user', (req, res) => {
	if (req.session.data.endToEndPrototype.selectYourRole == 'Service manager'){
		res.redirect("service-manager/home-service-manager")
	} else if (req.session.data.endToEndPrototype.selectYourRole == 'Team leader') {
		res.redirect("team-leader/home-team-leader")
	} else {
		res.redirect("agents/home-agent")
	}
})


}
