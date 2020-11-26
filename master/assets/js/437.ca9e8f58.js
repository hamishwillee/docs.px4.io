(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{2236:function(t,e,r){"use strict";r.r(e);var s=r(18),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"系统通知提示音"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统通知提示音"}},[t._v("#")]),t._v(" 系统通知提示音")]),t._v(" "),s("p",[t._v("PX4 定义了一些用于为系统状态和问题提供音频通知的 "),s("RouterLink",{attrs:{to:"/zh/getting_started/tunes.html"}},[t._v("标准音符/提示音")]),t._v("（比如系统启动，解锁成功，电池警告等）")],1),t._v(" "),s("p",[t._v("提示音使用字符串来指定（"),s("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI 音乐通知"),s("OutboundLink")],1),t._v("），并使用 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/lib/tunes",target:"_blank",rel:"noopener noreferrer"}},[t._v("tunes"),s("OutboundLink")],1),t._v(" 库播放这些编码。 乐曲库也包含默认系统调节列表——见 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/tunes/tune_definition.desc"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("PX4还有一个模块可以用于播放（测试）默认或用户自定义音乐。")]),t._v(" "),s("p",[t._v("本主题提供了如何创建您自己的声音并添加/替换系统通知音调/乐曲的通用指导。")]),t._v(" "),s("h2",{attrs:{id:"创建乐曲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建乐曲"}},[t._v("#")]),t._v(" 创建乐曲")]),t._v(" "),s("p",[t._v("提示音字符串使用 "),s("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI 音乐提示"),s("OutboundLink")],1),t._v(" 定义。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip")]),t._v(" 关于格式的更多信息见 "),s("a",{attrs:{href:"https://en.wikibooks.org/wiki/QBasic/Appendix#PLAY",target:"_blank",rel:"noopener noreferrer"}},[t._v("QBasic PLAY 声明"),s("OutboundLink")],1),t._v("（Wikibooks），而且在"),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),s("OutboundLink")],1),t._v("文件里面也有说明。")])]),t._v(" "),s("p",[t._v("创建新乐曲的最简单方式是使用音乐编辑器。 这允许您编辑乐曲并在您的电脑上播放， 然后导出为 PX4 可以播放的格式。")]),t._v(" "),s("p",[t._v("ANSI 音乐在 ANSI BBS 系统中很受欢迎，因此最好的编辑工具是 DOS 实用程序。 在 Windows 上，一个选项是在 "),s("em",[t._v("Dosbox")]),t._v(" 内使用 "),s("em",[t._v("Melody Master")]),t._v("。")]),t._v(" "),s("p",[t._v("使用软件的步骤是：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载 "),s("a",{attrs:{href:"http://www.dosbox.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DosBox"),s("OutboundLink")],1),t._v(" 并安装应用程序")])]),t._v(" "),s("li",[s("p",[t._v("下载 "),s("a",{attrs:{href:"ftp://archives.thebbs.org/ansi_utilities/melody21.zip"}},[t._v("Melody Master")]),t._v(" 并解压缩到新目录")])]),t._v(" "),s("li",[s("p",[t._v("打开 "),s("em",[t._v("Dosbox")]),t._v(" 控制台")])]),t._v(" "),s("li",[s("p",[t._v("将 Melody 主目录挂载到 DosBox，如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mount c C:\\<path_to_directory\\Melody21\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用以下命令启动 "),s("em",[t._v("Melody Master")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("c:\nstart\n")])])])]),t._v(" "),s("li",[s("p",[t._v("您可以选择点击略过几个画面，然后按 "),s("strong",[t._v("1")]),t._v(" 显示"),s("em",[t._v("Melody Master")]),t._v("： "),s("img",{attrs:{src:r(433),alt:"Melody Master 2.1"}})]),t._v(" "),s("p",[t._v("屏幕的下半部分提供了关于键盘快捷键的实用工具（箭头用于移动， 和选择笔记长度的数字等）。")])]),t._v(" "),s("li",[s("p",[t._v("当您准备好时保存音乐：")]),t._v(" "),s("ul",[s("li",[t._v("按 "),s("strong",[t._v("F2")]),t._v(" 以在您的 Melody 安装目录 "),s("em",[t._v("/Music")]),t._v(" 子文件夹中给乐曲命名并保存。")]),t._v(" "),s("li",[t._v("按 "),s("strong",[t._v("F7")]),t._v(", 向右滚动旋钮，在输出列表选择格式，获取 ANSI。 文件将导出到 Melody 主目录的 "),s("em",[t._v("root")]),t._v("（具有相同名称和文件类型特定扩展名）。")])])]),t._v(" "),s("li",[s("p",[t._v("打开文件。 内容应该像这样：")]),t._v(" "),s("p",[s("img",{attrs:{src:r(434),alt:"ANSI Output from file"}})])]),t._v(" "),s("li",[s("p",[t._v("可以在 PX4 中播放的字符串是  "),s("code",[t._v("MNT")]),t._v(" 和 "),s("code",[t._v("P64")]),t._v(": "),s("code",[t._v("150L1O3DL16CL32<B>C<AEL16A")])])])]),t._v(" "),s("h2",{attrs:{id:"测试乐曲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试乐曲"}},[t._v("#")]),t._v(" 测试乐曲")]),t._v(" "),s("p",[t._v("当您准备好在 PX4 上尝试新的乐曲时，请使用 "),s("RouterLink",{attrs:{to:"/zh/middleware/modules_system.html#tunecontrol"}},[t._v("tune_control")]),t._v(" 库。 例如，要测试我们在上面“创建的”乐曲，您应在控制台或 shell（例如 "),s("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("）上输入以下命令 ：")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("tune_control play -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150L1O3DL16CL32<B>C<AEL16A"')]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("Note")]),t._v(" 开箱即用产品中，tune_control 只存在于实际硬件上（而不是模拟器）。")])]),t._v(" "),s("h2",{attrs:{id:"正在替换已存在的乐曲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正在替换已存在的乐曲"}},[t._v("#")]),t._v(" 正在替换已存在的乐曲")]),t._v(" "),s("p",[t._v("乐曲定义在 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("如果你只需要替换现有的乐曲，可以在自己的 fork 中替换文件， 并更新 "),s("code",[t._v("PX4_DEFINE_TUNE")]),t._v(" 中定义的乐曲字符串。")]),t._v(" "),s("h2",{attrs:{id:"添加新乐曲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加新乐曲"}},[t._v("#")]),t._v(" 添加新乐曲")]),t._v(" "),s("p",[t._v("待开发")])])}),[],!1,null,null,null);e.default=_.exports},433:function(t,e,r){t.exports=r.p+"assets/img/tunes_melody_master_2_1.48420adb.jpg"},434:function(t,e,r){t.exports=r.p+"assets/img/tune_musicmaker_ansi_output.99d0ff16.png"}}]);