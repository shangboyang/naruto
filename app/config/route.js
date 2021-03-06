import React, {Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import App from '../containers/App'
import Main from '../containers/Main'


const config = [
  {
    path: '/',
    component: App,
    // default index
    indexRoute: {
      component: Main
    },
    childRoutes: [
      { path: '/main', name: 'main', component: Main },
    ]
  }
]

const route = (
  <Router
    history={hashHistory}
    routes={config}
    render={applyRouterMiddleware(useScroll())}>
  </Router>
)


export default route
