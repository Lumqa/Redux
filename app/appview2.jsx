var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions.jsx");
 
class WForm extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick() {
    if ('ssssssssssssss' !== "") {
      
    }
  }
  render() {
    return <div>
            <input ref="qweInput" />
            <button onClick = {this.onClick.bind(this)}>Добавить</button>
        </div>
  }
};
 
class WItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     
    return <div>
                <p>
                    <b>{this.props.text}</b><br />
                    <button onClick={() => this.props.deleteW(this.props.text)}>Удалить</button> 
                </p>
            </div>
  }
};
 
class WList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log(this.props);
    return <div>
        {this.props.qwes.map(item =>
          <WItem key={item}
                    text={item}
                    deleteW={this.props.deleteW}/>
        )}
      </div>
  }
};
 
class AppView2 extends React.Component {
    render() {
        return <div>
            <WForm addW={this.props.addW}/>
            <WList {...this.props} />
            <a>aaaaaaaaaa</a>
    </div>
  }
};
 
function mapStateToProps(state) {
  return {
    phones: state.get("qwes")
  };
}
 
module.exports = connect(mapStateToProps, actions)(AppView2);