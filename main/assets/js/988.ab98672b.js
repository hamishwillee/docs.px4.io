(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{1894:function(e,t,a){"use strict";a.r(t);var r=a(19),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vtol-weather-vane-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-weather-vane-feature"}},[e._v("#")]),e._v(" VTOL Weather Vane Feature")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("weather vane")]),e._v(" feature automatically turns a VTOL vehicle to face its nose into the relative wind during hover flight.\nThis improves stability (reducing the chance that wind from the side will pick-up the wind-facing wing and flip the vehicle).")]),e._v(" "),a("p",[e._v("The feature is "),a("a",{attrs:{href:"#configuration"}},[e._v("enabled by default")]),e._v(" on VTOL hybrid vehicles flying in multicopter mode.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Weather vane functionality is not supported on pure multirotors.")])]),e._v(" "),a("h2",{attrs:{id:"manual-mode-behaviour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-mode-behaviour"}},[e._v("#")]),e._v(" Manual Mode Behaviour")]),e._v(" "),a("p",[e._v("The weather vane feature will only take effect in "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" (not other manual MC modes).")],1),e._v(" "),a("p",[e._v("The user can still use the yaw stick to demand a yaw rate even while the weather vane controller is trying to turn the nose of the vehicle into the wind.\nThe target yaw rate is the sum of weather vane yaw rate and user commanded yaw rate.")]),e._v(" "),a("h2",{attrs:{id:"mission-mode-behaviour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-mode-behaviour"}},[e._v("#")]),e._v(" Mission Mode Behaviour")]),e._v(" "),a("p",[e._v("In "),a("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(" the weather vane feature will always be active when the parameter is enabled.\nAny yaw angle commanded in a mission will be ignored.")],1),e._v(" "),a("p",[a("a",{attrs:{id:"configuration"}})]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("This functionality is configured using the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#WV_EN"}},[e._v("WV_* parameters")]),e._v(".")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#WV_EN"}},[e._v("WV_EN")])],1),e._v(" "),a("td",[e._v("Enable weather vane.")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#WV_ROLL_MIN"}},[e._v("WV_ROLL_MIN")])],1),e._v(" "),a("td",[e._v("Minimum roll angle setpoint for weathervane controller to demand a yaw-rate.")])]),e._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#WV_YRATE_MAX"}},[e._v("WV_YRATE_MAX")])],1),e._v(" "),a("td",[e._v("Maximum yawrate the weathervane controller is allowed to demand.")])])])]),e._v(" "),a("h2",{attrs:{id:"how-does-it-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How Does it Work?")]),e._v(" "),a("p",[e._v("During hover flight the vehicle needs to overcome the drag exerted on it by the wind in order to hold its position.\nThe only way for it to achieve this is by tilting its thrust vector into the relative wind (it literally 'leans' against the wind).\nBy keeping track of the thrust vector one can estimate the wind direction.\nA weathervane controller is used to command a yawrate that turns the vehicle nose into the estimated wind direction.")])])}),[],!1,null,null,null);t.default=i.exports}}]);