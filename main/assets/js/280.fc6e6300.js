(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1854:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticStyle:{float:"right",padding:"10px","margin-right":"20px"}},[r("a",{attrs:{href:"https://px4.io/"}},[r("img",{attrs:{src:o(458),title:"PX4 Logo",width:"180px"}})])]),t._v(" "),r("h1",{attrs:{id:"px4-autopilot-user-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-user-guide"}},[t._v("#")]),t._v(" PX4 Autopilot User Guide")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/release-main-blue.svg",alt:"Releases"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://discuss.px4.io//",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/discuss-px4-ff69b4.svg",alt:"Discuss"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://discord.gg/dronecode",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://discordapp.com/api/guilds/1022170275984457759/widget.png?style=shield",alt:"Discord"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("PX4 is the "),r("em",[t._v("Professional Autopilot")]),t._v(".\nDeveloped by world-class developers from industry and academia, and supported by an active world wide community, it powers all kinds of vehicles from racing and cargo drones through to ground vehicles and submersibles.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("This guide contains everything you need to assemble, configure, and safely fly a PX4-based vehicle. Interested in contributing? Check out the "),r("RouterLink",{attrs:{to:"/en/development/development.html"}},[t._v("Development")]),t._v(" section.")],1)]),t._v(" "),r("h2",{attrs:{id:"how-do-i-get-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-started"}},[t._v("#")]),t._v(" How Do I Get Started?")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/getting_started/"}},[t._v("Getting Started")]),t._v(" should be read by all users!\nIt provides an overview of PX4, including features provided by the flight stack (flight modes and safety features) and the supported hardware (flight controller, vehicles, airframes, telemetry systems, RC control systems).")],1),t._v(" "),r("p",[t._v("Depending on what you want to achieve, the following tips will help you navigate through this guide:")]),t._v(" "),r("p",[r("strong",[t._v("I already have a drone and I just want to fly:")])]),t._v(" "),r("p",[t._v("If you have a Ready To Fly (RTF) vehicle that supports PX4:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(" explains how to update your firmware to the latest version, calibrate the main sensors (compass, gyro/IMU, airspeed etc.), and setup your remote control and safety features.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flying/"}},[t._v("Flying")]),t._v(" teaches flight essentials, including where and how to fly safely, and how to debug arming and flight issues. It also provides detailed information about flight modes.")],1)]),t._v(" "),r("p",[r("strong",[t._v("I want to build a drone with PX4 from scratch:")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v('The "supported" vehicles are listed in the '),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".\nThese are vehicles that have tested and tuned configurations that you can download using "),r("em",[t._v("QGroundControl")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("If you want to build a vehicle from scratch:")]),t._v(" "),r("ul",[r("li",[t._v("Choose a frame - "),r("RouterLink",{attrs:{to:"/en/airframes/"}},[t._v("Airframe Builds")]),t._v(" lists the supported frames and provides detailed instructions for how to construct a subset of vehicles.")],1),t._v(" "),r("li",[t._v("Choose a flight controller - see "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_controller_selection.html"}},[t._v("Getting Started > Flight Controllers")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("Autopilot Hardware")]),t._v(".")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/assembly/"}},[t._v("Assembly")]),t._v(" explains how to wire up the important peripherals to your autopilot.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(" shows how to update your firmware and configure it with settings appropriate for your airframe.\nThis section also explains how to calibrate the main sensors (compass, gyro/IMU, airspeed etc.), and setup your remote control and safety features.")],1)]),t._v(" "),r("p",[t._v("Once you are ready to fly your vehicle, visit the "),r("RouterLink",{attrs:{to:"/en/flying/"}},[t._v("Flying")]),t._v(" section.")],1),t._v(" "),r("p",[r("strong",[t._v("I want to add payload or a camera:")])]),t._v(" "),r("p",[t._v("The payloads section describes how to add a camera or how to configure PX4 to enable you to deliver packages.")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/payloads/"}},[t._v("Payloads")]),t._v(" describes how to integrate payloads")],1)]),t._v(" "),r("p",[r("strong",[t._v("I am modifying a supported vehicle:")])]),t._v(" "),r("p",[t._v("Modifications of the flight controller and basic sensors are covered above.\nIn order to use new sensors, or if you have made changes that significantly affect flight characteristics:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/"}},[t._v("Peripheral Hardware")]),t._v(" provides additional information about using external sensors.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(" explains how to calibrate the main sensors.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/"}},[t._v("Advanced Configuration")]),t._v(" should be used to re/fine-tune the airframe.")],1)]),t._v(" "),r("p",[r("strong",[t._v("I want to run PX4 on new hardware and extend the platform:")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/development/development.html"}},[t._v("Development")]),t._v(" explains how to support new airframes and types of vehicles, modify flight algorithms, add new modes, integrate new hardware, communicate with PX4 from outside the flight controller, and contribute to PX4.")],1)]),t._v(" "),r("h2",{attrs:{id:"getting-help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-help"}},[t._v("#")]),t._v(" Getting Help")]),t._v(" "),r("p",[t._v("The "),r("RouterLink",{attrs:{to:"/en/contribute/support.html"}},[t._v("Support")]),t._v(" page explains how to get help from the core dev team and the wider community.")],1),t._v(" "),r("p",[t._v("Among other things it covers:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#forums-and-chat"}},[t._v("Forums where you can get help")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#diagnosing-problems"}},[t._v("Diagnosing issues")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#issue-bug-reporting"}},[t._v("How to report bugs")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/support.html#weekly-dev-call"}},[t._v("Weekly dev call")])],1)]),t._v(" "),r("h2",{attrs:{id:"reporting-bugs-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reporting-bugs-issues"}},[t._v("#")]),t._v(" Reporting Bugs & Issues")]),t._v(" "),r("p",[t._v("If you have any problems using PX4 first post them on the "),r("RouterLink",{attrs:{to:"/en/contribute/support.html#forums-and-chat"}},[t._v("support forums")]),t._v(" (as they may be caused by vehicle configuration).")],1),t._v(" "),r("p",[t._v("If directed by the development team, code issues may be raised on "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github here"),r("OutboundLink")],1),t._v(".\nWhere possible provide "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[t._v("flight logs")]),t._v(" and other information requested in the issue template.")],1),t._v(" "),r("h2",{attrs:{id:"contributing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),r("p",[t._v("Information on how to contribute to code and documentation can be found in the "),r("RouterLink",{attrs:{to:"/en/contribute/"}},[t._v("Contributing")]),t._v(" section:")],1),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/contribute/"}},[t._v("Code")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/docs.html"}},[t._v("Documentation")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/contribute/translation.html"}},[t._v("Translation")])],1)]),t._v(" "),r("h2",{attrs:{id:"translations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#translations"}},[t._v("#")]),t._v(" Translations")]),t._v(" "),r("p",[t._v("There are several "),r("RouterLink",{attrs:{to:"/en/contribute/translation.html"}},[t._v("translations")]),t._v(" of this guide.\nYou can access these from the Languages menu (top right):")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(459),alt:"Language Selector"}})]),t._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),r("p",[t._v("PX4 code is free to use and modify under the terms of the permissive "),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[t._v("BSD 3-clause license"),r("OutboundLink")],1),t._v(".\nThis documentation is licensed under "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY 4.0"),r("OutboundLink")],1),t._v(".\nFor more information see: "),r("RouterLink",{attrs:{to:"/en/contribute/licenses.html"}},[t._v("Licences")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"calendar-events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calendar-events"}},[t._v("#")]),t._v(" Calendar & Events")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Dronecode Calendar")]),t._v(" shows important community events for platform users and developers.\nSelect the links below to display the calendar in your timezone (and to add it to your own calendar):")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Europe%2FZurich",target:"_blank",rel:"noopener noreferrer"}},[t._v("Switzerland – Zurich"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=America%2FTijuana",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pacific Time – Tijuana"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Australia%2FSydney",target:"_blank",rel:"noopener noreferrer"}},[t._v("Australia – Melbourne/Sydney/Hobart"),r("OutboundLink")],1)])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("The calendar default timezone is Central European Time (CET).")])]),t._v(" "),r("iframe",{staticStyle:{"border-width":"0"},attrs:{src:"https://calendar.google.com/calendar/embed?title=Dronecode%20Calendar&mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&color=%23691426&ctz=Europe%2FZurich",width:"800",height:"600",frameborder:"0",scrolling:"no"}}),t._v(" "),r("h3",{attrs:{id:"icons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#icons"}},[t._v("#")]),t._v(" Icons")]),t._v(" "),r("p",[t._v("The following icons used in this library are licensed separately (as shown below):")]),t._v(" "),r("p",[r("img",{attrs:{src:o(327),title:"Position fix required (e.g. GPS)",width:"30px"}}),t._v(" "),r("em",[t._v("placeholder")]),t._v(" icon made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"}},[t._v("Smashicons")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(332),title:"Automatic mode",width:"30px"}}),t._v(" "),r("em",[t._v("camera-automatic-mode")]),t._v(" icon made by "),r("a",{attrs:{href:"https://www.freepik.com",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"governance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[t._v("#")]),t._v(" Governance")]),t._v(" "),r("p",[t._v("The PX4 flight stack is hosted under the governance of the "),r("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode Project"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.dronecode.org/"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_dronecode.png",alt:"Dronecode Logo",width:"110px"}})]),t._v(" "),r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.linuxfoundation.org/projects"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_linux_foundation.png",alt:"Linux Foundation Logo",width:"80px"}})])]),t._v(" "),r("div",{staticStyle:{padding:"10px"}},[t._v(" ")])])}),[],!1,null,null,null);e.default=a.exports},327:function(t,e,o){t.exports=o.p+"assets/img/position_fixed.38e4a675.svg"},332:function(t,e,o){t.exports=o.p+"assets/img/automatic_mode.fd1fe75c.svg"},458:function(t,e,o){t.exports=o.p+"assets/img/logo_pro_small.cb9da21a.png"},459:function(t,e){t.exports="data:image/png;base64,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"}}]);