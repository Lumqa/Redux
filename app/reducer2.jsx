var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
  switch (action.type) {
    case "SET_STATE":
        return state.merge(action.state);
    case "ADD_QWE":
        return state.update("qwes", (qwes) => qwes.push(action.qwe));
    case "DELETE_QWE":
        return state.update("qwes",
            (qwes) => qwes.filterNot(
                (item) => item === action.qwe
            )
        );
  }
  return state;
}
module.exports = reducer;