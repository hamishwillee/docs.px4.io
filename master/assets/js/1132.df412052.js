(window.webpackJsonp=window.webpackJsonp||[]).push([[1132],{2365:function(t,e,s){"use strict";s.r(e);var n=s(18),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"centos-上的开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-上的开发环境"}},[t._v("#")]),t._v(" CentOS 上的开发环境")]),t._v(" "),s("blockquote",[s("p",[t._v("**注意：**本指南尚未针对最近版本的 PX4 进行测试。 我们希望在不久的将来为本工具链提供经过全面测试的安装指南。")])]),t._v(" "),s("p",[t._v("开发环境编译工作需要 Python 2.7.5 的支持，因此本文使用 CentOS 7 操作系统。 Therefore as of this writing Centos 7 should be used. （如使用更早版本的 CentOS 则需要额外安装 python v2.7.5）。 但并不建议这么做，因为这样会损坏 yum。）")]),t._v(" "),s("h2",{attrs:{id:"通用依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用依赖项"}},[t._v("#")]),t._v(" 通用依赖项")]),t._v(" "),s("p",[t._v("安装 openocd、libftdi-devel、libftdi-python 需要添加 EPEL 软件源：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" epel-release-7-5.noarch.rpm\nyum update\nyum groupinstall “Development Tools”\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-setuptools python-numpy\neasy_install pyserial\neasy_install pexpect\neasy_install toml\neasy_install pyyaml\neasy_install cerberus\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openocd libftdi-devel libftdi-python python-argparse flex bison-devel ncurses-devel ncurses-libs autoconf texinfo libtool zlib-devel cmake vim-common\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("注意：")]),t._v(" 你可能也还想安装 python-pip 和 screen。")])]),t._v(" "),s("h2",{attrs:{id:"gcc-工具链安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcc-工具链安装"}},[t._v("#")]),t._v(" GCC 工具链安装")]),t._v(" "),s("p",[t._v('{% include "_gcc_toolchain_installation.md" %}')]),t._v(" "),s("p",[t._v('{% include "_ninja_build_system.md" %}')])])}),[],!1,null,null,null);e.default=a.exports}}]);