(window.webpackJsonp=window.webpackJsonp||[]).push([[1137],{2371:function(e,t,s){"use strict";s.r(t);var n=s(18),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"centos-上的开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-上的开发环境"}},[e._v("#")]),e._v(" CentOS 上的开发环境")]),e._v(" "),s("p",[e._v("开发环境编译工作需要 Python 2.7.5 的支持，因此本文使用 CentOS 7 操作系统。 We hope to provide fully tested instructions with the supported toolchain in the near future. （如使用更早版本的 CentOS 则需要额外安装 python v2.7.5）。")]),e._v(" "),s("p",[e._v("The build requires Python 2.7.5. Therefore as of this writing Centos 7 should be used. (For earlier Centos releases a side-by-side install of python v2.7.5 may be done. But it is not recommended because it can break yum.)")]),e._v(" "),s("h2",{attrs:{id:"通用依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用依赖项"}},[e._v("#")]),e._v(" 通用依赖项")]),e._v(" "),s("p",[e._v("The EPEL repositories are required for openocd libftdi-devel libftdi-python")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" epel-release-7-5.noarch.rpm\nyum update\nyum groupinstall “Development Tools”\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" python-setuptools python-numpy\neasy_install pyserial\neasy_install pexpect\neasy_install toml\neasy_install pyyaml\neasy_install cerberus\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" openocd libftdi-devel libftdi-python python-argparse flex bison-devel ncurses-devel ncurses-libs autoconf texinfo libtool zlib-devel cmake vim-common\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("You may want to also install "),s("code",[e._v("python-pip")]),e._v(" and "),s("code",[e._v("screen")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"gcc-工具链安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcc-工具链安装"}},[e._v("#")]),e._v(" GCC 工具链安装")]),e._v(" "),s("p",[e._v('{% include "_ninja_build_system.md" %}')]),e._v(" "),s("p",[e._v('{% include "_ninja_build_system.md" %}')])])}),[],!1,null,null,null);t.default=a.exports}}]);