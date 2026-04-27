module.exports = router => {

// Routes for bulk change
// it is posting to itself and after redirected to v1 or v2


// Team

router.post('/spikes/agent-profile/team-leader/change-groups', (req, res) => {
	res.redirect("agent-details-mt")
})

router.post('/spikes/agent-profile/team-leader/agent-details-mt', (req, res) => {
	res.redirect("manage-a-team")
})

// End Team

// SM

router.post('/spikes/agent-profile/service-manager-v2/manage-org-unit/change-groups', (req, res) => {
	res.redirect("agent-details-sm")
})


router.post('/spikes/agent-profile/service-manager-v2/manage-org-unit/agent-details-sm', (req, res) => {
	res.redirect("manage-agents")
})

// Matching criteria

router.post('/spikes/agent-profile/service-manager-v2/manage-org-unit/change-attributes', (req, res) => {
	res.redirect("agent-details-sm")
})


}
