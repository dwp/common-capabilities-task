module.exports = router => {

// End-to-end prototype 

router.post('/end-to-end-prototype/v1/admin/select-user-admin', (req, res) => {
	if (req.session.data.endToEndPrototype.selectYourRole == 'Admin'){
		res.redirect("home-admin")
	} else if (req.session.data.endToEndPrototype.selectYourRole == 'Service manager'){
		res.redirect("../service-manager/home-service-manager")
	} else if (req.session.data.endToEndPrototype.selectYourRole == 'Team leader') {
		res.redirect("../team-leader/home-team-leader")
	} else {
		res.redirect("../agents/home-agent")
	}
})


router.post('/end-to-end-prototype/v1/service-manager/select-user-sr', (req, res) => {
	if (req.session.data.endToEndPrototype.selectYourRole.sr == 'Service manager'){
		res.redirect("home-service-manager_as_sr")
	} else if (req.session.data.endToEndPrototype.selectYourRole.sr == 'Team leader') {
		res.redirect("home-team-leader_as_sr")
	} else {
		res.redirect("home-agent_as_sr")
	}
})


router.post('/end-to-end-prototype/v1/team-leader/select-user-tl', (req, res) => {
	if (req.session.data.endToEndPrototype.selectYourRole.tlOrAg == 'team leader'){
		res.redirect("home-team-leader")
	} else {
		res.redirect("../agents/home-agent")
	}
})

// Agent

router.post('/end-to-end-prototype/v1/agents/return-to-queue', (req, res) => {
  res.redirect('agent-tasks')
})

router.post('/end-to-end-prototype/v1/agents/put-on-hold', (req, res) => {
	if (req.session.data.agent.returnTaskToQueue == 'put on hold and keep'){
		res.redirect("set-hold-date")
	} else {
		res.redirect("set-hold-date")
	}
})

router.post('/end-to-end-prototype/v1/agents/is-it-the-right-customer', (req, res) => {
	if (req.session.data.agent.isThisTheRightCustomer == 'Yes'){
		res.redirect("task-results")
	} else {
		res.redirect("find-person")
	}
})


}
