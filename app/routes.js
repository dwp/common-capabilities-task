//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const fakeCaseData = require('./data/generate-case-data')


// Add your routes here

const express = require('express')
const dayjs = require('dayjs')
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);
// viewing session data

// viewing session data
router.get('*/prototype-admin/view-data', function(req, res){
  querystring = '';
  for ( var key in req.session.data )
    querystring += key +'=' + req.session.data[key] + '&';
  res.render('prototype-admin/view-data', { data: JSON.stringify( req.session, null, 2), querystring: querystring } )
});

//Radio button redirect package
//const radioButtonRedirect = require('radio-button-redirect')
//router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

//Point to individual routes files for each iteration
// router.use('/beta/sprint-3', require('./views/beta/sprint-3/routes'));

//EXAMPLE router.use('/beta/sprint-3/prototype-A', require('./views/beta/sprint-3/prototype-A/routes'));



// router.use('/beta/sprint-:routeVersion', (req, res, next) => {
//   var routeVersion = req.params.routeVersion
//   require('./beta/sprint-' + routeVersion + '/routes')(req, res, next)
// })

// Examples 
router.post('/test/date-test-answer', function (req, res) {

    const day = Number(req.session.data['TestDay'])
    const month = Number(req.session.data['TestMonth'])
    const year = Number(req.session.data['TestYear'])

    const startDate = dayjs({ year : year, month : month-1, day :day})

    const now = dayjs()

    const daysEmployeeOffSick = now.diff(startDate, "day")

    console.log(daysEmployeeOffSick)

    req.session.data['daysEmployeeOffSick'] = daysEmployeeOffSick

    res.redirect('/test/date-results-test')

  })

  router.all('*', (req, res, next) => {
    if (!req?.session?.data?.caseData) {
      req.session.data.caseData = fakeCaseData;
    }
    next();
  })
  
  router.post('/Admin-v4/maternity-tasks', (req, res, next) => {
    
    const sortBy = req.body.sort;
    if (sortBy === 'priority-low') {
      req.session.data.caseData.sort( (a,b) => a.priority - b.priority );
      console.log('Sort by priority low')
    }
    if (sortBy === 'priority-high') {
      req.session.data.caseData.sort( (a,b) => b.priority - a.priority );
      console.log('Sort by priority high')
    }
    next();
  })

module.exports = router
