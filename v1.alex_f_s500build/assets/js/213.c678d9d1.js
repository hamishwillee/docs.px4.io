(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1435:function(e,t,o){"use strict";o.r(t);var r=o(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticStyle:{float:"right",padding:"10px","margin-right":"20px"}},[r("a",{attrs:{href:"http://px4.io/"}},[r("img",{attrs:{src:o(430),title:"PX4 Logo",width:"180px"}})])]),e._v(" "),r("h1",{attrs:{id:"px4-autopilot-user-guide-themeconfig-px4-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-user-guide-themeconfig-px4-version"}},[e._v("#")]),e._v(" PX4 Autopilot User Guide ("+e._s(e.$themeConfig.px4_version)+")")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/release-master-blue.svg",alt:"Releases"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://discuss.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/discuss-px4-ff69b4.svg",alt:"Discuss"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://slack.px4.io",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://px4-slack.herokuapp.com/badge.svg",alt:"Slack"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("PX4 is the "),r("em",[e._v("Professional Autopilot")]),e._v(".\nDeveloped by world-class developers from industry and academia, and supported by an active world wide community, it powers all kinds of vehicles from racing and cargo drones through to ground vehicles and submersibles.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("This guide contains everything you need to assemble, configure, and safely fly a PX4-based vehicle. Interested in contributing? Check out the "),r("RouterLink",{attrs:{to:"/en/development/development.html"}},[e._v("Development")]),e._v(" section.")],1)]),e._v(" "),r("h2",{attrs:{id:"how-do-i-get-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-started"}},[e._v("#")]),e._v(" How Do I Get Started?")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/getting_started/"}},[e._v("Getting Started")]),e._v(" should be read by all users!\nIt provides an overview of PX4, including features provided by the flight stack (flight modes and safety features) and the supported hardware (flight controller, vehicles, airframes, telemetry systems, RC control systems).")],1),e._v(" "),r("p",[e._v("Depending on what you want to achieve, the following tips will help you navigate through this guide:")]),e._v(" "),r("p",[r("strong",[e._v("I already have a drone and I just want to fly:")])]),e._v(" "),r("p",[e._v("If you have a Ready To Fly (RTF) vehicle that supports PX4:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(" explains how to update your firmware to the latest version, calibrate the main sensors (compass, gyro/IMU, airspeed etc.), and setup your remote control and safety features.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flying/"}},[e._v("Flying")]),e._v(" teaches flight essentials, including where and how to fly safely, and how to debug arming and flight issues. It also provides detailed information about flight modes.")],1)]),e._v(" "),r("p",[r("strong",[e._v("I want to build a drone with PX4 from scratch:")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v('The "supported" vehicles are listed in the '),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("Airframes Reference")]),e._v(".\nThese are vehicles that have tested and tuned configurations that you can download using "),r("em",[e._v("QGroundControl")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("If you want to build a vehicle from scratch:")]),e._v(" "),r("ul",[r("li",[e._v("Choose a frame - "),r("RouterLink",{attrs:{to:"/en/airframes/"}},[e._v("Airframe Builds")]),e._v(" lists the supported frames and provides detailed instructions for how to construct a subset of vehicles.")],1),e._v(" "),r("li",[e._v("Choose a flight controller - see "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_controller_selection.html"}},[e._v("Getting Started > Flight Controllers")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("Autopilot Hardware")]),e._v(".")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/assembly/"}},[e._v("Assembly")]),e._v(" explains how to wire up the important peripherals to your autopilot.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(" shows how to update your firmware and configure it with settings appropriate for your airframe.\nThis section also explains how to calibrate the main sensors (compass, gyro/IMU, airspeed etc.), and setup your remote control and safety features.")],1)]),e._v(" "),r("p",[e._v("Once you are ready to fly your vehicle, visit the "),r("RouterLink",{attrs:{to:"/en/flying/"}},[e._v("Flying")]),e._v(" section.")],1),e._v(" "),r("p",[r("strong",[e._v("I want to add payload or a camera:")])]),e._v(" "),r("p",[e._v("The payloads section describes how to add a camera or how to configure PX4 to enable you to deliver packages.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/payloads/"}},[e._v("Payloads")]),e._v(" describes how to integrate payloads")],1)]),e._v(" "),r("p",[r("strong",[e._v("I am modifying a supported vehicle:")])]),e._v(" "),r("p",[e._v("Modifications of the flight controller and basic sensors are covered above.\nIn order to use new sensors, or if you have made changes that significantly affect flight characteristics:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/"}},[e._v("Peripheral Hardware")]),e._v(" provides additional information about using external sensors.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(" explains how to calibrate the main sensors.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/"}},[e._v("Advanced Configuration")]),e._v(" should be used to re/fine-tune the airframe.")],1)]),e._v(" "),r("p",[r("strong",[e._v("I want to run PX4 on new hardware and extend the platform:")])]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/development/development.html"}},[e._v("Development")]),e._v(" explains how to support new airframes and types of vehicles, modify flight algorithms, add new modes, integrate new hardware, communicate with PX4 from outside the flight controller, and contribute to PX4.")],1)]),e._v(" "),r("h2",{attrs:{id:"getting-help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-help"}},[e._v("#")]),e._v(" Getting Help")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/en/contribute/support.html"}},[e._v("Support")]),e._v(" page explains how to get help from the core dev team and the wider community.")],1),e._v(" "),r("p",[e._v("Among other things it covers:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#forums-and-chat"}},[e._v("Forums where you can get help")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#diagnosing-problems"}},[e._v("Diagnosing issues")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#issue-bug-reporting"}},[e._v("How to report bugs")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#weekly-dev-call"}},[e._v("Weekly dev call")])],1)]),e._v(" "),r("h2",{attrs:{id:"reporting-bugs-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reporting-bugs-issues"}},[e._v("#")]),e._v(" Reporting Bugs & Issues")]),e._v(" "),r("p",[e._v("If you have any problems using PX4 first post them on the "),r("RouterLink",{attrs:{to:"/en/contribute/support.html#forums-and-chat"}},[e._v("support forums")]),e._v(" (as they may be caused by vehicle configuration).")],1),e._v(" "),r("p",[e._v("If directed by the development team, code issues may be raised on "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github here"),r("OutboundLink")],1),e._v(".\nWhere possible provide "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("flight logs")]),e._v(" and other information requested in the issue template.")],1),e._v(" "),r("h2",{attrs:{id:"contributing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),r("p",[e._v("Information on how to contribute to code and documentation can be found in the "),r("RouterLink",{attrs:{to:"/en/contribute/"}},[e._v("Contributing")]),e._v(" section:")],1),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/contribute/"}},[e._v("Code")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/docs.html"}},[e._v("Documentation")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/translation.html"}},[e._v("Translation")])],1)]),e._v(" "),r("h2",{attrs:{id:"translations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#translations"}},[e._v("#")]),e._v(" Translations")]),e._v(" "),r("p",[e._v("There are several "),r("RouterLink",{attrs:{to:"/en/contribute/translation.html"}},[e._v("translations")]),e._v(" of this guide.\nYou can access these from the Languages menu (top right):")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(431),alt:"Language Selector"}})]),e._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),r("p",[e._v("PX4 code is free to use and modify under the terms of the permissive\n"),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSD 3-clause license"),r("OutboundLink")],1),e._v(".\nThis documentation is licensed under "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY 4.0"),r("OutboundLink")],1),e._v(".\nFor more information see: "),r("RouterLink",{attrs:{to:"/en/contribute/licenses.html"}},[e._v("Licences")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"calendar-events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calendar-events"}},[e._v("#")]),e._v(" Calendar & Events")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("Dronecode Calendar")]),e._v(" shows important community events for platform users and developers.\nSelect the links below to display the calendar in your timezone (and to add it to your own calendar):")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Europe%2FZurich",target:"_blank",rel:"noopener noreferrer"}},[e._v("Switzerland – Zurich"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=America%2FTijuana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pacific Time – Tijuana"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Australia%2FSydney",target:"_blank",rel:"noopener noreferrer"}},[e._v("Australia – Melbourne/Sydney/Hobart"),r("OutboundLink")],1)])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Calendar defaults to CET.")])]),e._v(" "),r("iframe",{staticStyle:{"border-width":"0"},attrs:{src:"https://calendar.google.com/calendar/embed?title=Dronecode%20Calendar&mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&color=%23691426&ctz=Europe%2FZurich",width:"800",height:"600",frameborder:"0",scrolling:"no"}}),e._v(" "),r("h3",{attrs:{id:"icons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#icons"}},[e._v("#")]),e._v(" Icons")]),e._v(" "),r("p",[e._v("The following icons used in this library are licensed separately (as shown below):")]),e._v(" "),r("p",[r("img",{attrs:{src:o(322),title:"Position fix required (e.g. GPS)",width:"30px"}}),e._v(" "),r("em",[e._v("placeholder")]),e._v(" icon made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"}},[e._v("Smashicons")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v(" is licensed by "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(325),title:"Automatic mode",width:"30px"}}),e._v(" "),r("em",[e._v("camera-automatic-mode")]),e._v(" icon made by "),r("a",{attrs:{href:"http://www.freepik.com",title:"Freepik"}},[e._v("Freepik")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v(" is licensed by "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"governance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[e._v("#")]),e._v(" Governance")]),e._v(" "),r("p",[e._v("The PX4 flight stack is hosted under the governance of the "),r("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dronecode Project"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.dronecode.org/"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_dronecode.png",alt:"Dronecode Logo",width:"110px"}})]),e._v(" "),r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.linuxfoundation.org/projects"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_linux_foundation.png",alt:"Linux Foundation Logo",width:"80px"}})])]),r("div",{staticStyle:{padding:"10px"}}),r("p")])}),[],!1,null,null,null);t.default=a.exports},322:function(e,t,o){e.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"},325:function(e,t,o){e.exports=o.p+"assets/img/automatic_mode.ee3ebc1d.svg"},430:function(e,t,o){e.exports=o.p+"assets/img/logo_pro_small.e0fa34bd.png"},431:function(e,t){e.exports="data:image/png;base64,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"}}]);