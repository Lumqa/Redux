var addPhone = function (phone) {
    return {
      type: "ADD_PHONE",
      phone
    }
  };
  var deletePhone = function (phone) {
    return {
      type: "DELETE_PHONE",
      phone
    }
  };

  var addW = function (qwe) {
    return {
      type: "ADD_QWE",
      qwe
    }
  };
  var deleteW = function (qwe) {
    return {
      type: "DELETE_QWE",
      qwe
    }
  };
   
  module.exports = {addPhone, deletePhone, addW, deleteW};