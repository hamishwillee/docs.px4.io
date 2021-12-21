(window.webpackJsonp=window.webpackJsonp||[]).push([[1214],{2250:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Execute the script below to install GCC 7-2017-q4:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pushd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/7-2017q4/gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -jxf gcc-arm-none-eabi-7-2017-q4-major-linux.tar.bz2\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exportline")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/gcc-arm-none-eabi-7-2017-q4-major/bin:\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Fxq "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v('"')]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" nothing to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$exportline")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n")])])]),a("p",[s._v("Now restart your machine.")]),s._v(" "),a("p",[a("strong",[s._v("Troubleshooting")])]),s._v(" "),a("p",[s._v("Check the version by entering the following command:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("arm-none-eabi-gcc --version\n")])])]),a("p",[s._v("The output should be something similar to:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("arm-none-eabi-gcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GNU Tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Arm Embedded Processors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("-2017-q4-major"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.2")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20170904")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARM/embedded-7-branch revision "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v(" Free Software Foundation, Inc. This is "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" see the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" copying conditions.  There is NO\nwarranty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" not even "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);