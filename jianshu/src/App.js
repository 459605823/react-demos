import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import store from "./store"
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <Fragment>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App
