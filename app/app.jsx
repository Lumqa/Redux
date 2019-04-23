var React = require("react");
var ReactDOM = require("react-dom");
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");
var reducer2 = require("./reducer2.jsx");
var AppView = require("./appview.jsx");
var AppView2 = require("./appview2.jsx");
 
var store = redux.createStore(reducer);
var store2 = redux.createStore(reducer2);
 
store.dispatch({
  type: "SET_STATE",
  state: {
    phones: [ "iPhone 7 Plus", "Samsung Galaxy A5" ]
  }
});

store2.dispatch({
  type: "SET_STATE",
  state: {
    qwes: [ "Yandex", "Google" ]
  }
});
 
 
ReactDOM.render(
  <Provider store={store2}>
    <AppView2 />
  </Provider>,
  document.getElementById("container")
);