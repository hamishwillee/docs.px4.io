(window.webpackJsonp=window.webpackJsonp||[]).push([[1196],{2224:function(t,a,n){"use strict";n.r(a);var s=n(19),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"이진-크기-프로파일링"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#이진-크기-프로파일링"}},[t._v("#")]),t._v(" 이진 크기 프로파일링")]),t._v(" "),n("p",[n("code",[t._v("bloaty_compare_master")]),t._v(" 빌드 타겟을 사용하면, 변경 사항이 코드 크기에 미치는 영향을 더 잘 이해할 수 있습니다. 사용할 때 도구 체인은 특정 펌웨어의 성공적인 최신 마스터 빌드를 다운로드하고, 이를 로컬 빌드와 비교합니다(바이너리용 "),n("a",{attrs:{href:"https://github.com/google/bloaty",target:"_blank",rel:"noopener noreferrer"}},[t._v("bloaty"),n("OutboundLink")],1),t._v(" 크기 프로파일러 사용).")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("code",[t._v("px4_fmu-v2_default")]),t._v("가 1MB 플래시 제한에 도달할 수 있는 변경 사항을 분석합니다.")])]),t._v(" "),n("p",[n("em",[t._v("Bloaty")]),t._v("는 경로에 있어야 하며, "),n("em",[t._v("cmake")]),t._v(" 구성시 발견되어야 합니다. PX4 "),n("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/docker/Dockerfile_nuttx-bionic",target:"_blank",rel:"noopener noreferrer"}},[t._v("도커 파일"),n("OutboundLink")],1),t._v("은 다음과 같이 "),n("em",[t._v("bloaty")]),t._v("를 설치합니다.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git clone --recursive https://github.com/google/bloaty.git /tmp/bloaty \\\n    && cd /tmp/bloaty && cmake -GNinja . && ninja bloaty && cp bloaty /usr/local/bin/ \\\n    && rm -rf /tmp/*\n")])])]),n("p",[t._v("아래 예는 "),n("code",[t._v("px4_fmu-v2_default")]),t._v("에서 "),n("em",[t._v("mpu9250")]),t._v(" 드라이버를 제거할 때의 영향을 확인할 수 있는 방법을 보여줍니다. 먼저 드라이버없이 로컬로 빌드를 설정합니다.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v(" % "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --git a/boards/px4/fmu-v2/default.cmake b/boards/px4/fmu-v2/default.cmake\nindex 40d7778"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("2ce7972 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v("\n--- a/boards/px4/fmu-v2/default.cmake\n+++ b/boards/px4/fmu-v2/default.cmake\n@@ -36,7 +36,7 @@ px4_add_board"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                imu/l3gd20\n                imu/lsm303d\n                imu/mpu6000\n-               imu/mpu9250\n+               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#imu/mpu9250")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#iridiumsbd")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#irlock")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#magnetometer # all available magnetometer drivers")]),t._v("\n")])])]),n("p",[t._v("그런 다음, 비교할 대상 빌드를 지정하여 make 대상을 사용합니다(이 경우 "),n("code",[t._v("px4_fmu-v2_default")]),t._v(").")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("% "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v2_default bloaty_compare_master\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n     VM SIZE                                                                                        FILE SIZE\n --------------                                                                                  --------------\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250::check_null_data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unsigned int*, unsigned char"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                               -52  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250::test_error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                -52  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -52 MPU9250_gyro::MPU9250_gyro"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250*, char const*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                    -52  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -56 mpu9250::info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250_BUS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                           -56  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     -56 mpu9250::regdump"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MPU9250_BUS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                        -56  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                                        -336  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -344 MPU9250_mag::_measure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ak8963_regs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                  -344  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -684 MPU9250::MPU9250"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device::Device*, device::Device*, char const*, char const*, cha    -684  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    -684 MPU9250::init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                     -684  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   -1000 MPU9250::measure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                                                 -1000  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n -41.3%   -1011 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),t._v(" Others"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                                                        -1011 -41.3%\n  -1.0% -1.05Ki "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unmapped"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                                                                       +24.2Ki  +0.2%\n  -1.0% -10.3Ki TOTAL                                                                            +14.9Ki  +0.1%\n")])])]),n("p",[t._v("이것은 "),n("code",[t._v("px4_fmu-v2_default")]),t._v("에서 "),n("em",[t._v("mpu9250")]),t._v("을 제거하면 10.3kB의 플래시를 절약할 수 있음을 보여줍니다. 또한 "),n("em",[t._v("mpu9250")]),t._v(" 드라이버의 여러 조각 크기를 보여줍니다.")])])}),[],!1,null,null,null);a.default=e.exports}}]);