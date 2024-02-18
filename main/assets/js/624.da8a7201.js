(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{3416:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"系统通知提示音"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#系统通知提示音"}},[t._v("#")]),t._v(" 系统通知提示音")]),t._v(" "),n("p",[t._v("PX4 定义了一些用于为系统状态和问题提供音频通知的 "),n("RouterLink",{attrs:{to:"/zh/getting_started/tunes.html"}},[t._v("标准音符/提示音")]),t._v("（比如系统启动，解锁成功，电池警告等）")],1),t._v(" "),n("p",[t._v("Tunes are specified using strings (in "),n("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI Music notation"),n("OutboundLink")],1),t._v(") and played by code using the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/lib/tunes",target:"_blank",rel:"noopener noreferrer"}},[t._v("tunes"),n("OutboundLink")],1),t._v(" library. The tunes library also contains the list of default system tunes - see "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/tunes/tune_definition.desc"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("PX4 还有一个模块可以用于播放（测试）默认或用户自定义音乐。")]),t._v(" "),n("p",[t._v("本主题提供了如何创建您自己的声音并添加/替换系统通知音调/乐曲的通用指导。")]),t._v(" "),n("h2",{attrs:{id:"创建乐曲"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建乐曲"}},[t._v("#")]),t._v(" 创建乐曲")]),t._v(" "),n("p",[t._v("提示音字符串使用 "),n("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI 音乐提示"),n("OutboundLink")],1),t._v(" 定义。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("More information about the format can be found in "),n("a",{attrs:{href:"https://en.wikibooks.org/wiki/QBasic/Appendix#PLAY",target:"_blank",rel:"noopener noreferrer"}},[t._v("QBasic PLAY statement"),n("OutboundLink")],1),t._v(" (Wikibooks) and has been reproduced in "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),n("OutboundLink")],1),t._v(". 这允许您编辑乐曲并在您的电脑上播放， 然后导出为 PX4 可以播放的格式。")]),t._v(" "),n("p",[t._v("创建新调节的最简单方式是使用音乐编辑器。 这允许您编辑音乐并在您的电脑上播放， 然后导出为 PX4 可以播放的格式。")]),t._v(" "),n("p",[t._v("ANSI 音乐在 ANSI BBS 系统中很受欢迎，因此最好的编辑工具是 DOS 实用程序。 On Windows, one option is to use "),n("em",[t._v("Melody Master")]),t._v(" within "),n("em",[t._v("Dosbox")]),t._v(".")]),t._v(" "),n("p",[t._v("使用软件的步骤是：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("下载 "),n("a",{attrs:{href:"http://www.dosbox.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DosBox"),n("OutboundLink")],1),t._v(" 并安装应用程序")])]),t._v(" "),n("li",[n("p",[t._v("下载 "),n("a",{attrs:{href:"ftp://archives.thebbs.org/ansi_utilities/melody21.zip"}},[t._v("Melody Master")]),t._v(" 并解压缩到新目录")])]),t._v(" "),n("li",[n("p",[t._v("Open the "),n("em",[t._v("Dosbox")]),t._v(" console")])]),t._v(" "),n("li",[n("p",[t._v("将 Melody 主目录挂载到 DosBox，如下：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" c C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path_to_directory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Melody21\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Start "),n("em",[t._v("Melody Master")]),t._v(" with the following commands")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("c:\nstart\n")])])])]),t._v(" "),n("li",[n("p",[t._v("You will then have the option to click through a few screens, then press "),n("strong",[t._v("1")]),t._v(" to display "),n("em",[t._v("Melody Master")]),t._v(": "),n("img",{attrs:{src:s(468),alt:"Melody Master 2.1"}})]),t._v(" "),n("p",[t._v("屏幕的下半部分提供了关于键盘快捷键的实用工具（箭头用于移动， 和选择笔记长度的数字等）。")])]),t._v(" "),n("li",[n("p",[t._v("当您准备好时保存音乐：")]),t._v(" "),n("ul",[n("li",[t._v("Press "),n("strong",[t._v("F2")]),t._v(" to give the tune a name and save it in the "),n("em",[t._v("/Music")]),t._v(" sub folder of your Melody Master installation.")]),t._v(" "),n("li",[t._v("按 "),n("strong",[t._v("F7")]),t._v(", 向右滚动旋钮，在输出列表选择格式，获取 ANSI。 The file will be exported to the "),n("em",[t._v("root")]),t._v(" of the Melody Master directory (with the same name and a file-type specific extension).")])])]),t._v(" "),n("li",[n("p",[t._v("打开文件。 输出可能看起来像这样：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(469),alt:"来自文件的 ANSI 输出"}})])]),t._v(" "),n("li",[n("p",[t._v("可以在 PX4 中播放的字符串是  "),n("code",[t._v("MNT")]),t._v(" 和 "),n("code",[t._v("P64")]),t._v(": "),n("code",[t._v("150L1O3DL16CL32<B>C<AEL16A")])])])]),t._v(" "),n("h2",{attrs:{id:"测试乐曲"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试乐曲"}},[t._v("#")]),t._v(" 测试乐曲")]),t._v(" "),n("p",[t._v("当您准备好在 PX4 上尝试新的乐曲时，请使用 "),n("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#tunecontrol"}},[t._v("tune_control")]),t._v(" 库。 例如，要测试我们在上面“创建的”乐曲，您应在控制台或 shell（例如 "),n("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("）上输入以下命令 ：")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("tune_control play -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150L1O3DL16CL32<B>C<AEL16A"')]),t._v("\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("开箱即用产品中，tune_control 只存在于实际硬件上（而不是模拟器）。")])])]),t._v(" "),n("h2",{attrs:{id:"正在替换已存在的乐曲"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正在替换已存在的乐曲"}},[t._v("#")]),t._v(" 正在替换已存在的乐曲")]),t._v(" "),n("p",[t._v("Tunes are defined within "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("如果你只需要替换现有的乐曲，可以在自己的 fork 中替换文件， 并更新 "),n("code",[t._v("PX4_DEFINE_TUNE")]),t._v(" 中定义的乐曲字符串。")]),t._v(" "),n("h2",{attrs:{id:"添加新乐曲"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加新乐曲"}},[t._v("#")]),t._v(" 添加新乐曲")]),t._v(" "),n("p",[t._v("待开发")])])}),[],!1,null,null,null);e.default=a.exports},468:function(t,e,s){t.exports=s.p+"assets/img/tunes_melody_master_2_1.48420adb.jpg"},469:function(t,e,s){t.exports=s.p+"assets/img/tune_musicmaker_ansi_output.99d0ff16.png"}}]);