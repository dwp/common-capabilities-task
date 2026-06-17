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

router.post('/end-to-end-prototype/v1/agents/set-hold-date', (req, res) => {
  if (req.body.action === 'put-on-hold') {
    req.session.data.banner = 'put-on-hold'
  }
  res.redirect('/end-to-end-prototype/v1/agents/agent-tasks')
})


router.get('/end-to-end-prototype/v1/agents/agent-tasks', (req, res) => {
  const banner = req.session.data.banner
  req.session.data.banner = null

  res.render('end-to-end-prototype/v1/agents/agent-tasks', {
    banner
  })
})

router.post('/end-to-end-prototype/v1/agents/task-benefits', (req, res) => {
  res.redirect('/end-to-end-prototype/v1/agents/task-results')
})

router.post('/end-to-end-prototype/v1/agents/review-task', (req, res) => {
  res.redirect('/end-to-end-prototype/v1/agents/home-agent')
})

router.post('/end-to-end-prototype/v1/team-leader/change-groups', (req, res) => {
  res.redirect('/end-to-end-prototype/v1/team-leader/team-leader-profile')
})


// Close task
router.post('/end-to-end-prototype/v1/agents/close-task', (req, res) => {
  req.session.data.agent = req.session.data.agent || {}

  req.session.data.agent.closeTask = req.body.agent?.closeTask

  res.redirect('/end-to-end-prototype/v1/agents/agent-tasks')
})

// MI team leader

router.post('/end-to-end-prototype/v1/team-leader/mi/mi-filters', (req, res) => {
	if (req.session.data.mi.tl.taskTypes == 'All'){
		res.redirect("team-stats-with-details")
	} else if (req.session.data.mi.tl.taskTypes == 'Type A') {
		res.redirect("team-stats-call-back")
	} else {
		res.redirect("Type A")
	}
})

// with on hold

router.post('/end-to-end-prototype/v1/team-leader/mi/mi-filters-with-on-hold', (req, res) => {
	if (req.session.data.mi.tl.taskTypes == 'All'){
		res.redirect("team-stats-with-details-with-on-hold")
	} else if (req.session.data.mi.tl.taskTypes == 'Type A') {
		res.redirect("team-stats-call-back-with-on-hold")
	} else {
		res.redirect("Type A")
	}
})

// Admin

router.post('/end-to-end-prototype/v1/admin/change-permissions', (req, res) => {
	if (req.session.data.admin.changePermissions == 'on'){
		res.redirect("organisation-unit-details")
	} else {
		res.redirect("organisation-unit-details")
	}
})

router.post('/pip/select-journey', (req, res) => {
	if (req.session.data.pip.selectJourney == 'one'){
		res.redirect("/pip/home-agent")
	} else {
		res.redirect("/pip/admin-settings")
	}
})



// Service Manager


router.post('/end-to-end-prototype/v1/service-manager/agent-statistics', (req, res) => {
  const status = req.session.data?.sm?.agentStats?.status
  const taskType = req.session.data?.sm?.agentStats?.taskType

  // Status can be undefined, string, or array
  const selectedStatuses = (Array.isArray(status) ? status : [status]).filter(Boolean)

  res.render('end-to-end-prototype/v1/service-manager/agent-statistics', {
    selectedStatuses,
    selectedTaskType: taskType,
    showResults: true
  })
})

router.post('/end-to-end-prototype/v1/service-manager/select', (req, res) => {
	if (req.session.data.mi.sm.select == 'Filters and results on the same page'){
		res.redirect("agent-statistics")
	} else {
		res.redirect("agent-statistics-no-results")
	}
})

router.post('/end-to-end-prototype/v1/service-manager/agent-statistics-no-results', (req, res) => {
	if (req.session.data.sm.agentStats.taskType == 'All'){
		res.redirect("team-stats-with-details-with-on-hold")
	} else {
		res.redirect("team-stats-type-a")
	}
})



// Team leader

router.post('/end-to-end-prototype/v1/team-leader/mi/select', (req, res) => {
	if (req.session.data.mi.tl.select == 'Version without on hold'){
		res.redirect("mi-filters")
	} else {
		res.redirect("mi-filters-with-on-hold")
	}
})






}
