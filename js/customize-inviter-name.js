(function() {
  var $, getQueryParameters, jQuery;

  $ = jQuery = window.jQuery;

  getQueryParameters = function() {
    return window.location.search.substr(1).split("&").reduce(function(result, item) {
      var key, value, _ref;
      _ref = item.split("="), key = _ref[0], value = _ref[1];
      result[key] = decodeURIComponent(value);
      return result;
    }, {});
    return result;
  };

  $(document).on("ready", function() {
    var inviteBy, text;
    inviteBy = getQueryParameters().inviteBy;
    if (inviteBy != null) {
      text = "Join " + inviteBy + " on ClassDojo";
      return $("#customize-inviter-name").text(text);
    }
  });

}).call(this);
