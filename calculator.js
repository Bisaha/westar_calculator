'use strict';
//setting variables
var service_fee_current = 14.50;
var service_fee_new = 18.50;
var rider = .040638;//same for current and new
//current bill summer and winter rates
var first_900 = .076833; //same in winter and summer
var after_900_summer = .084752;
var after_900_winter = .062804;
//the one rate charged under new bill
var new_volume_rate = .056234;
//demand rates for winter and summer
var demand_rate_summer = 9.45;
var demand_rate_winter = 3.15;
var volume = inputs.volume;
var demand = inputs.demand;
//volme charge function
function get_volume_charge(volume, season) {
  if (season == "winter"){
    var after_900_rate = after_900_winter;
  } else if (season == "summer"){
    after_900_rate = after_900_summer;
  }
  if (volume >= 901){
    var first_900 = 900*.076833;
    var remaining = volume - 900;
    var after_900 = remaining*after_900_rate;
    var volume_charge = first_900 +after_900;
    return volume_charge;
  } else if (volume < 901) {
    return volume * .076833;

  }
  }

//the formulas










var rider_charge = rider*volume;
var summer_volume_charge_current = get_volume_charge(volume,'summer');
var current_summer_bill = summer_volume_charge_current + service_fee_current + rider_charge;
current_summer_bill = Math.round(current_summer_bill);

var winter_volume_charge_current = get_volume_charge(volume,'winter');
var current_winter_bill = winter_volume_charge_current + service_fee_current + rider_charge;
current_winter_bill = Math.round(current_winter_bill);

var new_volume_charge = volume * new_volume_rate;

var summer_demand_charge = demand_rate_summer * demand;
var new_summer_bill = new_volume_charge + service_fee_new + rider_charge + summer_demand_charge;
new_summer_bill = Math.round(new_summer_bill);

var winter_demand_charge = demand_rate_winter * demand;
var new_winter_bill = new_volume_charge + service_fee_new + rider_charge +winter_demand_charge;
new_winter_bill = Math.round(new_winter_bill);

var line_one = "Under the new demand bill you would pay $".concat(new_summer_bill, " in the Summer.");


var summer_dif = new_summer_bill - current_summer_bill;
summer_dif = Math.round(summer_dif);
if (summer_dif > 0){
  var line_two = "That's likely $".concat(summer_dif, " more than your current Summer bill.");
}else if (summer_dif < 0){
  var line_two = "That's likely $".concat(Math.abs(summer_dif), " less than your current Summer bill");
}else if (summer_dif === 0){
  var line_two = "That's roughly equal to your current Summer bill."
}else{
  var line_two = get_volume_charge(volume,'summer');
}

var line_three = "\nIn the winter, the new bill would be around $".concat(new_winter_bill,".")

var winter_dif = new_winter_bill - current_winter_bill;
winter_dif = Math.round(winter_dif);
if (winter_dif > 0){
  var line_four = " And about $".concat(winter_dif, " more than your current Winter bill.");
}else if (winter_dif < 0){
  var line_four = " And about $".concat(Math.abs(winter_dif), " less than your current Winter bill.");
}else if (winter_dif === 0){
  var line_four = " It's also roughly equal to your current Winter bill."
}else{
  var line_four = get_volume_charge(volume,'winter');
}

return {
  summer:("$".concat(new_summer_bill)),
  winter: ("$".concat(new_winter_bill)),
  lines: (line_two+line_four)
  //summer:(line_one + line_two + line_three + line_four)
};
