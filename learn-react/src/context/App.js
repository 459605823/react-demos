import React from 'react'
import ThemeContext from './theme-context'
import ThemeBar from './ThemeBar'

const themes = {
  light: {
    classname: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classname: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <a 
        href="#theme-switcher" 
        className="btn btn-light"
        onClick={() => {this.changeTheme('light')}}
        >
          浅色主题
        </a>
        <a 
        href="#theme-switcher" 
        className="btn btn-secondary"
        onClick={() => {this.changeTheme('dark')}}
        >
          深色主题
        </a>
        <ThemeBar/>
      </ThemeContext.Provider>
    )
  }
  changeTheme(theme) {
    this.setState({
      theme
    })
  }
}

export default App