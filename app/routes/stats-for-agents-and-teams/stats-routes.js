module.exports = router => {

// Routes for Would you like to compare statistics by agents or teams?

router.post('/teams/stats/design-7/agents-or-teams', (req, res) => {
	if (req.session.data.stats.agentsOrTeams == 'Agents'){
		res.redirect("agents")
	} else {
		res.redirect("teams")
	}
})


}
