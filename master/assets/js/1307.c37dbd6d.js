(window.webpackJsonp=window.webpackJsonp||[]).push([[1307],{2722:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"px4-持续集成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-持续集成"}},[e._v("#")]),e._v(" PX4 持续集成")]),e._v(" "),r("p",[e._v("PX4 构建和测试分布在多个持续集成服务上。")]),e._v(" "),r("p",[e._v("Travis-ci 负责通过"),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" QGroundControl "),r("OutboundLink")],1),e._v("刷新的官方稳定/测试/开发二进制文件。 它目前使用包含在 docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" px4io/px4-dev-base "),r("OutboundLink")],1),e._v("中的 GCC 4.9.3，并使用 makefile target qgc_firmware 编译 px4fmu-{v2，v4}，mindpx-v2，tap-v1。")]),e._v(" "),r("h2",{attrs:{id:"travis-ci"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci"}},[e._v("#")]),e._v(" Travis-ci")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://travis-ci.org/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis-ci"),r("OutboundLink")],1),e._v(" is responsible for the official stable/beta/development binaries that are flashable through "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v(". It currently uses GCC 4.9.3 included in the docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-base"),r("OutboundLink")],1),e._v(" and compiles px4fmu-{v2, v4}, mindpx-v2, tap-v1 with makefile target qgc_firmware.")]),e._v(" "),r("p",[e._v("Travis-ci also has a macOS px4_sitl build which includes testing.")]),e._v(" "),r("h2",{attrs:{id:"semaphore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#semaphore"}},[e._v("#")]),e._v(" Semaphore")]),e._v(" "),r("p",[e._v("CircleCI 使用 docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-gcc_next/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" px4io/px4-dev-nuttx-gcc_next "),r("OutboundLink")],1),e._v("测试建议的下一版 GCC，以用于稳定的固件版本。 它使用 makefile target "),r("code",[e._v("quick_check")]),e._v("，会编译 "),r("code",[e._v("px4_fmu-v4_default")]),e._v("，"),r("code",[e._v("px4_sitl_default")]),e._v("，运行测试，并验证代码样式。")]),e._v(" "),r("h2",{attrs:{id:"circleci"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#circleci"}},[e._v("#")]),e._v(" CircleCI")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://circleci.com/gh/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("CircleCI"),r("OutboundLink")],1),e._v(" tests the proposed next version of GCC to be used for stable firmware releases using the docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-gcc_next/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-nuttx-gcc_next"),r("OutboundLink")],1),e._v(". It uses the makefile target "),r("code",[e._v("quick_check")]),e._v(" which compiles "),r("code",[e._v("px4_fmu-v4_default")]),e._v(", "),r("code",[e._v("px4_sitl_default")]),e._v(", runs testing, and verifies code style.")])])}),[],!1,null,null,null);t.default=o.exports}}]);