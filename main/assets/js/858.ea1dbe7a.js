(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{3349:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"qt-creator-ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-creator-ide"}},[t._v("#")]),t._v(" Qt Creator IDE")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("Qt Creator has been replaced by "),s("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" as the officially supported (and recommended) IDE for PX4 development.")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.qt.io/download-open-source",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qt Creator"),s("OutboundLink")],1),t._v(" is a popular cross-platform open-source IDE that can be used to compile and debug PX4.")]),t._v(" "),s("h2",{attrs:{id:"qt-creator-functionality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-creator-functionality"}},[t._v("#")]),t._v(" Qt Creator Functionality")]),t._v(" "),s("p",[t._v("Qt creator offers clickable symbols, auto-completion of the complete codebase and building and flashing firmware.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(741),alt:""}})]),t._v(" "),s("p",[t._v("The video below shows how it is used.")]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/Bkk8zttWxEI",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"ide-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ide-setup"}},[t._v("#")]),t._v(" IDE Setup")]),t._v(" "),s("h3",{attrs:{id:"qt-creator-on-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-creator-on-linux"}},[t._v("#")]),t._v(" Qt Creator on Linux")]),t._v(" "),s("p",[t._v("Before starting Qt Creator, the "),s("a",{attrs:{href:"https://gitlab.kitware.com/cmake/community/-/wikis/doc/cmake/Generator-Specific-Information#codeblocks-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("project file"),s("OutboundLink")],1),t._v(" needs to be created:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/src/PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/Firmware-build\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/Firmware-build\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/PX4-Autopilot -G "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CodeBlocks - Unix Makefiles"')]),t._v("\n")])])]),s("p",[t._v("Then load the CMakeLists.txt in the root PX4-Autopilot folder via "),s("strong",[t._v("File > Open File or Project")]),t._v(" (Select the CMakeLists.txt file).")]),t._v(" "),s("p",[t._v("After loading, the "),s("strong",[t._v("play")]),t._v(" button can be configured to run the project by selecting 'custom executable' in the run target configuration and entering 'make' as executable and 'upload' as argument.")]),t._v(" "),s("h3",{attrs:{id:"qt-creator-on-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-creator-on-windows"}},[t._v("#")]),t._v(" Qt Creator on Windows")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Windows has not been tested for PX4 development with Qt Creator.")])]),t._v(" "),s("h3",{attrs:{id:"qt-creator-on-mac-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-creator-on-mac-os"}},[t._v("#")]),t._v(" Qt Creator on Mac OS")]),t._v(" "),s("p",[t._v("Before starting Qt Creator, the "),s("a",{attrs:{href:"https://gitlab.kitware.com/cmake/community/-/wikis/doc/cmake/Generator-Specific-Information#codeblocks-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("project file"),s("OutboundLink")],1),t._v(" needs to be created:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/src/PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p build/creator\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build/creator\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" -G "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CodeBlocks - Unix Makefiles"')]),t._v("\n")])])]),s("p",[t._v("That's it! Start "),s("em",[t._v("Qt Creator")]),t._v(", then complete the steps in the video below to set up the project to build.")]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/0pa0gS30zNw",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p")])}),[],!1,null,null,null);e.default=r.exports},741:function(t,e,a){t.exports=a.p+"assets/img/qtcreator.967b199e.png"}}]);