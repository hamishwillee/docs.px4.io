(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{2610:function(e,r,t){"use strict";t.r(r);var a=t(18),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"px4-持续集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px4-持续集成"}},[e._v("#")]),e._v(" PX4 持续集成")]),e._v(" "),t("p",[e._v("PX4 构建和测试分布在多个持续集成服务上。")]),e._v(" "),t("h2",{attrs:{id:"travis-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://travis-ci.org/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis-ci"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Travis-ci 负责通过"),t("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" QGroundControl "),t("OutboundLink")],1),e._v("刷新的官方稳定/测试/开发二进制文件。 它目前使用包含在 docker image "),t("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" px4io/px4-dev-base "),t("OutboundLink")],1),e._v("中的 GCC 4.9.3，并使用 makefile target qgc_firmware 编译 px4fmu-{v2，v4}，mindpx-v2，tap-v1。")]),e._v(" "),t("p",[e._v("Travis-ci 还有一个包含测试的 macOS px4_sitl 版本。")]),e._v(" "),t("h2",{attrs:{id:"semaphore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#semaphore"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://semaphoreci.com/px4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semaphore"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("信号量主要用于编译 Qualcomm Snapdragon 平台的更改，但也可以使用相同的"),t("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-base/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" px4io/px4-dev-base "),t("OutboundLink")],1),e._v(" docker 镜像作为 Travis-ci 的备份。 除了由 Travis-ci 编译的固件集之外，Semaphore 还为 stm32discovery 构建过程，进行编解码，运行单元测试，并验证代码样式。")]),e._v(" "),t("h2",{attrs:{id:"circleci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circleci"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://circleci.com/gh/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("CircleCI"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("CircleCI 使用 docker image "),t("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-gcc_next/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" px4io/px4-dev-nuttx-gcc_next "),t("OutboundLink")],1),e._v("测试建议的下一版 GCC，以用于稳定的固件版本。 它使用 makefile target "),t("code",[e._v("quick_check")]),e._v("，会编译 "),t("code",[e._v("px4_fmu-v4_default")]),e._v("，"),t("code",[e._v("px4_sitl_default")]),e._v("，运行测试，并验证代码样式。")])])}),[],!1,null,null,null);r.default=o.exports}}]);