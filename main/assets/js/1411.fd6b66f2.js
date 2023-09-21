(window.webpackJsonp=window.webpackJsonp||[]).push([[1411],{2624:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-개발-환경"}},[s._v("#")]),s._v(" CentOS 개발 환경")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("이 개발 환경은 "),a("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[s._v("지원되지 않습니다")]),s._v(". 지원되는 환경과 도구에 대한 정보는 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[s._v("도구 모음 설치")]),s._v("를 참고하십시오!")],1)]),s._v(" "),a("p",[s._v("빌드에는 Python 2.7.5가 필요합니다. 따라서, 이 글을 쓰는 시점에서 Centos 7을 사용하여야 합니다. (이전 Centos 릴리스의 경우 Python v2.7.5를 설치할 수 있습니다. 하지만 yum을 깨뜨릴 수 있으므로 권장하지 않습니다.)")]),s._v(" "),a("h2",{attrs:{id:"공통-종속성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공통-종속성"}},[s._v("#")]),s._v(" 공통 종속성")]),s._v(" "),a("p",[s._v("EPEL 저장소는 openocd libftdi-devel libftdi-python에 필요합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release-7-5.noarch.rpm\nyum update\nyum groupinstall “Development Tools”\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-setuptools python-numpy\neasy_install pyserial\neasy_install pexpect\neasy_install toml\neasy_install pyyaml\neasy_install cerberus\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openocd libftdi-devel libftdi-python python-argparse flex bison-devel ncurses-devel ncurses-libs autoconf texinfo libtool zlib-devel cmake vim-common\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),a("p",[a("code",[s._v("python-pip")]),s._v("와 "),a("code",[s._v("screen")]),s._v("을 설치할 수 있습니다.")])]),s._v(" "),a("h2",{attrs:{id:"gcc-툴체인-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-툴체인-설치"}},[s._v("#")]),s._v(" GCC 툴체인 설치")]),s._v(" "),a("p",[s._v("아래 스크립트로 GCC 7-2017-q4를 설치합니다.")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("이 GCC 버전은 최신 버전이 아닙니다. Ubuntu에서 현재 버전을 작성하는 시점은 "),a("code",[s._v("9-2020-q2-update")]),s._v("입니다("),a("a",{attrs:{href:"https://github.com/PX4/PX4-containers/blob/master/docker/Dockerfile_nuttx-focal#L28",target:"_blank",rel:"noopener noreferrer"}},[s._v("focal nuttx docker 파일"),a("OutboundLink")],1),s._v(" 참조).")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -jxf gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exportline")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/gcc-arm-none-eabi-7-2017-q4-major/bin:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Fxq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v('"')]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" nothing to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n")])])]),a("p",[s._v("이제 시스템을 다시 시작하십시오.")]),s._v(" "),a("p",[a("strong",[s._v("문제 해결")])]),s._v(" "),a("p",[s._v("다음 명령을 입력하여 버전을 확인하십시오.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("arm-none-eabi-gcc --version\n")])])]),a("p",[s._v("출력 결과는 다음과 비슷하여야 합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("arm-none-eabi-gcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GNU Tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Arm Embedded Processors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("-2017-q4-major"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.2")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20170904")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARM/embedded-7-branch revision "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v(" Free Software Foundation, Inc.\nThis is "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" see the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" copying conditions.  There is NO\nwarranty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" not even "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])]),s._v(" "),a("h2",{attrs:{id:"ninja-빌드-시스템"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ninja-빌드-시스템"}},[s._v("#")]),s._v(" Ninja 빌드 시스템")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ninja-build.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ninja"),a("OutboundLink")],1),s._v("는 "),a("em",[s._v("Make")]),s._v("보다 빠른 빌드 시스템이며, PX4 "),a("em",[s._v("CMake")]),s._v(" 생성기에서 지원합니다.")]),s._v(" "),a("p",[s._v("Ubuntu Linux에서는 일반 저장소에서 자동으로 설치할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ninja-build -y\n")])])]),a("p",[s._v("다른 시스템은 패키지 관리자에 Ninja를 포함하지 않을 수 있습니다. 이 경우 대안은 바이너리를 다운로드하여 경로에 추가하는 것입니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/ninja\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/ninja\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/martine/ninja/releases/download/v1.6.0/ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exportline")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/ninja:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Fxq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v('"')]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" nothing to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.profile\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);