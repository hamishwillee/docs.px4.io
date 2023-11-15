(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{2074:function(e,i,a){"use strict";a.r(i);var t=a(19),o=Object(t.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"package-delivery-missions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-delivery-missions"}},[e._v("#")]),e._v(" Package Delivery Missions")]),e._v(" "),t("p",[e._v("A package delivery mission allows users to plan and execute cargo delivery using a "),t("RouterLink",{attrs:{to:"/en/peripherals/gripper.html"}},[e._v("gripper")]),e._v(".")],1),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("This feature was added in PX4 v1.14 with support for Gripper (only).\nPackage delivery missions will be extended to support other cargo release hardware in future, including winches.")])]),e._v(" "),t("h2",{attrs:{id:"delivery-mechanism-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delivery-mechanism-configuration"}},[e._v("#")]),e._v(" Delivery Mechanism Configuration")]),e._v(" "),t("p",[e._v("Package delivery missions require some configuration, which must be done before a mission can be planned and executed.")]),e._v(" "),t("p",[e._v("The configuration is largely hardware-specific, and is hence covered in the setup page for each type of package delivery hardware:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/en/peripherals/gripper.html#package-delivery-configuration"}},[e._v("Gripper > Package Delivery Configuration")])],1)]),e._v(" "),t("h2",{attrs:{id:"mission-planning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mission-planning"}},[e._v("#")]),e._v(" Mission Planning")]),e._v(" "),t("p",[e._v("A package delivery mission is planned in much the same as any other "),t("RouterLink",{attrs:{to:"/en/flying/missions.html"}},[e._v("waypoint mission")]),e._v(", with mission start, takeoff waypoint, various path waypoints, and possibly a return waypoint.\nThe only difference is that a package delivery mission must include a mission item that indicates whether the package should be released on the ground ("),t("code",[e._v("Land")]),e._v(") or in-air ("),t("code",[e._v("Waypoint")]),e._v("), followed by another mission item to deploy the package ("),t("code",[e._v("Gripper Mechanism")]),e._v(").")],1),e._v(" "),t("p",[e._v("Whether or not you "),t("code",[e._v("Land")]),e._v(" depends on whether the package can safely be deployed while flying, and if the vehicle is capable of landing at the deployment location.\nSince a gripper cannot lower packages safely, multicopter and VTOL vehicles will often land to deploy packages when using a gripper.")]),e._v(" "),t("p",[e._v("After the deployment device "),t("a",{attrs:{href:"#package-release-feedback"}},[e._v("indicates completion")]),e._v(", the vehicle will proceed to the next waypoint.\nNote that if landed, the next mission item after deployment should be another "),t("code",[e._v("Waypoint")]),e._v(" or a "),t("code",[e._v("Takeoff")]),e._v(" mission item ("),t("a",{attrs:{href:"#rtl-waypoint-for-package-delivery-with-landing"}},[e._v("it must not be a "),t("code",[e._v("RETURN")])]),e._v(".)")]),e._v(" "),t("h2",{attrs:{id:"creating-a-package-delivery-mission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-package-delivery-mission"}},[e._v("#")]),e._v(" Creating a Package Delivery Mission")]),e._v(" "),t("p",[e._v("To create a package delivery mission (with a Gripper):")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create a normal mission with a "),t("code",[e._v("Takeoff")]),e._v(" mission item, and additional waypoints for your required flight path.")])]),e._v(" "),t("li",[t("p",[e._v("Add a waypoint on the map for where you'd like to release the package.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("To drop the package while flying set an appropriate altitude for the waypoint (and ensure the waypoint is at a safe location to drop the package).")])]),e._v(" "),t("li",[t("p",[e._v("If you'd like to land the vehicle to make the delivery you will need to change the "),t("code",[e._v("Waypoint")]),e._v(" to a "),t("code",[e._v("Land")]),e._v(" mission item.\nDo this by selecting the mission item heading, then selecting "),t("code",[e._v("Land")]),e._v(" in the popup dialog.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(948),alt:"Waypoint to Land mission item"}})])])])]),e._v(" "),t("li",[t("p",[e._v("Add a waypoint on the map (anywhere) for the gripper release.\nTo change this to a "),t("code",[e._v("Gripper Mechanism")]),e._v(' select the "Waypoint" heading, and in the popup changing the group to "Advanced", then selecting '),t("code",[e._v("Gripper Mechanism")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:a(949),alt:"Action waypoint"}})])]),e._v(" "),t("li",[t("p",[e._v("Configure the action for the gripper in the editor.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(950),alt:"Gripper action setting"}})]),e._v(" "),t("ul",[t("li",[e._v('Set it to "Release" in order to release the package.')]),e._v(" "),t("li",[e._v("The gripper ID does not need to be set for now.")])])]),e._v(" "),t("li",[t("p",[e._v("Add additional waypoints for the remainder of the path.\nIf you landed, then remember that you must include a waypoint after the "),t("code",[e._v("Gripper Mechanism")]),e._v(" before adding a "),t("code",[e._v("Return")]),e._v(" mission item.")])])]),e._v(" "),t("h3",{attrs:{id:"example-plans"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-plans"}},[e._v("#")]),e._v(" Example Plans")]),e._v(" "),t("h4",{attrs:{id:"package-drop-mission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-drop-mission"}},[e._v("#")]),e._v(" Package Drop Mission")]),e._v(" "),t("p",[e._v("This shows a mission plan where the vehicle drops the package while flying.\nThe initial mission item is a waypoint and the action is a "),t("code",[e._v("Gripper Release")]),e._v(" (shown in mission item list)")]),e._v(" "),t("p",[t("img",{attrs:{src:a(951),alt:"Package drop mission example"}})]),e._v(" "),t("p",[e._v("Note how the altitude graph shows the pre-waypoint as an in-air waypoint, also on the right panel.")]),e._v(" "),t("h4",{attrs:{id:"land-and-release-mission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#land-and-release-mission"}},[e._v("#")]),e._v(" Land and Release Mission")]),e._v(" "),t("p",[e._v("This shows a mission plan that where the vehicle lands to deliver the package.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(952),alt:"Land and Release example"}})]),e._v(" "),t("p",[e._v("Note how the altitude graph shows the "),t("code",[e._v("Land")]),e._v(" item.")]),e._v(" "),t("h3",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("h4",{attrs:{id:"rtl-waypoint-for-package-delivery-with-landing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtl-waypoint-for-package-delivery-with-landing"}},[e._v("#")]),e._v(" RTL Waypoint for Package Delivery with Landing")]),e._v(" "),t("p",[e._v("Do not plan a mission with a delivery like this: "),t("code",[e._v("LAND")]),e._v(" > "),t("code",[e._v("GRIPPER")]),e._v(" > "),t("code",[e._v("RETURN TO LAUNCH")]),e._v(".")]),e._v(" "),t("p",[e._v('For safety reasons "Return To Launch" is disabled when vehicle is landed ('),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20044",target:"_blank",rel:"noopener noreferrer"}},[e._v("related issue"),t("OutboundLink")],1),e._v(").\nSo if you land, release the cargo, then have an RTL waypoint, the vehicle will idle at the landing coordinate.")]),e._v(" "),t("h4",{attrs:{id:"manual-control-of-gripper-in-missions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-control-of-gripper-in-missions"}},[e._v("#")]),e._v(" Manual Control of Gripper in Missions")]),e._v(" "),t("p",[e._v("A gripper can be "),t("RouterLink",{attrs:{to:"/en/peripherals/gripper.html#qgc-joystick-configuration"}},[e._v("manually controlled using a joystick button")]),e._v(" (if configured) in any mode, including during a mission.")],1),e._v(" "),t("p",[e._v("Note however that if you manually command the gripper to close while a package delivery mission is opening the gripper, the gripper won't be able to finish the open action.\nThe mission will resume after the payload delivery mission item timeout ("),t("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_PD_TO"}},[e._v("MIS_PD_TO")]),e._v(" expires, even if it has not released the package.")],1),e._v(" "),t("h4",{attrs:{id:"auto-disarming-is-disabled-in-missions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-disarming-is-disabled-in-missions"}},[e._v("#")]),e._v(" Auto-disarming is Disabled in Missions")]),e._v(" "),t("p",[e._v("Auto disarming is disabled by default when in mission.\nThis means that while landed for package delivery the vehicle will still be armed (and potentially dangerous!)")]),e._v(" "),t("h4",{attrs:{id:"package-release-feedback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-release-feedback"}},[e._v("#")]),e._v(" Package Release Feedback")]),e._v(" "),t("p",[e._v('The mission will proceed after a "package release" mission item (e.g. '),t("code",[e._v("GRIPPER")]),e._v(") completes.")]),e._v(" "),t("p",[e._v("Grippers and other delivery devices either use sensor feedback or a configurable timeout to indicate completion.")])])}),[],!1,null,null,null);i.default=o.exports},948:function(e,i,a){e.exports=a.p+"assets/img/package_delivery_land_waypoint.be53f00d.png"},949:function(e,i,a){e.exports=a.p+"assets/img/qgc_mission_gripper_mechanism_item_example.1d1c98f7.png"},950:function(e,i){e.exports="data:image/png;base64,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"},951:function(e,i,a){e.exports=a.p+"assets/img/package_drop_mission_example.9577ef81.png"},952:function(e,i,a){e.exports=a.p+"assets/img/land_and_release_package_delivery_mission_example.12c892d6.png"}}]);