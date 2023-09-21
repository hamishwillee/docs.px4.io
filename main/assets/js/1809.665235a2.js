(window.webpackJsonp=window.webpackJsonp||[]).push([[1809],{3304:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"binary-size-profiling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binary-size-profiling"}},[t._v("#")]),t._v(" Binary Size Profiling")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("bloaty_compare_master")]),t._v(" build target allows you to get a better understanding of the impact of changes on code size. When it is used, the toolchain downloads the latest successful master build of a particular firmware and compares it to the local build (using the "),s("a",{attrs:{href:"https://github.com/google/bloaty",target:"_blank",rel:"noopener noreferrer"}},[t._v("bloaty"),s("OutboundLink")],1),t._v(" size profiler for binaries).")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("This can help analyse changes that (may) cause "),s("code",[t._v("px4_fmu-v2_default")]),t._v(" to hit the 1MB flash limit.")])]),t._v(" "),s("p",[s("em",[t._v("Bloaty")]),t._v(" must be in your path and found at "),s("em",[t._v("cmake")]),t._v(" configure time. The PX4 "),s("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/docker/Dockerfile_nuttx-bionic",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker files"),s("OutboundLink")],1),t._v(" install "),s("em",[t._v("bloaty")]),t._v(" as shown:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone --recursive https://github.com/google/bloaty.git /tmp/bloaty \\\n    && cd /tmp/bloaty && cmake -GNinja . && ninja bloaty && cp bloaty /usr/local/bin/ \\\n    && rm -rf /tmp/*\n")])])]),s("p",[t._v("The example below shows how you might see the impact of removing the "),s("em",[t._v("mpu9250")]),t._v(" driver from "),s("code",[t._v("px4_fmu-v2_default")]),t._v(". First it locally sets up a build without the driver:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v(" % "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/boards/px4/fmu-v2/default.px4board b/boards/px4/fmu-v2/default.px4board\nindex 40d7778"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("2ce7972 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/boards/px4/fmu-v2/default.px4board\n+++ b/boards/px4/fmu-v2/default.px4board\n@@ -36,7 +36,7 @@\n-               "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CONFIG_DRIVERS_IMU_INVENSENSE_MPU9250")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("y\n+               "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CONFIG_DRIVERS_IMU_INVENSENSE_MPU9250")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n\n")])])]),s("p",[t._v("Then use the make target, specifying the target build to compare ("),s("code",[t._v("px4_fmu-v2_default")]),t._v(" in this case):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("% "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v2_default bloaty_compare_master\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n     VM SIZE                                                                                        FILE SIZE\n --------------                                                                                  --------------\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250::check_null_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsigned int*, unsigned char"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                               -52  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250::test_error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                -52  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250_gyro::MPU9250_gyro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250*, char const*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                    -52  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -56 mpu9250::info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250_BUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                           -56  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -56 mpu9250::regdump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250_BUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                        -56  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                                        -336  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -344 MPU9250_mag::_measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ak8963_regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                  -344  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -684 MPU9250::MPU9250"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device::Device*, device::Device*, char const*, char const*, cha    -684  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -684 MPU9250::init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                     -684  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   -1000 MPU9250::measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                 -1000  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n -41.3%   -1011 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),t._v(" Others"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                                                        -1011 -41.3%\n  -1.0% -1.05Ki "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unmapped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                                                       +24.2Ki  +0.2%\n  -1.0% -10.3Ki TOTAL                                                                            +14.9Ki  +0.1%\n")])])]),s("p",[t._v("This shows that removing "),s("em",[t._v("mpu9250")]),t._v(" from "),s("code",[t._v("px4_fmu-v2_default")]),t._v(" would save 10.3 kB of flash. It also shows the sizes of different pieces of the "),s("em",[t._v("mpu9250")]),t._v(" driver.")])])}),[],!1,null,null,null);a.default=e.exports}}]);