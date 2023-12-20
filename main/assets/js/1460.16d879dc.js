(window.webpackJsonp=window.webpackJsonp||[]).push([[1460],{2661:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"이진-크기-프로파일링"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이진-크기-프로파일링"}},[t._v("#")]),t._v(" 이진 크기 프로파일링")]),t._v(" "),s("p",[s("code",[t._v("bloaty_compare_master")]),t._v(" 빌드 타겟을 사용하면, 변경 사항이 코드 크기에 미치는 영향을 더 잘 이해할 수 있습니다. 사용할 때 도구 체인은 특정 펌웨어의 성공적인 최신 마스터 빌드를 다운로드하고, 이를 로컬 빌드와 비교합니다(바이너리용 "),s("a",{attrs:{href:"https://github.com/google/bloaty",target:"_blank",rel:"noopener noreferrer"}},[t._v("bloaty"),s("OutboundLink")],1),t._v(" 크기 프로파일러 사용).")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("px4_fmu-v2_default")]),t._v("가 1MB 플래시 제한에 도달할 수 있는 변경 사항을 분석합니다.")])]),t._v(" "),s("p",[s("em",[t._v("Bloaty")]),t._v(" must be in your path and found at "),s("em",[t._v("cmake")]),t._v(" configure time. The PX4 "),s("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/docker/Dockerfile_nuttx-bionic",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker files"),s("OutboundLink")],1),t._v(" install "),s("em",[t._v("bloaty")]),t._v(" as shown:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/google/bloaty.git /tmp/bloaty "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /tmp/bloaty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cmake -GNinja "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ninja bloaty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" bloaty /usr/local/bin/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /tmp/*\n")])])]),s("p",[t._v("The example below shows how you might see the impact of removing the "),s("em",[t._v("mpu9250")]),t._v(" driver from "),s("code",[t._v("px4_fmu-v2_default")]),t._v(". 먼저 드라이버없이 로컬로 빌드를 설정합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v(" % "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/boards/px4/fmu-v2/default.cmake b/boards/px4/fmu-v2/default.cmake\nindex 40d7778"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("2ce7972 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/boards/px4/fmu-v2/default.cmake\n+++ b/boards/px4/fmu-v2/default.cmake\n@@ -36,7 +36,7 @@ px4_add_board"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                imu/l3gd20\n                imu/lsm303d\n                imu/mpu6000\n-               imu/mpu9250\n+               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#imu/mpu9250")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#iridiumsbd")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#irlock")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#magnetometer # all available magnetometer drivers")]),t._v("\n")])])]),s("p",[t._v("그런 다음, 비교할 대상 빌드를 지정하여 make 대상을 사용합니다(이 경우 "),s("code",[t._v("px4_fmu-v2_default")]),t._v(").")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("% "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v2_default bloaty_compare_master\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n     VM SIZE                                                                                        FILE SIZE\n --------------                                                                                  --------------\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250::check_null_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsigned int*, unsigned char"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                               -52  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250::test_error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                -52  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250_gyro::MPU9250_gyro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250*, char const*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                    -52  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -56 mpu9250::info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250_BUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                           -56  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -56 mpu9250::regdump"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250_BUS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                        -56  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                                        -336  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -344 MPU9250_mag::_measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ak8963_regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                  -344  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -684 MPU9250::MPU9250"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device::Device*, device::Device*, char const*, char const*, cha    -684  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -684 MPU9250::init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                     -684  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   -1000 MPU9250::measure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                 -1000  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n -41.3%   -1011 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),t._v(" Others"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                                                        -1011 -41.3%\n  -1.0% -1.05Ki "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unmapped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                                                       +24.2Ki  +0.2%\n  -1.0% -10.3Ki TOTAL                                                                            +14.9Ki  +0.1%\n")])])]),s("p",[t._v("This shows that removing "),s("em",[t._v("mpu9250")]),t._v(" from "),s("code",[t._v("px4_fmu-v2_default")]),t._v(" would save 10.3 kB of flash. It also shows the sizes of different pieces of the "),s("em",[t._v("mpu9250")]),t._v(" driver.")])])}),[],!1,null,null,null);a.default=e.exports}}]);