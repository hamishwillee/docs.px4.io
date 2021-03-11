(window.webpackJsonp=window.webpackJsonp||[]).push([[1137],{2367:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"源代码管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源代码管理"}},[e._v("#")]),e._v(" 源代码管理")]),e._v(" "),r("h2",{attrs:{id:"分支模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支模型"}},[e._v("#")]),e._v(" 分支模型")]),e._v(" "),r("p",[e._v("PX4 项目使用三分支 Git 模型：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),r("OutboundLink")],1),e._v(" 默认是不稳定版本， 用于快速开发。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/beta",target:"_blank",rel:"noopener noreferrer"}},[e._v("beta"),r("OutboundLink")],1),e._v(" 经过全面测试。 它是供飞行测试人员使用的。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/stable",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable"),r("OutboundLink")],1),e._v(" 是最新发行版本。")])]),e._v(" "),r("p",[e._v("我们试着 "),r("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/rewriting-history",target:"_blank",rel:"noopener noreferrer"}},[e._v("通过重置保留线性历史"),r("OutboundLink")],1),e._v("，并且避免 "),r("a",{attrs:{href:"https://guides.github.com/introduction/flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github flow"),r("OutboundLink")],1),e._v("。 然而，由于全球团队和快速的发展，我们可能有时会进行合并。")]),e._v(" "),r("p",[e._v("要贡献新功能，"),r("a",{attrs:{href:"https://help.github.com/articles/signing-up-for-a-new-github-account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("注册Github"),r("OutboundLink")],1),e._v("，然后 "),r("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork"),r("OutboundLink")],1),e._v(" 仓库，"),r("a",{attrs:{href:"https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/",target:"_blank",rel:"noopener noreferrer"}},[e._v("创建一个新分支"),r("OutboundLink")],1),e._v("，添加您的更改，最后 "),r("a",{attrs:{href:"https://help.github.com/articles/using-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("发送拉取请求"),r("OutboundLink")],1),e._v("。 更改将在通过我们的 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[e._v("持续整合"),r("OutboundLink")],1),e._v(" 测试时合并。")]),e._v(" "),r("p",[e._v("所有代码贡献都必须在许可的 "),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSD 3 条款的许可证 "),r("OutboundLink")],1),e._v(" 下进行，不得对其使用施加任何进一步的限制。")]),e._v(" "),r("h2",{attrs:{id:"代码样式格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码样式格式"}},[e._v("#")]),e._v(" 代码样式格式")]),e._v(" "),r("p",[e._v("PX4 使用 "),r("a",{attrs:{href:"http://astyle.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("asty"),r("OutboundLink")],1),e._v(" 进行代码格式化。 有效版本是")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%202.06/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 2.06"),r("OutboundLink")],1),e._v("（推荐）")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%203.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.0"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.01"),r("OutboundLink")],1),e._v(" (recommended)")])]),e._v(" "),r("p",[e._v("一旦安装完毕，格式化可以使用 "),r("code",[e._v(".工具/astyle/check_code_style_all.sh")]),e._v("。 一个干净的 master 分支的输出应该是 "),r("code",[e._v("格式检查通过")]),e._v("。 如果做到这一点，"),r("code",[e._v("制作格式")]),e._v("将来可以自动检查和格式化所有文件。")]),e._v(" "),r("h2",{attrs:{id:"源文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源文件"}},[e._v("#")]),e._v(" 源文件")]),e._v(" "),r("p",[e._v("鼓励PX4开发者创建适当的源文档。")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Source-code documentation standards are not enforced, and the code is currently inconsistently documented. We'd like to do better!")])]),e._v(" "),r("p",[e._v("Currently we have two types of source-based documentation:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("PRINT_MODULE_*")]),e._v(" methods are used for both module run time usage instructions and for the "),r("RouterLink",{attrs:{to:"/zh/modules/modules_main.html"}},[e._v("Modules & Commands Reference")]),e._v(" in this guide.\n"),r("ul",[r("li",[e._v("API 记录在 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[e._v("源代码"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[e._v("使用的良好例子包括在 "),r("RouterLink",{attrs:{to:"/zh/apps/module_template.html"}},[e._v("应用程序/模块模板")]),e._v(" 以及从模块引用链接的文件。")],1)])],1)]),e._v(" "),r("ul",[r("li",[e._v("我们鼓励其它源文档 "),r("em",[e._v("添加必要的值")]),e._v("。")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("Developers should name C++ entities (classes, functions, variables etc.) such that their purpose can be inferred - reducing the need for explicit documentation.")])]),e._v(" "),r("ul",[r("li",[e._v("不要添加可以从 C++ 实体名称零碎地推断出的文档。")]),e._v(" "),r("li",[e._v("通常您可能想要添加关于 corner cases 和错误处理的信息。")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.doxygen.nl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doxgyen"),r("OutboundLink")],1),e._v("如果需要文件，应使用标签："),r("code",[e._v("@class")]),e._v("，"),r("code",[e._v("@file")]),e._v("，"),r("code",[e._v("@param")]),e._v("，"),r("code",[e._v("@return")]),e._v("，"),r("code",[e._v("@var")]),e._v("，"),r("code",[e._v("@see")]),e._v("，"),r("code",[e._v("@note")]),e._v("，"),r("code",[e._v("@note")]),e._v("。 一个很好的用法例子是 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/events/send_event.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/modules/events/send_event.h"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("h2",{attrs:{id:"提交和提交消息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提交和提交消息"}},[e._v("#")]),e._v(" 提交和提交消息")]),e._v(" "),r("p",[e._v("Please use descriptive, multi-paragraph commit messages for all non-trivial changes. Structure them well so they make sense in the one-line summary but also provide full detail.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('组成部分：在一个句子中解释这一更改。 修复 #1234\n\n将软件组件添加到摘要行的开头，或者通过模块名称或它的描述。\n(例如，"mc_att_ctrl" 或 "multicopter 姿态控制器")。\n\n如果问题编号作为<Fixes #1234>添加，Github 将在提交合并到主分支时自动关闭问题。\n\n电文正文可以包含几个段落。\n详细描述您的变更。 链接问题和飞行日志或与此项提交的测试结果有关联。\n\n描述这个变化以及你为什么做了修改，而不是只有代码更改内容 (很好: "为低质量GPS 接收的车辆添加额外\n安全检查"。\n坏: "添加 gps_reception_check() 函数").\n\n已上报：名字 <email@px4.io>\n')])])]),r("p",[e._v("本提交指南基于 Linux Kernel 和 Linus Torvald 维护的 "),r("a",{attrs:{href:"https://github.com/torvalds/subsurface/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目的最佳做法"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("This commit guide is based on best practices for the Linux Kernel and other "),r("a",{attrs:{href:"https://github.com/torvalds/subsurface/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[e._v("projects maintained"),r("OutboundLink")],1),e._v(" by Linus Torvalds.")])])}),[],!1,null,null,null);t.default=o.exports}}]);