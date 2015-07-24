angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("admin_booking_edit.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n  <div ng-show=\"loading\" class=\"loader\"></div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n    ng-hide=\"loading\">\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" ng-click=\"cancelBooking(model)\">Cancel Booking</button>\n    <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Close</button>\n  </div>\n</form>");
$templateCache.put("edit_booking_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"modal_form\" ng-submit=\"submit(modal_form)\">\n  <div ng-show=\"loading\" class=\"loader\"></div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\"\n    ng-hide=\"loading\">\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-danger\" ng-click=\"cancelBooking($event)\">Cancel Booking</button>\n    <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"loading\"\n    value=\"Save Booking\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Dismiss</button>\n  </div>\n</form>\n");
$templateCache.put("resource_calendar_main.html","<div id=\'loading_icon\' ng-show=\"loading\">\n  <div id=\'wait_graphic\'>&nbsp;</div>\n</div>\n<div id=\"uicalendar\" ui-calendar=\"uiCalOptions.calendar\" ng-model=\"eventSources\"\n  ng-if=\"eventSources\" calendar=\"resourceCalendar\"\n  class=\"resource-calendar\"></div>\n");}]);