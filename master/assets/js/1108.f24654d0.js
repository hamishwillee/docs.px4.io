(window.webpackJsonp=window.webpackJsonp||[]).push([[1108],{2290:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"px4-지속-통합"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-지속-통합"}},[e._v("#")]),e._v(" PX4 지속 통합")]),e._v(" "),r("p",[e._v("PX4는 다중 지속 통합 서비스로 빌드와 테스트 과정을 확장할 수 있습니다.")]),e._v(" "),r("p",[e._v("Travis-ci는 "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v("을 통해 플래싱할 수 있는 바이너리를 공식 안정/베타/개발 버전으로 빌드할 수 있습니다. 도커 이미지 "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-base"),r("OutboundLink")],1),e._v(" 에서는 GCC 4.9.3을 사용하며 makefile 타켓 qgc_firmware로 px4fmu-{v2, v4}, mindpx-v2, tap-v1 펌웨어를 컴파일합니다.")]),e._v(" "),r("h2",{attrs:{id:"travis-ci"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci"}},[e._v("#")]),e._v(" Travis-ci")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://travis-ci.org/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis-ci"),r("OutboundLink")],1),e._v(" is responsible for the official stable/beta/development binaries that are flashable through "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v(". It currently uses GCC 4.9.3 included in the docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-base"),r("OutboundLink")],1),e._v(" and compiles px4fmu-{v2, v4}, mindpx-v2, tap-v1 with makefile target qgc_firmware.")]),e._v(" "),r("p",[e._v("Travis-ci also has a macOS px4_sitl build which includes testing.")]),e._v(" "),r("h2",{attrs:{id:"semaphore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#semaphore"}},[e._v("#")]),e._v(" Semaphore")]),e._v(" "),r("p",[e._v("CircleCI는 "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-gcc_next/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-nuttx-gcc_next"),r("OutboundLink")],1),e._v(" 도커 이미지를 활용하여 안정 펌웨어 릴리즈에 활용할 GCC의 다음 제안 버전을 시험합니다. 이 환경에서는 "),r("code",[e._v("px4_fmu-v4_default")]),e._v(", "),r("code",[e._v("px4_sitl_default")]),e._v("를 컴파일하고 테스트를 수행하며 코드 형식을 검증하는 "),r("code",[e._v("makefile 타겟")]),e._v("을 사용합니다.")]),e._v(" "),r("h2",{attrs:{id:"circleci"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#circleci"}},[e._v("#")]),e._v(" CircleCI")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://circleci.com/gh/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("CircleCI"),r("OutboundLink")],1),e._v(" tests the proposed next version of GCC to be used for stable firmware releases using the docker image "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-gcc_next/",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4io/px4-dev-nuttx-gcc_next"),r("OutboundLink")],1),e._v(". It uses the makefile target "),r("code",[e._v("quick_check")]),e._v(" which compiles "),r("code",[e._v("px4_fmu-v4_default")]),e._v(", "),r("code",[e._v("px4_sitl_default")]),e._v(", runs testing, and verifies code style.")])])}),[],!1,null,null,null);t.default=o.exports}}]);