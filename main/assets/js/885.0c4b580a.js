(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{3500:function(t,e,n){"use strict";n.r(e);var s=n(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jlink-debug-probe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jlink-debug-probe"}},[t._v("#")]),t._v(" JLink Debug Probe")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/",target:"_blank",rel:"noopener noreferrer"}},[t._v("J-Link debug probe"),s("OutboundLink")],1),t._v(" is a closed-source, commercial hardware probe which supports almost all ARM Cortex-M devices. You need to install the "),s("a",{attrs:{href:"https://www.segger.com/downloads/jlink/",target:"_blank",rel:"noopener noreferrer"}},[t._v("J-Link drivers"),s("OutboundLink")],1),t._v(" for this probe to work:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" --post-data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accept_license_agreement=accepted"')]),t._v(" https://www.segger.com/downloads/jlink/JLink_Linux_x86_64.deb\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i JLink_Linux_x86_64.deb\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# macOS")]),t._v("\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" segger-jlink\n")])])]),s("p",[t._v("Once installed, you can start the server using:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("JLinkGDBServer -if swd -device STM32F765II\n")])])]),s("p",[t._v("It might then prompt you to update the JLink which is recommended, and then to specify which device it is communicating with. Check the docs of your autopilot for the specific device.")]),t._v(" "),s("p",[t._v("Once that's done, the GDB server should be start listening on port "),s("code",[t._v("2331")]),t._v(", e.g. like so:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("Checking target voltage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nTarget voltage: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.28")]),t._v(" V\nListening on TCP/IP port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2331")]),t._v("\nConnecting to target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nConnected to target\nWaiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" GDB connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("You can now start GDB with the exact elf file that is currently flashed on the autopilot (in a separate terminal):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("arm-none-eabi-gdb build/px4_fmu-v5_default/px4_fmu-v5_default.elf -ex "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target extended-remote :2331"')]),t._v("\n")])])]),s("p",[t._v("And now you should be connected.")]),t._v(" "),s("p",[t._v("To use an IDE instead, see the instructions for "),s("RouterLink",{attrs:{to:"/zh/debug/eclipse_jlink.html"}},[t._v("Eclipse")]),t._v(" or "),s("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html#hardware-debugging"}},[t._v("VSCode")]),t._v(". See the "),s("a",{attrs:{href:"https://pypi.org/project/emdbg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Embedded Debug Tools"),s("OutboundLink")],1),t._v(" for more advanced debug options.")],1),t._v(" "),s("p",[s("a",{attrs:{id:"segger_jlink_edu_mini"}})]),t._v(" "),s("h3",{attrs:{id:"segger-jlink-edu-mini-debug-probe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-edu-mini-debug-probe"}},[t._v("#")]),t._v(" Segger JLink EDU Mini Debug Probe")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Segger JLink EDU Mini"),s("OutboundLink")],1),t._v(" is an inexpensive and popular SWD debug probe. The probe's connector pinout looks like the image below (connect to this using an ARM 10-pin mini connector like "),s("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=SAM8796-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("FTSH-105-01-F-DV-K"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[s("img",{attrs:{src:n(712),alt:"connector_jlink_mini.png"}})]),t._v(" "),s("p",[t._v("The pin mapping to connect the J-Link Edu Mini to "),s("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" is shown below.")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"right"}},[t._v("Pin")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Signal")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("JLink")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("VREF")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Console TX")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Console RX")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("SWDIO")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("2")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("SWDCLK")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("4")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("GND")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("3, 5")])])])]),t._v(" "),s("p",[t._v("Note that none of the JLink debug probes have a built in serial connection, so you need to connect the console separately.")])])}),[],!1,null,null,null);e.default=a.exports},712:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABnAQMAAAC+W9VKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAGUExURQAAAP///6XZn90AAALeSURBVEjH3dYxT9tAFAfwVCDBUCkdO0RKpyK20iy1cHIfoV8hnbK2ZYmVFKuiUpdK6RqJxiMfgC6VUCM2hhDPKEMSleIFCSMPnOXjru+9s40xIVKlDikZSMJPl7t775+7FNT9D15YVJwU9GNpFl7Ez9F/jpLdg/L9IyVwpI1v7QRdjVsuoUC86kfcGNabTXa0HB4SPn/K4pGAwcmwYQaOY77rwZxr7vKAPparjgIMh41dzwV0CE2Nvr2i7OhSDDzE6npH42PCSW1JqIibnxBZdR3mVB3XFAlGsJXSd41drvE8wSvA3gbg0K52BWGthFspw5w+i656lmcGPbsaHmTLh6uFOWvWpNmsAR7eV1sxr/Di4WVox6nbWD6G7/sJMo3VTgNeXURj+h/GpNnw2LOS4UJM7L2Ggx87htpKisnW3tl2OzxxsghdudYx8U5lOwgZ4j6hZNjsPsXEmwJyG/DNj3gkIC9STLxfQgQcc2tlEFcLMfGmiDBSGQfxajF9fYqJdxoKmlN9/Fm3ZaEomM4txCTYO7MErZa2LNOqYEx4fc0QAveZR/0UZGr7d6gWDJ1sEgB5mY4VbPZb++tqeSdNgoyHXCs6E1jNcg06TbDZhFBb+PJCs187NeusnUXOoCucYbPdDO4TUj+jMTbb7W0niEnIIDQ7g1YOexvuroyRkoALwiQA0pkg49XqJMB3GZMgGDbbb8tmvM8ZFQrnlS9cuH7+O6QkQIVmj8QzAWo7eWKyHBaKqq8gCeNIwEF89xwCXCEc3qAsf54qfV3JJZjzFqYjEfMjE4Q1zcW7cyZ4DX86NOes1cYVEn5+nw/jApAfpnOwOiTUt0N7U/mvSqXVlRi/0dGhbwfRGqmgG57TzXEL8bxtjfytbihSPE4QT+rWKKh0+Q3+ThDPeMAXMGcxh6Ic40tLfUlHXurVqmRkxVCDFMN4n/10zijFpEICf9WI0mZQObqZc1H7OfP37R/dowxCIwtg6wAAAABJRU5ErkJggg=="}}]);