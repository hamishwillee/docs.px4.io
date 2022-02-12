(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{2316:function(t,a,r){"use strict";r.r(a);var e=r(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"qt-creator-ide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qt-creator-ide"}},[t._v("#")]),t._v(" Qt Creator IDE")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Qt Creator는 PX4 개발에서 공식적으로 지원되고 권장되는 IDE인 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v("로 대체되었습니다.")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.qt.io/download-open-source",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qt Creator"),e("OutboundLink")],1),t._v("는 PX4를 컴파일하고 디버그하는 데 사용할 수 있는 널리 사용되는 크로스 플랫폼 오픈 소스 IDE입니다.")]),t._v(" "),e("h2",{attrs:{id:"qt-creator-기능"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qt-creator-기능"}},[t._v("#")]),t._v(" Qt Creator 기능")]),t._v(" "),e("p",[t._v("Qt Creator는 클릭 가능한 기호, 전체 코드베이스의 자동 완성, 펌웨어 빌드 및 플래싱을 제공합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(719),alt:""}})]),t._v(" "),e("p",[t._v("아래 비디오는 사용 방법을 보여줍니다.")]),t._v(" "),e("p",[t._v("@"),e("a",{attrs:{href:"https://www.youtube.com/watch?v=Bkk8zttWxEI&rel=0&vq=hd720",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"ide-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ide-설정"}},[t._v("#")]),t._v(" IDE 설정")]),t._v(" "),e("h3",{attrs:{id:"리눅스용-qt-creator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#리눅스용-qt-creator"}},[t._v("#")]),t._v(" 리눅스용 Qt Creator")]),t._v(" "),e("p",[t._v("Qt Creator를 시작하기 전에, "),e("a",{attrs:{href:"https://gitlab.kitware.com/cmake/community/wikis/doc/cmake/Generator-Specific-Information#codeblocks-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("프로젝트 파일"),e("OutboundLink")],1),t._v("을 생성하여야 합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/src/PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/Firmware-build\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/Firmware-build\ncmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/PX4-Autopilot -G "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CodeBlocks - Unix Makefiles"')]),t._v("\n")])])]),e("p",[t._v("그런 다음 루트 PX4-Autopilot 폴더에 CMakeLists.txt를 로드합니다. "),e("strong",[t._v("파일 > 파일 또는 프로젝트 열기")]),t._v("(CMakeLists.txt 파일 선택).")]),t._v(" "),e("p",[t._v("로드 후 "),e("strong",[t._v("재생")]),t._v(" 버튼은 실행 대상 구성에서 '사용자 정의 실행 파일'을 선택하고, 실행 파일로 'make'를, 인수로 '업로드'를 입력하여 프로젝트를 실행하도록 설정할 수 있습니다.")]),t._v(" "),e("h3",{attrs:{id:"windows용-qt-creator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows용-qt-creator"}},[t._v("#")]),t._v(" Windows용 Qt Creator")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Windows는 Qt Creator를 사용한 PX4 개발에 대해 테스트되지 않았습니다.")])]),t._v(" "),e("h3",{attrs:{id:"mac-os용-qt-creator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-os용-qt-creator"}},[t._v("#")]),t._v(" Mac OS용 Qt Creator")]),t._v(" "),e("p",[t._v("Qt Creator를 시작하기 전에, "),e("a",{attrs:{href:"https://gitlab.kitware.com/cmake/community/wikis/doc/cmake/Generator-Specific-Information#codeblocks-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("프로젝트 파일"),e("OutboundLink")],1),t._v("을 생성하여야 합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/src/PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p build/creator\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build/creator\ncmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" -G "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CodeBlocks - Unix Makefiles"')]),t._v("\n")])])]),e("p",[t._v("설정이 종료되었습니다. "),e("em",[t._v("Qt Creator")]),t._v(" 실행 후, 아래 비디오의 단계를 완료하여 빌드할 프로젝트를 설정하십시오.")]),t._v(" "),e("p",[t._v("@"),e("a",{attrs:{href:"https://www.youtube.com/watch?v=0pa0gS30zNw&rel=0&vq=hd720",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports},719:function(t,a,r){t.exports=r.p+"assets/img/qtcreator.3041e499.png"}}]);