module.exports = router => {

// Routes for bulk change


router.post('/teams/sdar-agent-claim/check-this-is-the-right-customer', (req, res) => {
	if (req.session.data.sdarAgentClaim.customer == 'No'){
		res.redirect("find-a-customer")
	} else {
		res.redirect("tasks")
	}
})

router.post('/teams/sdar-agent-claim/tasks-details', (req, res) => {
	res.redirect("tasks")
})


}
