(window.webpackJsonp=window.webpackJsonp||[]).push([[1405],{2560:function(e,t,a){"use strict";a.r(t);var s=a(19),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"multi-vehicle-simulation-with-ros-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation-with-ros-2"}},[e._v("#")]),e._v(" Multi-Vehicle Simulation with ROS 2")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/middleware/uxrce_dds.html"}},[e._v("XRCE-DDS")]),e._v(" allows for multiple clients to be connected to the same agent over UDP.\nThis is particular useful in simulation as only one agent needs to be started.")],1),e._v(" "),a("h2",{attrs:{id:"setup-and-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-and-requirements"}},[e._v("#")]),e._v(" Setup and Requirements")]),e._v(" "),a("p",[e._v("The only requirements are")]),e._v(" "),a("ul",[a("li",[e._v("To be able to run "),a("RouterLink",{attrs:{to:"/en/simulation/multi-vehicle-simulation.html"}},[e._v("multi-vehicle simulation")]),e._v(" without ROS 2 with the desired simulator ("),a("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/multi_vehicle_simulation.html"}},[e._v("Gazebo")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/multi_vehicle_simulation.html#multiple-vehicle-with-gazebo-classic"}},[e._v("Gazebo Classic")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/sim_flightgear/multi_vehicle.html"}},[e._v("FlightGear")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/sim_jmavsim/multi_vehicle.html"}},[e._v("JMAVSim")]),e._v(").")],1),e._v(" "),a("li",[e._v("To be able to use "),a("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html"}},[e._v("ROS 2")]),e._v(" in a single vehicle simulation.")],1)]),e._v(" "),a("h2",{attrs:{id:"principle-of-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle-of-operation"}},[e._v("#")]),e._v(" Principle of Operation")]),e._v(" "),a("p",[e._v("In simulation each PX4 instance receives a unique "),a("code",[e._v("px4_instance")]),e._v(" number starting from "),a("code",[e._v("0")]),e._v(".\nThis value is used to assign a unique value to "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UXRCE_DDS_KEY"}},[e._v("UXRCE_DDS_KEY")]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("param "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" UXRCE_DDS_KEY "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$((")]),e._v("px4_instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("))")])]),e._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("By doing so, "),a("code",[e._v("UXRCE_DDS_KEY")]),e._v(" will always coincide with "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_SYS_ID"}},[e._v("MAV_SYS_ID")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Moreover, when "),a("code",[e._v("px4_instance")]),e._v(" is greater than zero, a unique ROS 2 "),a("RouterLink",{attrs:{to:"/en/middleware/uxrce_dds.html#customizing-the-topic-namespace"}},[e._v("namespace prefix")]),e._v(" in the form "),a("code",[e._v("px4_$px4_instance")]),e._v(" is added:")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("uxrce_dds_ns")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-n px4_'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$px4_instance")]),e._v('"')]),e._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The environment variable "),a("code",[e._v("PX4_UXRCE_DDS_NS")]),e._v(", if set, will override the namespace behavior described above.")])]),e._v(" "),a("p",[e._v("The first instance ("),a("code",[e._v("px4_instance=0")]),e._v(") does not have an additional namespace in order to be consistent with the default behavior of the "),a("code",[e._v("xrce-dds")]),e._v(" client on a real vehicle.\nThis mismatch can be fixed by manually using "),a("code",[e._v("PX4_UXRCE_DDS_NS")]),e._v(" on the first instance or by starting adding vehicles from index "),a("code",[e._v("1")]),e._v(" instead of "),a("code",[e._v("0")]),e._v(" (this is the default behavior adopted by "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/gazebo-classic/sitl_multiple_run.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("sitl_multiple_run.sh"),a("OutboundLink")],1),e._v(" for Gazebo Classic).")]),e._v(" "),a("p",[e._v("The default client configuration in simulation is summarized as follows:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[e._v("PX4_UXRCE_DDS_NS")])]),e._v(" "),a("th",[a("code",[e._v("px4_instance")])]),e._v(" "),a("th",[a("code",[e._v("UXRCE_DDS_KEY")])]),e._v(" "),a("th",[e._v("client namespace")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("not provided")]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[a("code",[e._v("px4_instance+1")])]),e._v(" "),a("td",[e._v("none")])]),e._v(" "),a("tr",[a("td",[e._v("provided")]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[a("code",[e._v("px4_instance+1")])]),e._v(" "),a("td",[a("code",[e._v("PX4_UXRCE_DDS_NS")])])]),e._v(" "),a("tr",[a("td",[e._v("not provided")]),e._v(" "),a("td",[e._v(">0")]),e._v(" "),a("td",[a("code",[e._v("px4_instance+1")])]),e._v(" "),a("td",[a("code",[e._v("px4_${px4_instance}")])])]),e._v(" "),a("tr",[a("td",[e._v("provided")]),e._v(" "),a("td",[e._v(">0")]),e._v(" "),a("td",[a("code",[e._v("px4_instance+1")])]),e._v(" "),a("td",[a("code",[e._v("PX4_UXRCE_DDS_NS")])])])])]),e._v(" "),a("h2",{attrs:{id:"adjusting-the-target-system-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-target-system-value"}},[e._v("#")]),e._v(" Adjusting the "),a("code",[e._v("target_system")]),e._v(" value")]),e._v(" "),a("p",[e._v("PX4 accepts "),a("RouterLink",{attrs:{to:"/en/msg_docs/VehicleCommand.html"}},[e._v("VehicleCommand")]),e._v(" messages only if their "),a("code",[e._v("target_system")]),e._v(" field is zero (broadcast communication) or coincides with "),a("code",[e._v("MAV_SYS_ID")]),e._v(".\nIn all other situations, the messages are ignored.\nTherefore, when ROS 2 nodes want to send "),a("code",[e._v("VehicleCommand")]),e._v(" to PX4, they must ensure that the messages are filled with the appropriate "),a("code",[e._v("target_system")]),e._v(" value.")],1),e._v(" "),a("p",[e._v("For example, if you want to send a command to your third vehicle, which has "),a("code",[e._v("px4_instance=2")]),e._v(", you need to set "),a("code",[e._v("target_system=3")]),e._v(" in all your "),a("code",[e._v("VehicleCommand")]),e._v(" messages.")])])}),[],!1,null,null,null);t.default=i.exports}}]);