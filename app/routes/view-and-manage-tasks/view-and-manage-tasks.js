module.exports = router => {

// Routes for bulk change
// it is posting to itself and after redirected to v1 or v2

router.post('/teams/view-and-manage-tasks/select-version', (req, res) => {
	if (req.session.data.teams.selectVersion == 'Version 1'){
		res.redirect("version-1/home")
	} else if (req.session.data.teams.selectVersion == 'Version 2') {
		res.redirect("version-2/home")
	} else {
		res.redirect("version-3/home")
	}
})

router.post('/teams/view-and-manage-tasks/version-1/bulk-update-tasks', (req, res) => {
	if (req.session.data.teams.v2.statusOption == 'Change due date'){
		res.redirect("change-due-date/change-due-date")

	} else if (req.session.data.teams.v2.statusOption == 'Change priority') {
        res.redirect("change-priority/change-priority")
        
    } else if (req.session.data.teams.v2.statusOption == 'Return to queue') {
        res.redirect("return-task-to-queue/return-task-to-queue")  
    }
     else {
		res.redirect("change-due-date/complete")
	}
})

router.post('/teams/view-and-manage-tasks/version-1/change-due-date-and-time', (req, res) => {
		res.redirect("task")
})

router.post('/teams/view-and-manage-tasks/version-1/change-priority', (req, res) => {
		res.redirect("task")
})

router.post('/teams/view-and-manage-tasks/version-3/view-and-manage-tasks', (req, res) => {
		res.redirect("view-and-manage-tasks-different-resultes")
})

router.post('/teams/view-and-manage-tasks/version-1/find-tasks-v4', (req, res) => {
		res.redirect("tasks")
})

router.post('/teams/view-and-manage-tasks/version-1/return-to-the-queue', (req, res) => {
		res.redirect("task")
})



}
