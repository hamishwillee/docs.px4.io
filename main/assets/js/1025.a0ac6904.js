(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1979:function(e,a,s){"use strict";s.r(a);var t=s(19),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"hard-fault-debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hard-fault-debugging"}},[e._v("#")]),e._v(" Hard Fault Debugging")]),e._v(" "),s("p",[e._v("A hard fault is a state when a CPU executes an invalid instruction or accesses an invalid memory address.\nThis might occur when key areas in RAM have been corrupted.")]),e._v(" "),s("h2",{attrs:{id:"video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" Video")]),e._v(" "),s("p",[e._v("The following video demonstrates hardfault debugging on PX4 using Eclipse and a JTAG debugger.\nIt was presented at the PX4 Developer Conference 2019.")]),e._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/KZkAM_PVOi0",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),e._v(" "),s("h2",{attrs:{id:"debugging-hard-faults-in-nuttx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-hard-faults-in-nuttx"}},[e._v("#")]),e._v(" Debugging Hard Faults in NuttX")]),e._v(" "),s("p",[e._v("A typical scenario that can cause a hard fault is when the processor overwrites the stack and then the processor returns to an invalid address from the stack.\nThis may be caused by a bug in code were a wild pointer corrupts the stack, or another task overwrites this task's stack.")]),e._v(" "),s("ul",[s("li",[e._v("NuttX maintains two stacks: The IRQ stack for interrupt processing and the user stack")]),e._v(" "),s("li",[e._v("The stack grows downward.\nSo the highest address in the example below is 0x20021060, the size is 0x11f4 (4596 bytes) and consequently the lowest address is 0x2001fe6c.")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("Assertion failed at file:armv7-m/up_hardfault.c line: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("184")]),e._v(" task: ekf_att_pos_estimator\nsp:     20003f90\nIRQ stack:\n  base: 20003fdc\n  size: 000002e8\n20003f80: 080d27c6 20003f90 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20021060")]),e._v(" 0809b8d5 080d288c 000000b8 08097155 00000010\n20003fa0: 20003ce0 00000003 00000000 0809bb61 0809bb4d 080a6857 e000ed24 080a3879\n20003fc0: 00000000 2001f578 080ca038 000182b8 20017cc0 0809bad1 20020c14 00000000\nsp:     20020ce8\nUser stack:\n  base: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20021060")]),e._v("\n  size: 000011f4\n20020ce0: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60000010")]),e._v(" 2001f578 2001f578 080ca038 000182b8 0808439f 2001fb88 20020d4c\n20020d00: 20020d44 080a1073 666b655b "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("65686320")]),e._v(" 205d6b63 6f6c6576 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("79746963")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("76696420")]),e._v("\n20020d20: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("65747265")]),e._v(" 63202c64 6b636568 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("63636120")]),e._v(" 63206c65 69666e6f 08020067 0805c4eb\n20020d40: 080ca9d4 0805c21b 080ca1cc 080ca9d4 385833fb 38217db9 00000000 080ca964\n20020d60: 080ca980 080ca9a0 080ca9bc 080ca9d4 080ca9fc 080caa14 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20022824")]),e._v(" 00000002\n20020d80: 2002218c 0806a30f 08069ab2 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("81000000")]),e._v(" 3f7fffec 00000000 3b4ae00c 3b12eaa6\n20020da0: 00000000 00000000 080ca010 4281fb70 20020f78 20017cc0 20020f98 20017cdc\n20020dc0: 2001ee0c 0808d7ff 080ca010 00000000 3f800000 00000000 080ca020 3aa35c4e\n20020de0: 3834d331 00000000 01010101 00000000 01010001 000d4f89 000d4f89 000f9fda\n20020e00: 3f7d8df4 3bac67ea 3ca594e6 be0b9299 40b643aa 41ebe4ed bcc04e1b 43e89c96\n20020e20: 448f3bc9 c3c50317 b4c8d827 362d3366 b49d74cf ba966159 00000000 00000000\n20020e40: 3eb4da7b 3b96b9b7 3eead66a 00000000 00000000 00000000 00000000 00000000\n20020e60: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000\n20020e80: 00000016 00000000 00000000 00010000 00000000 3c23d70a 00000000 00000000\n20020ea0: 00000000 20020f78 00000000 2001ed20 20020fa4 2001f498 2001f1a8 2001f500\n20020ec0: 2001f520 00000003 2001f170 ffffffe9 3b831ad2 3c23d70a 00000000 00000000\n20020ee0: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000\n20020f00: 00000000 00000000 00000000 00000000 2001f4f0 2001f4a0 3d093964 00000001\n20020f20: 00000000 0808ae91 20012d10 2001da40 0000260b 2001f577 2001da40 0000260b\n20020f40: 2001f1a8 08087fd7 08087f9d 080cf448 0000260b 080afab1 080afa9d 00000003\n20020f60: 2001f577 0809c577 2001ed20 2001f4d8 2001f498 0805e077 2001f568 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20024540")]),e._v("\n20020f80: 00000000 00000000 00000000 0000260b 3d093a57 00000000 2001f540 2001f4f0\n20020fa0: 0000260b 3ea5b000 3ddbf5fa 00000000 3c23d70a 00000000 00000000 000f423f\n20020fc0: 00000000 000182b8 20017cc0 2001ed20 2001f4e8 00000000 2001f120 0805ea0d\n20020fe0: 2001f090 2001f120 2001eda8 ffffffff 000182b8 00000000 00000000 00000000\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20021000")]),e._v(": 00000000 00000000 00000009 00000000 08090001 2001f93c 0000000c 00000000\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20021020")]),e._v(": 00000101 2001f96c 00000000 00000000 00000000 00000000 00000000 00000000\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20021040")]),e._v(": 00000000 00000000 00000000 00000000 00000000 0809866d 00000000 00000000\nR0: 20000f48 0a91ae0c 20020d00 20020d00 2001f578 080ca038 000182b8 20017cc0\nR8: 2001ed20 2001f4e8 2001ed20 00000005 20020d20 20020ce8 0808439f 08087c4e\nxPSR: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("61000000")]),e._v(" BASEPRI: 00000000 CONTROL: 00000000\nEXC_RETURN: ffffffe9\n")])])]),s("p",[e._v("To decode the hard fault, load the "),s("em",[e._v("exact")]),e._v(" binary into the debugger:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("arm-none-eabi-gdb build/px4_fmu-v2_default/px4_fmu-v2_default.elf\n")])])]),s("p",[e._v("Then in the GDB prompt, start with the last instructions in R8, with the first address in flash (recognizable because it starts with "),s("code",[e._v("0x080")]),e._v(", the first is "),s("code",[e._v("0x0808439f")]),e._v(").\nThe execution is left to right. So one of the last steps before the hard fault was when "),s("code",[e._v("mavlink_log.c")]),e._v(" tried to publish something,")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" info line *0x0808439f\nLine "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("77")]),e._v(" of "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../src/modules/systemlib/mavlink_log.c"')]),e._v(" starts at address 0x8084398 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("mavlink_vasprintf+3"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("6")]),e._v(">")]),e._v("\n   and ends at 0x80843a0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("mavlink_vasprintf+4"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("4")]),e._v(">")]),e._v(".\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" info line *0x08087c4e\nLine "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("311")]),e._v(" of "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../src/modules/uORB/uORBDevices_nuttx.cpp"')]),e._v("\n   starts at address 0x8087c4e "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("uORB::DeviceNode::publish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("orb_metadata const*, void*, void const*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("+"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v("\n   and ends at 0x8087c52 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("uORB::DeviceNode::publish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("orb_metadata const*, void*, void const*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("+"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("6")]),e._v(">")]),e._v(".\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);