module.exports = router => {

// Routes for Would you like to compare statistics by agents or teams?

router.post('/teams/stats/design-7/agents-or-teams', (req, res) => {
	if (req.session.data.stats.agentsOrTeams == 'Agents'){
		res.redirect("agents")
	} else {
		res.redirect("teams")
	}
})

router.post('/teams/stats/mvp/weekly/team-parameters', (req, res) => {
	if (req.session.data.mvp.stats.taskTypes == 'All'){
		res.redirect("team-stats-with-details")
	} else if (req.session.data.mvp.stats.taskTypes == 'Call back') {
		res.redirect("team-stats-call-back_mvp_plus")
	} else {
		res.redirect("team-stats-all")
	}
})


}
