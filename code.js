(function() {

  $(function() {
    var $el_collection, $modules_el, $modules_grouped, modules, parse_links;
    $modules_el = $('#ctl00_ContentPlaceHolder1_ctl02_TC_TP_Module');
    $el_collection = $modules_el.find("div > table > tbody >tr");
    $modules_grouped = _.groupBy($el_collection, function($el) {
      return Math.floor(_.indexOf($el_collection, $el) / 2);
    });
    modules = [];
    _.each($modules_grouped, function(module) {
      var $anchor_tags, module_data;
      module_data = {};
      $anchor_tags = $(module).find("a").not("[title]");
      module_data.title = $anchor_tags[0];
      module_data.links = _.rest($anchor_tags, 1);
      return modules.push(module_data);
    });
    parse_links = function(link) {
      return console.log('adf');
    };
    return parse_links();
  });

}).call(this);
