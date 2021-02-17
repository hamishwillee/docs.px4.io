(window.webpackJsonp=window.webpackJsonp||[]).push([[870],{1810:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"px4-continuous-integration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-continuous-integration"}},[e._v("#")]),e._v(" PX4 Continuous Integration")]),e._v(" "),r("p",[e._v("PX4 builds and testing are spread out over multiple continuous integration services.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("This information is very out of date.")])]),e._v(" "),r("h2",{attrs:{id:"travis-ci"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci"}},[e._v("#")]),e._v(" Travis-ci")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://travis-ci.org/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis-ci"),r("OutboundLink")],1),e._v(" is responsible for the official stable/beta/development binaries that are flashable through "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v(".\nIt currently uses GCC 4.9.3 included in the docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-base"),r("OutboundLink")],1),e._v(" and compiles px4fmu-{v2, v4}, mindpx-v2, tap-v1 with makefile target qgc_firmware.")]),e._v(" "),r("p",[e._v("Travis-ci also has a macOS px4_sitl build which includes testing.")]),e._v(" "),r("h2",{attrs:{id:"semaphore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#semaphore"}},[e._v("#")]),e._v(" Semaphore")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://semaphoreci.com/px4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semaphore"),r("OutboundLink")],1),e._v(" is primarily used to compile changes for the Qualcomm Snapdragon platform, but also serves as a backup to Travis-ci using the same "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-base"),r("OutboundLink")],1),e._v(" docker image.\nIn addition to the set of firmware compiled by Travis-ci, Semaphore also builds for the stm32discovery, crazyflie, runs unit testing, and verifies code style.")]),e._v(" "),r("h2",{attrs:{id:"circleci"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#circleci"}},[e._v("#")]),e._v(" CircleCI")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://circleci.com/gh/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("CircleCI"),r("OutboundLink")],1),e._v(" tests the proposed next version of GCC to be used for stable firmware releases using the docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-gcc_next/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-nuttx-gcc_next"),r("OutboundLink")],1),e._v(".\nIt uses the makefile target "),r("code",[e._v("quick_check")]),e._v(" which compiles "),r("code",[e._v("px4_fmu-v4_default")]),e._v(", "),r("code",[e._v("px4_sitl_default")]),e._v(", runs testing, and verifies code style.")])])}),[],!1,null,null,null);t.default=o.exports}}]);