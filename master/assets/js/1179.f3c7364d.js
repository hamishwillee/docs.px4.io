(window.webpackJsonp=window.webpackJsonp||[]).push([[1179],{2207:function(a,s,e){"use strict";e.r(s);var t=e(19),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"임베디드-디버깅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#임베디드-디버깅"}},[a._v("#")]),a._v(" 임베디드 디버깅")]),a._v(" "),e("h2",{attrs:{id:"편리한-콘솔-명령어"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#편리한-콘솔-명령어"}},[a._v("#")]),a._v(" 편리한 콘솔 명령어")]),a._v(" "),e("p",[a._v("시스템에 대한 통찰력을 얻기 위해 "),e("a",{attrs:{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=139629410",target:"_blank",rel:"noopener noreferrer"}},[a._v("NuttShell"),e("OutboundLink")],1),a._v("에서 사용할 수 있는 몇 가지 명령어들을 설명합니다.")]),a._v(" "),e("p",[a._v("다음 NSH 명령은 남아있는 메모리 용량을 보여줍니다:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("free")]),a._v("\n")])])]),e("p",[a._v("그리고 top 명령은 애플리케이션당 스택 사용량을 보여줍니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("top\n")])])]),e("p",[a._v("스택 사용량은 스택 색상으로 계산되므로 현재 사용량이 아니라 작업 시작 이후 최대값입니다.")]),a._v(" "),e("p",[a._v("작업 대기열에서 실행 중인 항목과 속도를 확인하려면 다음을 사용하십시오.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("work_queue status\n")])])]),e("p",[a._v("그리고 uORB 주제를 디버그하려면:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("uorb top\n")])])]),e("p",[a._v("그리고 특정 uORB 주제를 검사하려면:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("listener <topic_name>\n")])])]),e("h2",{attrs:{id:"하드웨어-오류-디버깅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-오류-디버깅"}},[a._v("#")]),a._v(" 하드웨어 오류 디버깅")]),a._v(" "),e("p",[a._v("하드웨어 오류는 CPU가 잘못된 명령을 실행하거나 잘못된 메모리 주소에 접근하는 것입니다. RAM의 주요 영역이 손상된 경우에 발생할 수 있습니다.")]),a._v(" "),e("h3",{attrs:{id:"비디오"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#비디오"}},[a._v("#")]),a._v(" 비디오")]),a._v(" "),e("p",[a._v("다음 비디오는 Eclipse와 JTAG 디버거를 사용하여 PX4에서 하드폴트 디버깅 방법을 설명합니다. PX4 개발자 컨퍼런스 2019에서 발표되었습니다.")]),a._v(" "),e("p",[a._v("@"),e("a",{attrs:{href:"https://youtu.be/KZkAM_PVOi0",target:"_blank",rel:"noopener noreferrer"}},[a._v("유투브"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"nuttx에서-하드웨어-오류-디버깅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuttx에서-하드웨어-오류-디버깅"}},[a._v("#")]),a._v(" NuttX에서 하드웨어 오류 디버깅")]),a._v(" "),e("p",[a._v("하드 폴트를 유발할 수 있는 일반적인 시나리오는 프로세서가 스택을 덮어쓴 다음 프로세서가 스택에서 잘못된 주소로 반환하는 경우입니다. 이것은 와일드 포인터가 스택을 손상시키거나, 다른 작업이 이 작업의 스택을 덮어쓰는 코드의 버그로 인하여 발생할 수 있습니다.")]),a._v(" "),e("ul",[e("li",[a._v("NuttX는 인터럽트 처리를 위한 IRQ 스택과 사용자 스택의 두 가지 스택을 유지합니다.")]),a._v(" "),e("li",[a._v("스택의 점유량은 아래로 늘어납니다. 따라서, 아래 예에서 가장 높은 주소는 0x20021060이고 크기는 0x11f4(4596바이트)이므로 가장 낮은 주소는 0x2001fe6c입니다.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Assertion failed at file:armv7-m/up_hardfault.c line: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("184")]),a._v(" task: ekf_att_pos_estimator\nsp:     20003f90\nIRQ stack:\n  base: 20003fdc\n  size: 000002e8\n20003f80: 080d27c6 20003f90 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021060")]),a._v(" 0809b8d5 080d288c 000000b8 08097155 00000010\n20003fa0: 20003ce0 00000003 00000000 0809bb61 0809bb4d 080a6857 e000ed24 080a3879\n20003fc0: 00000000 2001f578 080ca038 000182b8 20017cc0 0809bad1 20020c14 00000000\nsp:     20020ce8\nUser stack:\n  base: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021060")]),a._v("\n  size: 000011f4\n20020ce0: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("60000010")]),a._v(" 2001f578 2001f578 080ca038 000182b8 0808439f 2001fb88 20020d4c\n20020d00: 20020d44 080a1073 666b655b "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("65686320")]),a._v(" 205d6b63 6f6c6576 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("79746963")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("76696420")]),a._v("\n20020d20: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("65747265")]),a._v(" 63202c64 6b636568 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("63636120")]),a._v(" 63206c65 69666e6f 08020067 0805c4eb\n20020d40: 080ca9d4 0805c21b 080ca1cc 080ca9d4 385833fb 38217db9 00000000 080ca964\n20020d60: 080ca980 080ca9a0 080ca9bc 080ca9d4 080ca9fc 080caa14 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20022824")]),a._v(" 00000002\n20020d80: 2002218c 0806a30f 08069ab2 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("81000000")]),a._v(" 3f7fffec 00000000 3b4ae00c 3b12eaa6\n20020da0: 00000000 00000000 080ca010 4281fb70 20020f78 20017cc0 20020f98 20017cdc\n20020dc0: 2001ee0c 0808d7ff 080ca010 00000000 3f800000 00000000 080ca020 3aa35c4e\n20020de0: 3834d331 00000000 01010101 00000000 01010001 000d4f89 000d4f89 000f9fda\n20020e00: 3f7d8df4 3bac67ea 3ca594e6 be0b9299 40b643aa 41ebe4ed bcc04e1b 43e89c96\n20020e20: 448f3bc9 c3c50317 b4c8d827 362d3366 b49d74cf ba966159 00000000 00000000\n20020e40: 3eb4da7b 3b96b9b7 3eead66a 00000000 00000000 00000000 00000000 00000000\n20020e60: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000\n20020e80: 00000016 00000000 00000000 00010000 00000000 3c23d70a 00000000 00000000\n20020ea0: 00000000 20020f78 00000000 2001ed20 20020fa4 2001f498 2001f1a8 2001f500\n20020ec0: 2001f520 00000003 2001f170 ffffffe9 3b831ad2 3c23d70a 00000000 00000000\n20020ee0: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000\n20020f00: 00000000 00000000 00000000 00000000 2001f4f0 2001f4a0 3d093964 00000001\n20020f20: 00000000 0808ae91 20012d10 2001da40 0000260b 2001f577 2001da40 0000260b\n20020f40: 2001f1a8 08087fd7 08087f9d 080cf448 0000260b 080afab1 080afa9d 00000003\n20020f60: 2001f577 0809c577 2001ed20 2001f4d8 2001f498 0805e077 2001f568 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20024540")]),a._v("\n20020f80: 00000000 00000000 00000000 0000260b 3d093a57 00000000 2001f540 2001f4f0\n20020fa0: 0000260b 3ea5b000 3ddbf5fa 00000000 3c23d70a 00000000 00000000 000f423f\n20020fc0: 00000000 000182b8 20017cc0 2001ed20 2001f4e8 00000000 2001f120 0805ea0d\n20020fe0: 2001f090 2001f120 2001eda8 ffffffff 000182b8 00000000 00000000 00000000\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021000")]),a._v(": 00000000 00000000 00000009 00000000 08090001 2001f93c 0000000c 00000000\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021020")]),a._v(": 00000101 2001f96c 00000000 00000000 00000000 00000000 00000000 00000000\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021040")]),a._v(": 00000000 00000000 00000000 00000000 00000000 0809866d 00000000 00000000\nR0: 20000f48 0a91ae0c 20020d00 20020d00 2001f578 080ca038 000182b8 20017cc0\nR8: 2001ed20 2001f4e8 2001ed20 00000005 20020d20 20020ce8 0808439f 08087c4e\nxPSR: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("61000000")]),a._v(" BASEPRI: 00000000 CONTROL: 00000000\nEXC_RETURN: ffffffe9\n")])])]),e("p",[a._v("하드 오류를 디코딩하려면, "),e("em",[a._v("정확한")]),a._v(" 바이너리를 디버거에 로드합니다.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("arm-none-eabi-gdb build/px4_fmu-v2_default/px4_fmu-v2_default.elf\n")])])]),e("p",[a._v("그런 다음, GDB 프롬프트에서 플래시의 첫 번째 주소와 함께 R8의 마지막 명령으로 시작합니다("),e("code",[a._v("0x080")]),a._v("으로 시작하고 첫 번째 주소는 "),e("code",[a._v("0x0808439f")]),a._v("이기 때문에 인식 가능). 실행은 왼쪽에서 오른쪽으로 진행합니다. 따라서, 하드웨어 폴트 이전의 마지막 단계 중 하나는 "),e("code",[a._v("mavlink_log.c")]),a._v("가 무언가를 게시하려고 했을 때였습니다.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" info line *0x0808439f\nLine "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("77")]),a._v(" of "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"../src/modules/systemlib/mavlink_log.c"')]),a._v(" starts at address 0x8084398 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mavlink_vasprintf+3"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("6")]),a._v(">")]),a._v("\n   and ends at 0x80843a0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mavlink_vasprintf+4"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("4")]),a._v(">")]),a._v(".\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" info line *0x08087c4e\nLine "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("311")]),a._v(" of "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"../src/modules/uORB/uORBDevices_nuttx.cpp"')]),a._v("\n   starts at address 0x8087c4e "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("uORB::DeviceNode::publish"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("orb_metadata const*, void*, void const*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("+"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("\n   and ends at 0x8087c52 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("uORB::DeviceNode::publish"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("orb_metadata const*, void*, void const*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("+"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("6")]),a._v(">")]),a._v(".\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);