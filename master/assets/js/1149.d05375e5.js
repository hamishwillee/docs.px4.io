(window.webpackJsonp=window.webpackJsonp||[]).push([[1149],{2379:function(a,s,t){"use strict";t.r(s);var e=t(18),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"嵌入式调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#嵌入式调试"}},[a._v("#")]),a._v(" 嵌入式调试")]),a._v(" "),t("p",[a._v("运行 PX4 的自动驾驶仪支持通过 GDB 或 LLDB 进行调试。")]),a._v(" "),t("h2",{attrs:{id:"识别大型内存使用者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#识别大型内存使用者"}},[a._v("#")]),a._v(" 识别大型内存使用者")]),a._v(" "),t("p",[a._v("下面的命令将列出最大的静态分配：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arm-none-eabi-nm --size-sort --print-size --radix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dec build/px4_fmu-v2_default/px4_fmu-v2_default.elf "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" [bBdD] "')]),a._v("\n")])])]),t("p",[a._v("此 NSH 命令提供剩余的可用内存：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("free")]),a._v("\n")])])]),t("p",[a._v("顶部命令显示每个应用程序的堆栈使用情况：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("top\n")])])]),t("p",[a._v("堆栈使用情况是使用堆栈着色计算的，因此不是当前的使用情况，而是任务开始以来的最大值。")]),a._v(" "),t("h3",{attrs:{id:"堆分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆分配"}},[a._v("#")]),a._v(" 堆分配")]),a._v(" "),t("p",[a._v("动态堆分配可以在 SITL 中的 POSIX 上跟踪，"),t("a",{attrs:{href:"https://github.com/gperftools/gperftools",target:"_blank",rel:"noopener noreferrer"}},[a._v("gperftools"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"安装说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装说明"}},[a._v("#")]),a._v(" 安装说明")]),a._v(" "),t("h5",{attrs:{id:"ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[a._v("#")]),a._v(" Ubuntu：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" google-perftools libgoogle-perftools-dev\n")])])]),t("h4",{attrs:{id:"启动堆分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动堆分析"}},[a._v("#")]),a._v(" 启动堆分析")]),a._v(" "),t("p",[a._v("首先，构建固件，如下所示：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default\n")])])]),t("p",[a._v("启动 jmavsim："),t("code",[a._v("./Tools/jmavsim_run.sh")])]),a._v(" "),t("p",[a._v("在另一个终端输入：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build/px4_sitl_default/tmp\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HEAPPROFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/tmp/heapprofile.hprof\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HEAP_PROFILE_TIME_INTERVAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("\n")])])]),t("p",[a._v("输入内容取决于你的系统：")]),a._v(" "),t("h5",{attrs:{id:"fedora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fedora"}},[a._v("#")]),a._v(" Fedora：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_PRELOAD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/lib64/libtcmalloc.so "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/src/firmware/posix/px4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/posix-configs/SITL/init/lpe/iris\npprof --pdf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/src/firmware/posix/px4 /tmp/heapprofile.hprof.0001.heap "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" heap.pdf \n")])])]),t("h5",{attrs:{id:"ubuntu-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-2"}},[a._v("#")]),a._v(" Ubuntu：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LD_PRELOAD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/lib/libtcmalloc.so "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/src/firmware/posix/px4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/posix-configs/SITL/init/lpe/iris\ngoogle-pprof --pdf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/src/firmware/posix/px4 /tmp/heapprofile.hprof.0001.heap "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" heap.pdf \n")])])]),t("p",[a._v("这会生成一个带堆分配示意图的 Pdf。 图中的数字会一直是0，因为单位是 MB。 可以看百分比。 这显示出（节点及子树的）活动内存，意味着最终内存依然在使用。")]),a._v(" "),t("p",[a._v("更多详情参见 "),t("a",{attrs:{href:"https://htmlpreview.github.io/?https://github.com/gperftools/gperftools/blob/master/docs/heapprofile.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("gperftools 文档"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"调试-nuttx-的硬件故障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试-nuttx-的硬件故障"}},[a._v("#")]),a._v(" 调试 Nuttx 的硬件故障")]),a._v(" "),t("p",[a._v("A hard fault is a state when a CPU executes an invalid instruction or accesses an invalid memory address. 这是一个内存关键区域被损坏而导致错误的典型案例。")]),a._v(" "),t("h3",{attrs:{id:"视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[a._v("#")]),a._v(" 视频")]),a._v(" "),t("p",[a._v("The following video demonstrates hardfault debugging on PX4 using Eclipse and a JTAG debugger. It was presented at the PX4 Developer Conference 2019.")]),a._v(" "),t("p",[a._v("@{% youtube %}")]),a._v(" "),t("h3",{attrs:{id:"调试-nuttx-的硬件故障-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试-nuttx-的硬件故障-2"}},[a._v("#")]),a._v(" 调试 Nuttx 的硬件故障")]),a._v(" "),t("p",[a._v("A typical scenario that can cause a hard fault is when the processor overwrites the stack and then the processor returns to an invalid address from the stack. This may be caused by a bug in code were a wild pointer corrupts the stack, or another task overwrites this task's stack.")]),a._v(" "),t("ul",[t("li",[a._v("Nuttx 维护两个堆栈：用于中断处理的 IRQ 堆栈和用户堆栈")]),a._v(" "),t("li",[a._v("堆栈向下增长。 所以下面示例中的最高地址是 0x20021060，大小为 0x11f4 （4596 字节），因而最低地址为0x2001f6c。")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("Assertion failed at file:armv7-m/up_hardfault.c line: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("184")]),a._v(" task: ekf_att_pos_estimator\nsp:     20003f90\nIRQ stack:\n  base: 20003fdc\n  size: 000002e8\n20003f80: 080d27c6 20003f90 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021060")]),a._v(" 0809b8d5 080d288c 000000b8 08097155 00000010\n20003fa0: 20003ce0 00000003 00000000 0809bb61 0809bb4d 080a6857 e000ed24 080a3879\n20003fc0: 00000000 2001f578 080ca038 000182b8 20017cc0 0809bad1 20020c14 00000000\nsp:     20020ce8\nUser stack:\n  base: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021060")]),a._v("\n  size: 000011f4\n20020ce0: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("60000010")]),a._v(" 2001f578 2001f578 080ca038 000182b8 0808439f 2001fb88 20020d4c\n20020d00: 20020d44 080a1073 666b655b "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("65686320")]),a._v(" 205d6b63 6f6c6576 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("79746963")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("76696420")]),a._v("\n20020d20: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("65747265")]),a._v(" 63202c64 6b636568 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("63636120")]),a._v(" 63206c65 69666e6f 08020067 0805c4eb\n20020d40: 080ca9d4 0805c21b 080ca1cc 080ca9d4 385833fb 38217db9 00000000 080ca964\n20020d60: 080ca980 080ca9a0 080ca9bc 080ca9d4 080ca9fc 080caa14 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20022824")]),a._v(" 00000002\n20020d80: 2002218c 0806a30f 08069ab2 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("81000000")]),a._v(" 3f7fffec 00000000 3b4ae00c 3b12eaa6\n20020da0: 00000000 00000000 080ca010 4281fb70 20020f78 20017cc0 20020f98 20017cdc\n20020dc0: 2001ee0c 0808d7ff 080ca010 00000000 3f800000 00000000 080ca020 3aa35c4e\n20020de0: 3834d331 00000000 01010101 00000000 01010001 000d4f89 000d4f89 000f9fda\n20020e00: 3f7d8df4 3bac67ea 3ca594e6 be0b9299 40b643aa 41ebe4ed bcc04e1b 43e89c96\n20020e20: 448f3bc9 c3c50317 b4c8d827 362d3366 b49d74cf ba966159 00000000 00000000\n20020e40: 3eb4da7b 3b96b9b7 3eead66a 00000000 00000000 00000000 00000000 00000000\n20020e60: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000\n20020e80: 00000016 00000000 00000000 00010000 00000000 3c23d70a 00000000 00000000\n20020ea0: 00000000 20020f78 00000000 2001ed20 20020fa4 2001f498 2001f1a8 2001f500\n20020ec0: 2001f520 00000003 2001f170 ffffffe9 3b831ad2 3c23d70a 00000000 00000000\n20020ee0: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000\n20020f00: 00000000 00000000 00000000 00000000 2001f4f0 2001f4a0 3d093964 00000001\n20020f20: 00000000 0808ae91 20012d10 2001da40 0000260b 2001f577 2001da40 0000260b\n20020f40: 2001f1a8 08087fd7 08087f9d 080cf448 0000260b 080afab1 080afa9d 00000003\n20020f60: 2001f577 0809c577 2001ed20 2001f4d8 2001f498 0805e077 2001f568 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20024540")]),a._v("\n20020f80: 00000000 00000000 00000000 0000260b 3d093a57 00000000 2001f540 2001f4f0\n20020fa0: 0000260b 3ea5b000 3ddbf5fa 00000000 3c23d70a 00000000 00000000 000f423f\n20020fc0: 00000000 000182b8 20017cc0 2001ed20 2001f4e8 00000000 2001f120 0805ea0d\n20020fe0: 2001f090 2001f120 2001eda8 ffffffff 000182b8 00000000 00000000 00000000\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021000")]),a._v(": 00000000 00000000 00000009 00000000 08090001 2001f93c 0000000c 00000000\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021020")]),a._v(": 00000101 2001f96c 00000000 00000000 00000000 00000000 00000000 00000000\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20021040")]),a._v(": 00000000 00000000 00000000 00000000 00000000 0809866d 00000000 00000000\nR0: 20000f48 0a91ae0c 20020d00 20020d00 2001f578 080ca038 000182b8 20017cc0\nR8: 2001ed20 2001f4e8 2001ed20 00000005 20020d20 20020ce8 0808439f 08087c4e\nxPSR: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("61000000")]),a._v(" BASEPRI: 00000000 CONTROL: 00000000\nEXC_RETURN: ffffffe9\n")])])]),t("p",[a._v("{% endyoutube %}")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arm-none-eabi-gdb build/px4_fmu-v2_default/px4_fmu-v2_default.elf\n")])])]),t("p",[a._v("Then in the GDB prompt, start with the last instructions in R8, with the first address in flash (recognizable because it starts with "),t("code",[a._v("0x080")]),a._v(", the first is "),t("code",[a._v("0x0808439f")]),a._v("). The execution is left to right. So one of the last steps before the hard fault was when "),t("code",[a._v("mavlink_log.c")]),a._v(" tried to publish something,")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" info line *0x0808439f\nLine "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("77")]),a._v(" of "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"../src/modules/systemlib/mavlink_log.c"')]),a._v(" starts at address 0x8084398 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mavlink_vasprintf+3"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("6")]),a._v(">")]),a._v("\n   and ends at 0x80843a0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("mavlink_vasprintf+4"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("4")]),a._v(">")]),a._v(".\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" info line *0x08087c4e\nLine "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("311")]),a._v(" of "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"../src/modules/uORB/uORBDevices_nuttx.cpp"')]),a._v("\n   starts at address 0x8087c4e "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("uORB::DeviceNode::publish"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("orb_metadata const*, void*, void const*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("+"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("\n   and ends at 0x8087c52 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("uORB::DeviceNode::publish"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("orb_metadata const*, void*, void const*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("+"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("6")]),a._v(">")]),a._v(".\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);