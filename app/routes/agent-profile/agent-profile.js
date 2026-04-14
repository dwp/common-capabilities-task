module.exports = router => {

// Routes for bulk change
// it is posting to itself and after redirected to v1 or v2

router.post('/spikes/agent-profile/service-manager-v2/manage-org-unit/change-attributes', (req, res) => {
	res.redirect("agent-details-sm")
})

router.post('/spikes/agent-profile/team-leader/change-groups', (req, res) => {
	res.redirect("agent-details-mt")
})

router.post('/spikes/agent-profile/service-manager-v2/manage-org-unit/change-groups', (req, res) => {
	res.redirect("agent-details-sm")
})


router.post('/agent-details-mt', function (req, res) {
	req.session.data.showBanner = req.body.showBanner
res.redirect('/agent-details-mt')
})




}
