(window.webpackJsonp=window.webpackJsonp||[]).push([[1164],{2403:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-上的开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-上的开发环境"}},[s._v("#")]),s._v(" CentOS 上的开发环境")]),s._v(" "),a("p",[s._v("开发环境编译工作需要 Python 2.7.5 的支持，因此本文使用 CentOS 7 操作系统。 We hope to provide fully tested instructions with the supported toolchain in the near future. （如使用更早版本的 CentOS 则需要额外安装 python v2.7.5）。")]),s._v(" "),a("p",[s._v("The build requires Python 2.7.5. Therefore as of this writing Centos 7 should be used. (For earlier Centos releases a side-by-side install of python v2.7.5 may be done. But it is not recommended because it can break yum.)")]),s._v(" "),a("h2",{attrs:{id:"通用依赖项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用依赖项"}},[s._v("#")]),s._v(" 通用依赖项")]),s._v(" "),a("p",[s._v("The EPEL repositories are required for openocd libftdi-devel libftdi-python")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release-7-5.noarch.rpm\nyum update\nyum groupinstall “Development Tools”\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-setuptools python-numpy\neasy_install pyserial\neasy_install pexpect\neasy_install toml\neasy_install pyyaml\neasy_install cerberus\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openocd libftdi-devel libftdi-python python-argparse flex bison-devel ncurses-devel ncurses-libs autoconf texinfo libtool zlib-devel cmake vim-common\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),a("p",[s._v("You may want to also install "),a("code",[s._v("python-pip")]),s._v(" and "),a("code",[s._v("screen")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"gcc-工具链安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-工具链安装"}},[s._v("#")]),s._v(" GCC 工具链安装")]),s._v(" "),a("p",[s._v("Execute the script below to install GCC 7-2017-q4:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -jxf gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exportline")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/gcc-arm-none-eabi-7-2017-q4-major/bin:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Fxq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v('"')]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" nothing to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n")])])]),a("p",[s._v('{% include "_ninja_build_system.md" %}')]),s._v(" "),a("p",[a("strong",[s._v("Troubleshooting")])]),s._v(" "),a("p",[s._v("Check the version by entering the following command:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("arm-none-eabi-gcc --version\n")])])]),a("p",[s._v("The output should be something similar to:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("arm-none-eabi-gcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GNU Tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Arm Embedded Processors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("-2017-q4-major"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.2")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20170904")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARM/embedded-7-branch revision "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v(" Free Software Foundation, Inc.\nThis is "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" see the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" copying conditions.  There is NO\nwarranty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" not even "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])]),s._v(" "),a("h2",{attrs:{id:"ninja-build-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ninja-build-system"}},[s._v("#")]),s._v(" Ninja Build System")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ninja-build.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ninja"),a("OutboundLink")],1),s._v(" is a faster build system than "),a("em",[s._v("Make")]),s._v(" and the PX4 "),a("em",[s._v("CMake")]),s._v(" generators support it.")]),s._v(" "),a("p",[s._v("On Ubuntu Linux you can install this automatically from normal repos.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ninja-build -y\n")])])]),a("p",[s._v("Other systems may not include Ninja in the package manager. In this case an alternative is to download the binary and add it to your path:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/ninja\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/ninja\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/martine/ninja/releases/download/v1.6.0/ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exportline")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/ninja:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Fxq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v('"')]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" nothing to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.profile\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);