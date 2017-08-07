import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './style.less'
import IMG_ACE from './images/ace.jpg'
import IMG_LUFFY from './images/luffy.jpg'
import * as AppActions from '../App/action'
import * as MainActions from './action'
import Diseases from '../../data/disease'

console.log('Diseases', Diseases);
const Actions = Object.assign({}, AppActions, MainActions)

class Main extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props)

  }

  // 提交表单
  submitFormHandler() {
    const { Actions } = this.props

    Actions.submitForm(Diseases, {
      currRadios: this.currRadio,
      checkboxes: this.refs.checkbox,
    })
  }

  render() {

    const { Actions, diArr } = this.props

    return (
      <div style={{margin: '20px 20px'}}>


      </div>
    )
  }
}

// redux ‘s state 非 react state
function mapStateToProps(state) {
  const { intelligentReducer } = state
  console.log('state', state);
  return {
    diArr: intelligentReducer.diArr
  }
}

function mapActionToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }

}

export default connect(mapStateToProps, mapActionToProps)(Main)
