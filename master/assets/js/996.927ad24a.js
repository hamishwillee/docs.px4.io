(window.webpackJsonp=window.webpackJsonp||[]).push([[996],{2024:function(t,s,n){"use strict";n.r(s);var e=n(18),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"centos-development-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos-development-environment"}},[t._v("#")]),t._v(" CentOS Development Environment")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("This development environment is "),n("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[t._v("not supported")]),t._v(". See "),n("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support!")],1)]),t._v(" "),n("p",[t._v("The build requires Python 2.7.5. Therefore as of this writing Centos 7 should be used. (For earlier Centos releases a side-by-side install of python v2.7.5 may be done. But it is not recommended because it can break yum.)")]),t._v(" "),n("h2",{attrs:{id:"common-dependencies"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#common-dependencies"}},[t._v("#")]),t._v(" Common Dependencies")]),t._v(" "),n("p",[t._v("The EPEL repositories are required for openocd libftdi-devel libftdi-python")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release-7-5.noarch.rpm\nyum update\nyum groupinstall “Development Tools”\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-setuptools python-numpy\neasy_install pyserial\neasy_install pexpect\neasy_install toml\neasy_install pyyaml\neasy_install cerberus\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openocd libftdi-devel libftdi-python python-argparse flex bison-devel ncurses-devel ncurses-libs autoconf texinfo libtool zlib-devel cmake vim-common\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("You may want to also install "),n("code",[t._v("python-pip")]),t._v(" and "),n("code",[t._v("screen")]),t._v(".")])]),t._v(" "),n("h2",{attrs:{id:"gcc-toolchain-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gcc-toolchain-installation"}},[t._v("#")]),t._v(" GCC Toolchain Installation")]),t._v(" "),n("p",[t._v("Execute the script below to install GCC 7-2017-q4:")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("This version of GCC is out of date. At time of writing the current version on Ubuntu is "),n("code",[t._v("9-2020-q2-update")]),t._v(" (see  "),n("a",{attrs:{href:"https://github.com/PX4/PX4-containers/blob/master/docker/Dockerfile_nuttx-focal#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("focal nuttx docker file"),n("OutboundLink")],1),t._v(")")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jxf gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("exportline")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH='),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/gcc-arm-none-eabi-7-2017-q4-major/bin:\\"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Fxq "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v('"')]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" nothing to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("popd")]),t._v("\n")])])]),n("p",[t._v("Now restart your machine.")]),t._v(" "),n("p",[n("strong",[t._v("Troubleshooting")])]),t._v(" "),n("p",[t._v("Check the version by entering the following command:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("arm-none-eabi-gcc --version\n")])])]),n("p",[t._v("The output should be something similar to:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("arm-none-eabi-gcc "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nCopyright "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\nThis is "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\nwarranty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])]),t._v(" "),n("h2",{attrs:{id:"ninja-build-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ninja-build-system"}},[t._v("#")]),t._v(" Ninja Build System")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://ninja-build.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ninja"),n("OutboundLink")],1),t._v(" is a faster build system than "),n("em",[t._v("Make")]),t._v(" and the PX4 "),n("em",[t._v("CMake")]),t._v(" generators support it.")]),t._v(" "),n("p",[t._v("On Ubuntu Linux you can install this automatically from normal repos.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ninja-build -y\n")])])]),n("p",[t._v("Other systems may not include Ninja in the package manager. In this case an alternative is to download the binary and add it to your path:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/martine/ninja/releases/download/v1.6.0/ninja-linux.zip\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" ninja-linux.zip\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" ninja-linux.zip\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("exportline")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export PATH='),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/ninja:\\"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -Fxq "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v('"')]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" nothing to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exportline")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ~/.profile\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);