(window.webpackJsonp=window.webpackJsonp||[]).push([[1081],{2031:function(n,e,a){"use strict";a.r(e);var t=a(19),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"maintenance-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maintenance-notes"}},[n._v("#")]),n._v(" Maintenance notes")]),n._v(" "),a("p",[n._v("This picks and describes some tools to help analyze the state of the codebase and support its maintenance.")]),n._v(" "),a("h2",{attrs:{id:"analyze-churn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analyze-churn"}},[n._v("#")]),n._v(" Analyze churn")]),n._v(" "),a("p",[n._v("The amount of churn, so the number of changes done to a file can be an indicator which files/parts might need refactoring.")]),n._v(" "),a("p",[n._v("To find churn metrics a tool such as "),a("a",{attrs:{href:"https://github.com/danmayer/churn",target:"_blank",rel:"noopener noreferrer"}},[n._v("Churn"),a("OutboundLink")],1),n._v(" can be used:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("gem install churn\n")])])]),a("p",[n._v("An example output as of "),a("code",[n._v("v1.6.0-rc2")]),n._v(" would be:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('cd src/PX4-Autopilot\nchurn --start_date "6 months ago"\n**********************************************************************\n* Revision Changes\n**********************************************************************\nFiles\n+------------------------------------------+\n| file                                     |\n+------------------------------------------+\n| src/modules/navigator/mission.cpp        |\n| src/modules/navigator/navigator_main.cpp |\n| src/modules/navigator/rtl.cpp            |\n+------------------------------------------+\n\n\n\n**********************************************************************\n* Project Churn\n**********************************************************************\n\nFiles\n+---------------------------------------------------------------------------+---------------+\n| file_path                                                                 | times_changed |\n+---------------------------------------------------------------------------+---------------+\n| src/modules/mc_pos_control/mc_pos_control_main.cpp                        | 107           |\n| src/modules/commander/commander.cpp                                       | 67            |\n| ROMFS/px4fmu_common/init.d/rcS                                            | 52            |\n| Makefile                                                                  | 49            |\n| src/drivers/px4fmu/fmu.cpp                                                | 47            |\n| ROMFS/px4fmu_common/init.d/rc.sensors                                     | 40            |\n| src/drivers/boards/aerofc-v1/board_config.h                               | 31            |\n| src/modules/logger/logger.cpp                                             | 29            |\n| src/modules/navigator/navigator_main.cpp                                  | 28            |\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);