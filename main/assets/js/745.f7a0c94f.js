(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{2512:function(e,t,a){"use strict";a.r(t);var i=a(19),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"package-delivery-in-missions-development"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package-delivery-in-missions-development"}},[e._v("#")]),e._v(" Package Delivery in Missions (Development)")]),e._v(" "),i("p",[e._v("A package delivery mission is an extension of a waypoint mission, where a user can plan delivering a package as a waypoint.")]),e._v(" "),i("p",[e._v("This topic explains the architecture for the package delivery feature. It is intended for developers working on extending the architecture, for example to support new payload delivery mechanisms.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Currently only "),i("RouterLink",{attrs:{to:"/ko/peripherals/gripper.html"}},[e._v("Grippers")]),e._v(" can be used for package delivery. Winches are not yet supported.")],1)]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The detailed documentation on how to setup a package delivery mission plan can be found "),i("RouterLink",{attrs:{to:"/ko/flying/package_delivery_mission.html"}},[e._v("here")]),e._v(". Setup for the "),i("code",[e._v("payload_deliverer")]),e._v(" module is covered in the documentation for the delivery mechanism, such as "),i("RouterLink",{attrs:{to:"/ko/peripherals/gripper.html#px4-configuration"}},[e._v("Gripper")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"package-delivery-architecture-diagram"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package-delivery-architecture-diagram"}},[e._v("#")]),e._v(" Package Delivery Architecture Diagram")]),e._v(" "),i("p",[i("img",{attrs:{src:a(459),alt:"Package delivery architecture overview"}})]),e._v(" "),i("p",[e._v("Package Delivery feature is centered around the "),i("RouterLink",{attrs:{to:"/ko/msg_docs/VehicleCommand.html"}},[e._v("VehicleCommand")]),e._v(" & "),i("RouterLink",{attrs:{to:"/ko/msg_docs/VehicleCommandAck.html"}},[e._v("VehicleCommandAck")]),e._v(" messages.")],1),e._v(" "),i("p",[e._v("The central idea lies in having an entity that handles the "),i("code",[e._v("DO_GRIPPER")]),e._v(" or "),i("code",[e._v("DO_WINCH")]),e._v(" vehicle command, executes it and sends back an acknowledgement when the successful delivery is confirmed.")]),e._v(" "),i("p",[e._v("Because PX4 automatically broadcasts the "),i("code",[e._v("VehicleCommand")]),e._v(" uORB message to a UART port configured to communicate in MAVLink as a "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#COMMAND_LONG",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("COMMAND_LONG")]),i("OutboundLink")],1),e._v(" message, an external payload can receive the command and execute it.")]),e._v(" "),i("p",[e._v("Likewise, since PX4 automatically translates the "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#COMMAND_ACK",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("COMMAND_ACK")]),i("OutboundLink")],1),e._v(" message coming in from an external source through a UART port configured for MAVLink into a "),i("code",[e._v("vehicle_command_ack")]),e._v(" uORB message, an external payload's acknowledgement for a successful package deployment can be received by PX4's "),i("code",[e._v("navigator")]),e._v(" module.")]),e._v(" "),i("p",[e._v("Below, each entity involved in the package delivery architecture is explained.")]),e._v(" "),i("h2",{attrs:{id:"navigator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[e._v("#")]),e._v(" Navigator")]),e._v(" "),i("p",[e._v("Navigator handles the reception of the vehicle command ACK (described below). Upon reception of a successful deployment ack message, it sets the flag in Mission block level to signal that the payload deployment has been successful.")]),e._v(" "),i("p",[e._v("This allows the mission to proceed to a next item (e.g. Waypoint) safely, as we are sure with the acknowledgement that the deployment has been successful.")]),e._v(" "),i("h2",{attrs:{id:"vehicle-command-ack"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-command-ack"}},[e._v("#")]),e._v(" Vehicle Command ACK")]),e._v(" "),i("p",[e._v("We are waiting for the ACK coming from either internally (via "),i("code",[e._v("payload_deliverer")]),e._v(" module), or externally (external entity sending the MAVLink message "),i("code",[e._v("COMMAND_ACK")]),e._v(") to determine if the package delivery action has been successful (either "),i("code",[e._v("DO_GRIPPER")]),e._v(" or "),i("code",[e._v("DO_WINCH")]),e._v(").")]),e._v(" "),i("h2",{attrs:{id:"mission"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mission"}},[e._v("#")]),e._v(" Mission")]),e._v(" "),i("p",[e._v("The Gripper / Winch command is placed as a "),i("code",[e._v("Mission Item")]),e._v(". This is possible since all the Mission item has the "),i("code",[e._v("MAV_CMD")]),e._v(" to execute (e.g. Land, Takeoff, Waypoint, etc) which can get set to either "),i("code",[e._v("DO_GRIPPER")]),e._v(" or "),i("code",[e._v("DO_WINCH")]),e._v(".")]),e._v(" "),i("p",[e._v("In the Mission logic (green box above) if either Gripper/Winch mission item is reached, it implements brake_for_hold functionality (which sets the "),i("code",[e._v("valid")]),e._v(" flag of the next mission item waypoint to "),i("code",[e._v("false")]),e._v(") for rotary wings (e.g. Multicopter) so that the vehicle would hold it's position while the deployment is getting executed.")]),e._v(" "),i("p",[e._v("For fixed-wing and other vehicles, no special braking condition is considered. So if you have a loiter mission item for a fixed-wing, it will execute the delivery whilst doing the loiter, and won’t come to a stop (as it’s impossible)")]),e._v(" "),i("h2",{attrs:{id:"mission-block"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mission-block"}},[e._v("#")]),e._v(" Mission Block")]),e._v(" "),i("p",[i("code",[e._v("MissionBlock")]),e._v(" is the parent class of "),i("code",[e._v("Mission")]),e._v(' that handles the part "Is Mission completed?".')]),e._v(" "),i("p",[e._v("This all performed in the "),i("code",[e._v("is_mission_item_reached_or_completed")]),e._v(" function, to handle the time delay / mission item advancement.")]),e._v(" "),i("p",[e._v("Also it implements the actual issue_command function, which will issue a vehicle command corresponding to the mission item's "),i("code",[e._v("MAV_CMD")]),e._v(", which will then be received by an external payload or the "),i("code",[e._v("payload_deliverer")]),e._v(" module internally.")]),e._v(" "),i("h2",{attrs:{id:"payload-deliverer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#payload-deliverer"}},[e._v("#")]),e._v(" Payload Deliverer")]),e._v(" "),i("p",[e._v("This is a dedicated module that handles gripper / winch support, which is used for the standard "),i("RouterLink",{attrs:{to:"/ko/flying/package_delivery_mission.html"}},[e._v("package delivery mission plan")]),e._v(".")],1),e._v(" "),i("p",[e._v("Setup for the "),i("code",[e._v("payload_deliverer")]),e._v(" module is covered within setting up an actual package release mechanism setup documentation like "),i("RouterLink",{attrs:{to:"/ko/peripherals/gripper.html#px4-configuration"}},[e._v("Gripper")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports},459:function(e,t,a){e.exports=a.p+"assets/img/payload_delivery_mission_architecture.b1de357c.png"}}]);