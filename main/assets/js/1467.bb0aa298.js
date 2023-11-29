(window.webpackJsonp=window.webpackJsonp||[]).push([[1467],{2672:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"centos-개발-환경"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos-개발-환경"}},[t._v("#")]),t._v(" CentOS 개발 환경")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("This development environment is "),n("RouterLink",{attrs:{to:"/ko/advanced/community_supported_dev_env.html"}},[t._v("community supported and maintained")]),t._v(". It may or may not work with current versions of PX4.")],1),t._v(" "),n("p",[t._v("See "),n("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools supported by the core development team.")],1)]),t._v(" "),n("p",[t._v("빌드에는 Python 2.7.5가 필요합니다. 따라서, 이 글을 쓰는 시점에서 Centos 7을 사용하여야 합니다. (이전 Centos 릴리스의 경우 Python v2.7.5를 설치할 수 있습니다. 하지만 yum을 깨뜨릴 수 있으므로 권장하지 않습니다.)")]),t._v(" "),n("h2",{attrs:{id:"공통-종속성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#공통-종속성"}},[t._v("#")]),t._v(" 공통 종속성")]),t._v(" "),n("p",[t._v("EPEL 저장소는 openocd libftdi-devel libftdi-python에 필요합니다.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release-7-5.noarch.rpm\nyum update\nyum groupinstall “Development Tools”\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-setuptools python-numpy\neasy_install pyserial\neasy_install pexpect\neasy_install toml\neasy_install pyyaml\neasy_install cerberus\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openocd libftdi-devel libftdi-python python-argparse flex bison-devel ncurses-devel ncurses-libs autoconf texinfo libtool zlib-devel cmake vim-common\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[n("code",[t._v("python-pip")]),t._v("와 "),n("code",[t._v("screen")]),t._v("을 설치할 수 있습니다.")])]),t._v(" "),n("h2",{attrs:{id:"gcc-툴체인-설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gcc-툴체인-설치"}},[t._v("#")]),t._v(" GCC 툴체인 설치")]),t._v(" "),n("p",[t._v("아래 스크립트로 GCC 7-2017-q4를 설치합니다.")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("이 GCC 버전은 최신 버전이 아닙니다. At time of writing the current version on Ubuntu is "),n("code",[t._v("9-2020-q2-update")]),t._v(" (see "),n("a",{attrs:{href:"https://github.com/PX4/PX4-containers/blob/master/docker/Dockerfile_nuttx-focal#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("focal nuttx docker file"),n("OutboundLink")],1),t._v(")")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jxf gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("exportline")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH='),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/gcc-arm-none-eabi-7-2017-q4-major/bin:\\"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Fxq "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v('"')]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" nothing to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("popd")]),t._v("\n")])])]),n("p",[t._v("이제 시스템을 다시 시작하십시오.")]),t._v(" "),n("p",[n("strong",[t._v("문제 해결")])]),t._v(" "),n("p",[t._v("다음 명령을 입력하여 버전을 확인하십시오.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("arm-none-eabi-gcc --version\n")])])]),n("p",[t._v("출력 결과는 다음과 비슷하여야 합니다.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("arm-none-eabi-gcc "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nCopyright "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\nThis is "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\nwarranty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])]),t._v(" "),n("h2",{attrs:{id:"ninja-빌드-시스템"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ninja-빌드-시스템"}},[t._v("#")]),t._v(" Ninja 빌드 시스템")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://ninja-build.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ninja"),n("OutboundLink")],1),t._v(" is a faster build system than "),n("em",[t._v("Make")]),t._v(" and the PX4 "),n("em",[t._v("CMake")]),t._v(" generators support it.")]),t._v(" "),n("p",[t._v("Ubuntu Linux에서는 일반 저장소에서 자동으로 설치할 수 있습니다.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ninja-build -y\n")])])]),n("p",[t._v("다른 시스템은 패키지 관리자에 Ninja를 포함하지 않을 수 있습니다. 이 경우 대안은 바이너리를 다운로드하여 경로에 추가하는 것입니다.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/martine/ninja/releases/download/v1.6.0/ninja-linux.zip\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" ninja-linux.zip\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ninja-linux.zip\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("exportline")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH='),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja:\\"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Fxq "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v('"')]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" nothing to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ~/.profile\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);