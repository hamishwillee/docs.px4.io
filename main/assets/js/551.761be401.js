(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{2184:function(e,t,n){"use strict";n.r(t);var o=n(19),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"geofence"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#geofence"}},[e._v("#")]),e._v(" Geofence")]),e._v(" "),o("p",[e._v("A Geofence is a virtual boundary that defines where a vehicle can travel.\nGeoFences can be used to prevent a vehicle flying out of range of the RC controller, or into unsafe or restricted airspace.")]),e._v(" "),o("p",[e._v("PX4 provides two independent mechanisms for specify a geofence:")]),e._v(" "),o("ul",[o("li",[e._v('A basic "failsafe" geofence that defines a simple cylinder.')]),e._v(" "),o("li",[e._v("More complicated geometries can be defined using a Geofence Plan ("),o("em",[e._v("QGroundControl")]),e._v(").")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("GeoFences apply in all modes, including both missions and manual flight.")])]),e._v(" "),o("h2",{attrs:{id:"failsafe-geofence"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#failsafe-geofence"}},[e._v("#")]),e._v(" Failsafe Geofence")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/en/config/safety.html#geofence-failsafe"}},[e._v("Geofence Failsafe")]),e._v(" defines a cylinder centered on the home position, with a specified maximum radius and altitude.")],1),e._v(" "),o("p",[e._v('The settings also include a "failsafe action" in the event that the fence is breached.\nThis may simply be a warning notification, but more commonly a vehicle will immediately '),o("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[e._v("Return")]),e._v(" to a safe location.")],1),e._v(" "),o("p",[e._v("For more information see: "),o("RouterLink",{attrs:{to:"/en/config/safety.html#geofence-failsafe"}},[e._v("Safety > Geofence Failsafe")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"geofence-plan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#geofence-plan"}},[e._v("#")]),e._v(" Geofence Plan")]),e._v(" "),o("p",[e._v("PX4 supports complex Geofence boundaries made up of multiple circular and polygonal regions, which may be defined as either inclusion (fly within) or exclusion (fly outside) areas.")]),e._v(" "),o("p",[e._v("The Geofence is planned in "),o("em",[e._v("QGroundControl")]),e._v(" alongside the mission and rally points.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(964),alt:"Geofence Plan"}})]),e._v(" "),o("p",[e._v("Geofence planning is fully documented in "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/plan_view/plan_geofence.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plan View > GeoFence"),o("OutboundLink")],1),e._v(" (QGroundControl User Guide).")]),e._v(" "),o("p",[e._v("In summary:")]),e._v(" "),o("ol",[o("li",[e._v("Open "),o("em",[e._v("QGroundControl > Plan View")]),e._v(".")]),e._v(" "),o("li",[e._v("Select the "),o("em",[e._v("Plan Type")]),e._v(" radio button: "),o("strong",[e._v("Fence")]),e._v(".\nThis will display the "),o("em",[e._v("GeoFence Editor")]),e._v(".\n"),o("img",{attrs:{src:n(965),alt:"Geofence Plan"}})]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("Polygon Fence")]),e._v(" or "),o("strong",[e._v("Circular Fence")]),e._v(" button to add a "),o("em",[e._v("basic")]),e._v(" fence of the desired type to the map.\nThis also adds an entry for the type of fence in the editor.")]),e._v(" "),o("li",[e._v("Use the map to configure the shape and position of the fence.\n"),o("ul",[o("li",[e._v("The fence center marker can be used to move the fence to the correct position.")]),e._v(" "),o("li",[e._v("The marker on the border of a circular fence can be used to change the radius.")]),e._v(" "),o("li",[e._v("The markers on corners (vertices) can be used to change the geometry of a polygon.\nAdditional vertices are created by clicking halfway along the lines between existing markers.")])])]),e._v(" "),o("li",[e._v("Use the "),o("em",[e._v("Geofence Editor")]),e._v(" to set a fence as an inclusion or exclusion, and to select a fence to edit ("),o("strong",[e._v("Edit")]),e._v(" radio button) or Delete ("),o("strong",[e._v("Del")]),e._v(" button).")]),e._v(" "),o("li",[e._v("Add as many fences as you like.")]),e._v(" "),o("li",[e._v("Once finished, click on the "),o("strong",[e._v("Upload")]),e._v(" button (top right) to send the fence (along with rally points and mission) to the vehicle.")]),e._v(" "),o("li",[e._v("Set the breach action in the "),o("RouterLink",{attrs:{to:"/en/config/safety.html#geofence-failsafe"}},[e._v("Geofence Failsafe")]),e._v(".")],1)]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Any geofence that does not include the Home position will be rejected by the flight controller and not uploaded.\nIf the vehicle is flying, also any geofence that would immediately get breached after the upload is rejected.")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("PX4 implements the MAVLink "),o("a",{attrs:{href:"https://mavlink.io/en/services/mission.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mission microservice"),o("OutboundLink")],1),e._v(", which includes support for GeoFences.")])])])}),[],!1,null,null,null);t.default=i.exports},964:function(e,t,n){e.exports=n.p+"assets/img/geofence_overview.f2706df5.jpg"},965:function(e,t,n){e.exports=n.p+"assets/img/geofence_editor.56301de7.jpg"}}]);