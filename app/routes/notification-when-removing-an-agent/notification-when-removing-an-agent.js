module.exports = router => {

// Routes for bulk change
// it is posting to itself and after redirected to v1 or v2

router.post('/teams/notification-when-removing-an-agent/select-user', (req, res) => {
	if (req.session.data.teams.selectUser == 'one'){
		res.redirect("one/home")
	} else if (req.session.data.teams.selectUser == 'two') {
		res.redirect("two/home")
	} else {
		res.redirect("three/home")
	}
})

router.post('/teams/notification-when-removing-an-agent/service-manager/delete', (req, res) => {
	res.redirect("list-of-agents")
})



// 4419 new (one)
router.post('/teams/notification-when-removing-an-agent/one/remove-user-v2', (req, res) => {
  const choice = req.session.data.notificationWhenRemovingAgent?.sm

  if (choice === 'yes') {
    // set a one-time flag for showing banner on the next page
    req.session.data.removalSuccessBanner = 'yes'
    return res.redirect('/teams/notification-when-removing-an-agent/one/agents')
  }

  // user chose "no" - ensure banner doesn't show
  req.session.data.removalSuccessBanner = null
  return res.redirect('/teams/notification-when-removing-an-agent/one/agents')
})

// 4419 new (two)
router.post('/teams/notification-when-removing-an-agent/two/remove-user-v2', (req, res) => {
  const choice = req.session.data.notificationWhenRemovingAgentTwo?.sm

  if (choice === 'yes') {
    // set a one-time flag for showing banner on the next page
    req.session.data.removalSuccessBanner = 'yes'
    return res.redirect('/teams/notification-when-removing-an-agent/two/agents')
  }

  // user chose "no" - ensure banner doesn't show
  req.session.data.removalSuccessBanner = null
  return res.redirect('/teams/notification-when-removing-an-agent/two/agents')
})

// 4419 new (three)
router.post('/teams/notification-when-removing-an-agent/three/remove-user-v2', (req, res) => {
  const choice = req.session.data.notificationWhenRemovingAgentTwo?.sm

  if (choice === 'yes') {
    // set a one-time flag for showing banner on the next page
    req.session.data.removalSuccessBanner = 'yes'
    return res.redirect('/teams/notification-when-removing-an-agent/three/agents')
  }

  // user chose "no" - ensure banner doesn't show
  req.session.data.removalSuccessBanner = null
  return res.redirect('/teams/notification-when-removing-an-agent/three/agents')
})


router.post('/teams/add-agent-journey-review-4392/service-manager/question', (req, res) => {
	if (req.session.data.addAgentJourneyReview.question == 'Add agents'){
		res.redirect("add-agents")
	} else if (req.session.data.addAgentJourneyReview.question == 'View agents') {
		res.redirect("view-agents")
	} else {
		res.redirect("remove-agents")
	}
})

router.post('/teams/add-agent-journey-review-4392/service-manager/remove-oliver-logan', (req, res) => {
	res.redirect("remove-agents")
})


router.post('/teams/team-notification-when-removind-an-agent-from-a-team/service-manager/remove-agent-01', (req, res) => {
	if (req.session.data.removindAgentFromTeam.agentRemove == 'yes'){
		res.redirect("manage-agents")
	} else {
		res.redirect("manage-agents")
	}
})

router.post('/teams/team-notification-when-removind-an-agent-from-a-team/service-manager/select-journey', (req, res) => {
	if (req.session.data.teams.selectJourney == 'one'){
		res.redirect("has-tasks/home")
	} else {
		res.redirect("home")
	}
})

router.post('/teams/team-notification-when-removind-an-agent-from-a-team/service-manager/has-tasks/remove-agent-01', (req, res) => {
	if (req.session.data.removindAgentFromTeam.agentRemoveAndTasks == 'yes'){
		res.redirect("manage-agents")
	} else {
		res.redirect("manage-agents")
	}
})




}
