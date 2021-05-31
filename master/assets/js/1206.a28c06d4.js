(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{2470:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"centos-上的开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-上的开发环境"}},[t._v("#")]),t._v(" CentOS 上的开发环境")]),t._v(" "),a("p",[t._v("开发环境编译工作需要 Python 2.7.5 的支持，因此本文使用 CentOS 7 操作系统。 See "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support! （如使用更早版本的 CentOS 则需要额外安装 python v2.7.5）。")],1),t._v(" "),a("p",[t._v("The build requires Python 2.7.5. Therefore as of this writing Centos 7 should be used. (For earlier Centos releases a side-by-side install of python v2.7.5 may be done. But it is not recommended because it can break yum.)")]),t._v(" "),a("h2",{attrs:{id:"通用依赖项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用依赖项"}},[t._v("#")]),t._v(" 通用依赖项")]),t._v(" "),a("p",[t._v("The EPEL repositories are required for openocd libftdi-devel libftdi-python")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release-7-5.noarch.rpm\nyum update\nyum groupinstall “Development Tools”\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-setuptools python-numpy\neasy_install pyserial\neasy_install pexpect\neasy_install toml\neasy_install pyyaml\neasy_install cerberus\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openocd libftdi-devel libftdi-python python-argparse flex bison-devel ncurses-devel ncurses-libs autoconf texinfo libtool zlib-devel cmake vim-common\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("You may want to also install "),a("code",[t._v("python-pip")]),t._v(" and "),a("code",[t._v("screen")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"gcc-工具链安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-工具链安装"}},[t._v("#")]),t._v(" GCC 工具链安装")]),t._v(" "),a("p",[t._v("Execute the script below to install GCC 7-2017-q4:")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("This version of GCC is out of date. At time of writing the current version on Ubuntu is "),a("code",[t._v("9-2020-q2-update")]),t._v(" (see  "),a("a",{attrs:{href:"https://github.com/PX4/PX4-containers/blob/master/docker/Dockerfile_nuttx-focal#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("focal nuttx docker file"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jxf gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("exportline")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/gcc-arm-none-eabi-7-2017-q4-major/bin:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Fxq "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v('"')]),t._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" nothing to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("popd")]),t._v("\n")])])]),a("p",[t._v("Now restart your machine.")]),t._v(" "),a("p",[a("strong",[t._v("Troubleshooting")])]),t._v(" "),a("p",[t._v("Check the version by entering the following command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("arm-none-eabi-gcc --version\n")])])]),a("p",[t._v("The output should be something similar to:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("arm-none-eabi-gcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\nThis is "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\nwarranty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])]),t._v(" "),a("h2",{attrs:{id:"ninja-build-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ninja-build-system"}},[t._v("#")]),t._v(" Ninja Build System")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ninja-build.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ninja"),a("OutboundLink")],1),t._v(" is a faster build system than "),a("em",[t._v("Make")]),t._v(" and the PX4 "),a("em",[t._v("CMake")]),t._v(" generators support it.")]),t._v(" "),a("p",[t._v("On Ubuntu Linux you can install this automatically from normal repos.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ninja-build -y\n")])])]),a("p",[t._v("Other systems may not include Ninja in the package manager. In this case an alternative is to download the binary and add it to your path:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/martine/ninja/releases/download/v1.6.0/ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ninja-linux.zip\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("exportline")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Fxq "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v('"')]),t._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" nothing to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ~/.profile\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);