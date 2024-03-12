(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{3702:function(t,A,e){"use strict";e.r(A);var r=e(19),a=Object(r.a)({},(function(){var t=this,A=t.$createElement,r=t._self._c||A;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pixhawk-3-pro-discontinued"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-3-pro-discontinued"}},[t._v("#")]),t._v(" Pixhawk 3 Pro (Discontinued)")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store-drotek.com/) for hardware support or compliance issues.")])]),t._v(" "),r("p",[t._v("The Pixhawk"),r("sup",[t._v("®")]),t._v(" 3 Pro is based on the FMUv4 hardware design (Pixracer) with some upgrades and additional features. The board was designed by "),r("a",{attrs:{href:"https://drotek.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek"),r("sup",[t._v("®")]),r("OutboundLink")],1),t._v(" and PX4.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(900),alt:"Pixhawk 3 Pro hero image"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The main hardware documentation is here: https://drotek.gitbook.io/pixhawk-3-pro/hardware")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("This autopilot is "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("supported")]),t._v(" by the PX4 maintenance and test teams.")],1)]),t._v(" "),r("h2",{attrs:{id:"总览"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),r("ul",[r("li",[t._v("Microcontroller: "),r("strong",[t._v("STM32F469")]),t._v("; Flash size is "),r("strong",[t._v("2MiB")]),t._v(", RAM size is "),r("strong",[t._v("384KiB")])]),t._v(" "),r("li",[r("strong",[t._v("ICM-20608-G")]),t._v(" gyro / accelerometer")]),t._v(" "),r("li",[r("strong",[t._v("MPU-9250")]),t._v(" gyro / accelerometer / magnetometer")]),t._v(" "),r("li",[r("strong",[t._v("LIS3MDL")]),t._v(" compass")]),t._v(" "),r("li",[t._v("Sensors connected via two SPI buses (one high rate and one low-noise bus)")]),t._v(" "),r("li",[t._v("Two I2C buses")]),t._v(" "),r("li",[t._v("Two CAN buses")]),t._v(" "),r("li",[t._v("Voltage / battery readings from two power modules")]),t._v(" "),r("li",[t._v("FrSky"),r("sup",[t._v("®")]),t._v(" Inverter")]),t._v(" "),r("li",[t._v("8 Main + 6 AUX PWM outputs (Separate IO chip, PX4IO)")]),t._v(" "),r("li",[t._v("microSD (logging)")]),t._v(" "),r("li",[t._v("S.BUS / Spektrum / SUMD / PPM input")]),t._v(" "),r("li",[t._v("JST GH user-friendly connectors: same connectors and pinouts as Pixracer")])]),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to buy")]),t._v(" "),r("p",[t._v("From "),r("a",{attrs:{href:"https://store.drotek.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek store"),r("OutboundLink")],1),t._v(" (EU) :")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://store.drotek.com/autopilots/844-pixhawk-3-pro-pack.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro (Pack)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://store.drotek.com/autopilots/821-pixhawk-pro-autopilot-8944595120557.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("From "),r("a",{attrs:{href:"https://www.readymaderc.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("readymaderc"),r("OutboundLink")],1),t._v(" (USA) :")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.readymaderc.com/products/details/pixhawk-3-pro-flight-controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"编译固件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),r("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),r("p",[t._v("To "),r("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("make px4_fmu-v4pro_default\n")])])]),r("h2",{attrs:{id:"debug调试端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debug调试端口"}},[t._v("#")]),t._v(" Debug调试端口")]),t._v(" "),r("p",[t._v("The board has FMU and IO debug ports as shown below.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(901),alt:"Debug Ports"}})]),t._v(" "),r("p",[t._v("The pinouts and connector comply with the "),r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" interface defined in the "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),r("OutboundLink")],1),t._v(" (JST SM06B connector).")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("针脚")]),t._v(" "),r("th",[t._v("信号")]),t._v(" "),r("th",[t._v("电压")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("VCC TARGET SHIFT")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("UART7 Tx")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("UART7 Rx")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("4（黑）")]),t._v(" "),r("td",[t._v("SWDIO")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("SWCLK")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("p",[t._v("For information about wiring and using this port see:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html"}},[t._v("SWD Debug Port")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/debug/system_console.html#pixhawk_debug_port"}},[t._v("PX4 System Console")]),t._v(" (Note, the FMU console maps to UART7).")],1)]),t._v(" "),r("h2",{attrs:{id:"serial-port-mapping"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("UART")]),t._v(" "),r("th",[t._v("设备")]),t._v(" "),r("th",[t._v("Port")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("UART1")]),t._v(" "),r("td",[t._v("/dev/ttyS0")]),t._v(" "),r("td",[t._v("WiFi")])]),t._v(" "),r("tr",[r("td",[t._v("USART2")]),t._v(" "),r("td",[t._v("/dev/ttyS1")]),t._v(" "),r("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),r("tr",[r("td",[t._v("USART3")]),t._v(" "),r("td",[t._v("/dev/ttyS2")]),t._v(" "),r("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),r("tr",[r("td",[t._v("UART4")]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("UART7")]),t._v(" "),r("td",[t._v("CONSOLE")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("UART8")]),t._v(" "),r("td",[t._v("SERIAL4")]),t._v(" "),r("td")])])])])}),[],!1,null,null,null);A.default=a.exports},900:function(t,A,e){t.exports=e.p+"assets/img/hardware-pixhawk3_pro.8643e293.jpg"},901:function(t,A){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/7AARRHVja3kAAQAEAAAAUAAA/+EDnGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4NCgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkNDMDA2QkU1MTYwODExRTlCRDk1QUI1NjVGN0MxQzcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM5NzA1OUQ2MjQ5MDExRTlCMkIyRjQxODAzNUI5QzhEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM5NzA1OUQ1MjQ5MDExRTlCMkIyRjQxODAzNUI5QzhEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIj4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQzYjI5MjgzLTg0N2MtNGJiYi05ZDU3LWJiZDE0OTNjMzA3NSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmFkZTNjODViLTBjZTEtYWM0MS05MTUxLWEyODg2MGQwZGU3OCIvPg0KCQk8L3JkZjpEZXNjcmlwdGlvbj4NCgk8L3JkZjpSREY+DQo8L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz7/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIAM4CRwMBIgACEQEDEQH/xAAcAAEBAQACAwEAAAAAAAAAAAAAAQIDBQQGCAf/2gAIAQEAAAAA/fwAAAAAAAAAAAHiemeMu9rrV21u6uq001u601q6NaN6FLpRW5qZrSa0eN8s+teGaRkRmIiyhZaWlWi0tpdEqU5+/wDpvta4PmL1LxONDITMIhAAKIFAKgRk8j236u8lM/M/pficeCQSCIQQLKJQFAIsJMx5Pt/1hymfnT0Dw88UyiEJBAgBUKCgJRIzI8j3n6rpPwD828LPFiSEZEEQkaAAWKKAsmWY8n9I+nA/Cvy7r5w5xERBkQIAKARoABnLLzf1P6OE/FPyjrccEmUhERAQAAAKCgZmTzf136DE/HfyDruDizMmRlLBAEKAIpSUVWZmHnftP7sM/k3431PBjLMkJEAIAQCwopQEmWb5/wC7/s4n5b+H9Vw5wkkQgi5AKBAKCrCjDMdj9A/rgn5p+EdTw5yykIgIAKAICgAsmJNdp9F/pwfnf4B1PDnMZQyhVI8z2XpfE4/P4+PxMoObk7XxeoFKgSzLM1230x7+HoXzx1PBmRlISKsD3Pq/aHj+djrfWeuEd57h1Pf/AJZkUIEM5a7n6i9yD0r506PiyykksQAvunleSxy78L0zxIsd3716Z7R+ccdACDMy33n1R7QHqHzd0vBJJJJASlrs/B7PxteT5fk+okR5XN7P13rNCVAJllyd/wDV3fCetfMvS8GWUmUoUKvs3Yc3Jxcfg+t8A5vavJm+Hi6/ocQAEmTk9g+t+zE6D5h6PgzEmSAVQ5fJ1WOHsumyPO5jPH43cdAEUhGY5vY/rnzQ6b5c6DgySSJLKKDObWXvHpaW8OqY37f6hCpQZZl5fa/rfnDq/ljoPHyiZgAUKiM6iC0Z1CKKjKZc/t/1ryB1vyp0XixGZBAWksEikAoAFRLiPI91+sNB13yn0HjJlJBQLAkUgBQACyGY8n3n6r0HjfOPovi8WZnMMoEVZElAKAighSMzfP8Aof09yUODxOHixjMwzEyyiZMssOKYxOPjzx4zx8eOPjxx8eMcfHx44+PGMYw8juf0P3rfJQAAAAAEWAZEXEXKJvG9a2H/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBQT/2gAIAQIQAAAAAAAAAAGpSFixYUEAQNAAgCkArIm0AAAAikE0AAAARSCapAAAgBUE1SRYTh2zumefeAogmyID4/O5Z9H0zxMe7QUQTaCFZ55x07px4fZQUQTZCKMRw+pnK8vpArFGkCUBFJQFmaS1BRUAgoVM0IAoEKgAK//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAAAAAAAANwALAKAgXBvNAAAABLk3AAAAAJcm4AAAABLk3AAAAAJcm4ACywLAAZNwAL1Xng3vlAAyaAA2ucmtYgAZNAAb1JhrbMyAMmgAAAlAGTVlQAAAAMhQAABRSJH//EAEsQAAAEAwIJBwkDCQkBAAAAAAABAgMEBRESkQYTFBYhMVFTVBAVIDJSgZIiMEBBUGFicXIkNLEjJTM1NmBzodFCQ0RjZHSCsvCj/9oACAEBAAE/Af3KiHyh2jcUlRkWwgvC6WNn5WN8Iz1lPad8Iz2lHad8Iz1lPac8IzzlPbc8IzzlG9X4RnjKd6vwjPCUb1VwzvlG+O4Z3Sjf/wAhnbKOIGdco4kZ1yjiRnVJ+LIZ0Sji0jOeUcYgZzSjjUDOWUca3eM5JRxrd4zklHGt3jOOU8a3eM4pVxrd4zhlXGt3jOCVcY3eM4JXxjd45+lfGNXjnyWcY1eOfJbxjd456l3FtXjnmXcW1eOeJfxbV452gOLavHOsBxTd450geKavHOcFxTXiHOUFxTXiHOUFxLfiHOEHxLXiGXwnEt+IZfCcQ34hl0LxDfiGWQ2/b8QyuH37fiGVw2+b8QyuH36PEMqh98i8ZUxvkXjKWN8i8ZSxvkXjKWd6i8ZQzvUXjKGt6i8Y9reIvGPa3ibxjmt4m8Y5veJvGNb7abxjW+2m8YxveJvGMb7abwS2vW4kW294kYxHbTeLaO0V4tp7RXi0ntFeLSe0m8Wk9ohUFyxCawzv0GI5FlxRBRA6CpCoqKkKkKkKkKkKjQNGwVIaPcNGwho2ENGwaBoGjk0CpCpCoqKior7xa9/8xb9/8xa/9UWz2neLZ7TvFs+0d4xiu0d4xiu0q8YxXbVeMYrtHeMavtqvGOX21XjGr7arxjl9tV4xzm8VeMe7vF3jKHd4u8ZQ7vV3jKHt6u8ZS9vV3jKXt8u8ZU/vl+IZS/vnPEMqf3zl4yt/fueIZZEb9zxDLInfuXjLIniHPEMsieIc8Qy2J37l4y2J4hzxDLoniHLxzhFcS5eMui+Jd8Qy+L4l3xBEdFmf3l3xCFiIpaiLKXbxLmMRL2i1qs1Mz6Dn6NXyEyL7Qv5hYPoUFPM0FOSgp5+gp6c3rEAdHU/MMfd2/pLoK6pibpsxbn1BfrB/uA31hLCrEtF8ZBBWW0FsLoGJ2n7a78wvWYPkP2831hJkmqPYL/MLpYQJszB75hzWYPkP2yfRbLyhg6i3M2C+LpYRppMHQ71jB8h+x9O30drWMFk2psz0sKE0mCvpD2hQPkP0Gns1rWMEU/nVB7C6WFRfbS+gPdcGD9vs6xgYX29StiQXRwsT9obP4Q/1zCvbvq5WNYwKSWNdP3dLC0vKZ+Rh/rBX7gM+oYFJ/Jvqp0sLC8hk/mIjWFe3yDHXIYGI+wOL9/RMYWF9jbV7w/pCvnyaNvL3jvHeO/od47/NQsI/GxCWIdFt1Woq0Gas64P/AOqP6iGlcZFxbkKwzaebraTaLQImFeg4hTD6LDqdZBlh195DTSTUtZ0SQjpZGS1SExbWLNekvKI/wEVARUGlpT7dgnk2kaSOpCEg346IJiGRbcPUVaBaFNrUhRUUk6GXTZZcfeQ02mq1nZSXvETDOwkQth9FlxGsq1EJIpnHNYyHhFKR2jMk1vEbK46X0yqGU2R+vWV/JQd3Q7vPkGC8ohgimzKK7VdLCovzck/iD4V6Pgp+0UN/y/6iOXFZfEUU7TGK9Z7RggZ5fFqrpydX4jCFJR8vgpuguunFPfUMHEJh0xc2cLyIVHkV9azGFi1OMytajqpTFTO4YUfdZT/t/wCgwS/aFj6VfgI/9YxP8VX49LvEm/XUF/GT+Ieg0x+HS2F6UYyqi+RCfzeJiZk80h5SIdpVhCEHQtAwajHJmmJlMY4bzS2qot6bIUmys0n6joO8d/T7/OEIalohgx+o2/f0sJyrKu8PlpMK9HwV/aKG/wCX/UxF4TzdqNfbRF0SlZkX5NP9Bgms1zCNWrrHDqM7xg8ZTCXx0oX/AG041r6v/UE7/NkngpSX6Q/yz/zGFH3WU/7f+gwiSp+USmLbKrRM2DMvUegYIsqOc4/+6ZQo1q2CKcJ2LecTqWszK/pyb9cwX8ZP4gohEPh+pSz0GuxekTyDcg5xEoWgyJSzUg9pGMEmcnciZm8VmHZaPytpharbilbTryaPM9/mk6xCF+UIYPpsySH+XSwj/VCxEdZQV6PL45yWxqIplKTWjUS9QddN55x1VLS1Go6CXTN6WOOOMpQZuIsHbEDGOS+MbimaW0bdQjo52Yxi4p6ltezUQjpm9MUQ6HiQRMIsJskJdPY2WINppSVsn/duFUhGYRxsXDnDETTDKushhFmvmIWIVCxLUQihqbUSiqI2LXHRjkU6SSW4dTJOoM4Ux7TBMvJZiklqx6LQmM+jpmgm3lpQzumyon0YtYhOuQk6bEph0/D0p8msneER1lBXnqioqK9L3huIhE6FQ5GCcgS0nDkLUApFcmKgxsCtFCh02Raly60hiqQU5AK8jJyqQWcEXk4jSHDK2qymidnJ3Du5G7JrK0nRUJalxkVEmraCYliipYqewZNLMZ1T+QNiWajKyDhZamhmR2fX7wtiXa6KptCkQFaJSoGRVVTbo9DTrEMXlkJeVmAYL4C6U6Ksqf8ApER1jCvRz0JMISai1/IJNSiOpmVASlJOxU7II1NmSU6j1BRqb0kddIXVJmojqfrIKtH5VfUHpZEQ8AiMdspStVCTXytVa9HT6glSm0bSMJWskWz1GEKWZ26/IEtbh12A1rWqz6yC3F1sGDqk6COlxQUPDulEoeN21XF6k09/rHd57T0EaxBUNxJCFKkKyXwF0TE0Kssf+kRPWUF+jn1TBuqJJWT1DHubRlDgyh3b8hlLm0G+6frCX110noBQUZm0r7K9+nJzqH1bOv5dEtAN9emlKAolerQMoWMoX7tIyhdTPbrGPcPSLZrTQ9YjGFJksGnGw5qZNdskPoUeky2GO/0JGsS4iVFNF8RBkqNIL4elMSrLn/pET11BfpFS2Co0bBUtg0bBX3Cygx7i6VC2CiR5OwUSKJFE7AaSMaip6GgSlNY1kviII0IT8ulMPuD/ANAiuuYc81X2oQRrEkKswYL4yCdCS6Uf9xf+kRJ+WYWK9GvQqKivJUV5KivR7h3Du9jN6xICrNYcviBdJ9BLYWgy0GQmkmdZdVi6mn5ByGerpQYOHXsGKXsGLVsGLVsGLVsFhWwWFbBZPYLJ7BQU93L3Du8xUhUhUV94r7xX0w+l6ggYLoUucMaKkWsEqvTU0hXWQk+4HAwq9bCD7gqVQB/4ZFw5ngD/AMK3cOZZfwqLhzJL+GRcOY5fwyLhzFL+GRcOYoDhkDmGA4ZA5ggOGRcOYIDhUDmCX8Ki4ZvS/hkDN6X8KgZvS/hUDN2XcK2M3ZdX7q2M3Zdwrdwzdl3Ct3DNyXcK2M3Jdwrdwzcl3CIGbku4RsZty7hG7hm3LuEbGbUu4RsZsy3hEDNmXcI2M2JZwbYzWlnCIGasr4JAzTlXBIGaUq4JF4zQlPBpvB4HSnhE3jM2VcKV4zNlXDfzGZkr4f8AmMypXuTvGZMs7CrxmRLey5eMyJf/AJozHgNrozHge28MxoPevDMeE3zwPAaG37oPAaH4hwZjNeqJWMxkcSYzG/1IzHPiSB4EL4khmQ7xCRmU/v0jMqJ3yBmXF7xAzLjN4gZmRvbQMzY/ai8ZmzH4bxmbMfdeEYHTKmpN4h8Dor+3YErka4HT5ISmyRVBptesFq9jUFOSgpyUFkWRZFgWSFBZIWCFghiyGKIYshi0jFp2DFp2DFp2DEpGJTsGJTsGJTsIZMWwhiU7Bi07BYIUIul//8QAKRAAAwABAwQCAgEFAQAAAAAAAAERIRAxUSBBYYGR8TBx4aGxwdHwQP/aAAgBAQABPxDS6UpdaUpSlKUpSlLrdaXovTS9FKUpSlKXqpSlKUpSl0pS9Kpj1qzJhkfBaN9SV6ErQGFpc/k6cuILh6Ch1oyp/wCAGNpSrPTtKFA0dTtKlP2CnbHTNvgn0gt/oC/gwn7fEPrR9GF/DBP2+IfWD6ofSj6ufSz6mfQxdn459RPpJX/VPp59XM/+GfRD6IJqrXoM/lLwmKWVez6QJ2V8LTSenDX2InbN/TEr2dGqr1lcRgvuqe7JJtoZHtpQR4PJoNh4EeBfBHdL4LwXwXiP0fA3w+B/0R/0R+g/U/RHoVLZIvBHIkLgMeNN8/1L5/qXy+RPy+QmXd8hPy17FP8AcFCf1h9oPswl/wC6faTx/uQf+afbTj+afbz7+JH+6fZR/wApF/MRfz8+9n2I+6H20i7/AFB9uPt59yOP5R9nPtxF/wCeJKi+WfdBI2+YRkr5DYurKKbYjS1sSimi2Fq+XJcqdHeL4RPBPCIiBpwRcGDBERDSGkRaGItDQhCIiIiLSEIiLghEREH7EZCE0hCEZCMjIyEZkzyZ5ZL3IZ5IzbdnsjOxUspGbRVm2Kjrcl1ffF66ET/QyL8hAhCDPZ70jI0eyvkvk9ntaPT3/wCpfjhHq9WPSoh5dQccpWqV0RXw5awdzcQ3GeB57DvHRS+ClLrdKvx7646L13S9d19sht0XWIEAVoLjoe6FQLtEbQzBj2KLo7rS6UpSlKNnoyUvgurFuX8GSspdEylKUr0RWU3E4UtZSlHDGjA9bIOTeQt+juj4sxaxPRBZoz2NaunvoZuTqQ1N30ehD/FRUajKa3outemw8l0ox6sQtUSJdDHO9mgtIQPYyGhrRkX4GTzrsIQ2/BH+NYL0voekUtE+l9CLaD3yli6Zum4Wsbxxjmk/A+qEJ0Z1hGtJ5RGQS0jI9Y4T8T6IXR9DFubJbpyZDmHAGGMY9HrfwZ650TXHGmPyTrmTOlcE0hsoxmP2GLcgMd+iuhqmX5JWvU3jGN9bEMnU+pk0j50hCEZCDRCEJpNI+paIewthNwmj/Wjfyd6Ni2HyiWaIvK6GP/RQbe+CaNjYyl0qKUc0pdKVaUvSirg7mCIwYMdGNLpESE1ms6Lqy6Uo1o9NwipsIyt56dx+gSNDFW7yHF3GwxyY50Raj2OcnvUnknknkj5PZ7PY15ILeU41RV5b0h7NTIwceW4P/Ox7TghK1XdtiCqTTk/JiX9T/csN8oRdXbjqKvLZfsnGaw0Krgy+CNEZGTwiLf6UqziVYiK9Joc5VQgO3ZI+RUyoiJ418RUR8FcEYngSc1Qj4ZHwZI+GRkfB89DHpuFPgFRbdTXiBMv9jp5Gz1+Ht0RGB6Y4PRFpHq/vCS9v5CUL2M6+gh5cJ2QuyZXawkMPUd3bRW34/wBiiX/TmKv+feYMa45Ihky/WIyt8skuDA28UsKNpWY9Mhztlzal8ib5K+T2e2Z5Z7EfLL5Z7Z7Z7ensrHTJmlN5MhRUmyU+rKcGA9yWxcTRspdaUo30UvgqLrgwT6CSgP7xJhnFa3loMvy7wpCicYvFz2R3/H+xaxWbNIK8tMrtSh/Q+ubMwMxpFoylX/GJNH64ckOhNzZ6poa1UWsIlMVG6EY0Y5fwYKYPZ70mj30QevcRFr2Ryve308C3wujMIdgyMhGRjQ09M8fivjX0Vk9A21U7NEuCA2Jt3A502RuJ8Roy09tK21UaY8W5VK0hKJIXd3eTa5db4G9IrPp5dIA1DHIVFLoihfe1tOqknrFaTCRjq2zmFBI1B2PJ7Mnz01FR76KNlbH0bbEc3yPZFdD3QrmpCtfvLVGy+Rt8lvdmeSvSvllKysrKWLzXwfuvg/dDbKNl4QmrsNqKNmL00MS3xNnd3Riy/duRMI42NNyDppujVH0LXDHXotgf1KMDD7CL7Svhcn+JoMQ0dO6YYslrc72NxutmOF/Y/Iy0/fbjHcu7ZDI4mDSWsXOsRVp20xpUPWeRE0HYXDx10jI4Ykqlo9PeuCaNIiIqQhCcsa4Znknknkk0mGMxXTbOAjlAbMJu52GVNuezsynlmTXk/twgKnMmq2F+LTvfgy7JoyRkfBXwYRpmnYrlc7DNm7RHdmEpkuN973Lxyt3aDfcMbOrL5ipPF6Vc6qX790RiPRazrY0kbX66IliNytcPGn9jp2Ey+bM9A4Y6HDBUYZCK6RGCIiMcGCLofJRUQ7BJb57qDi8/sblexTwHy5v7ErrZ3fJ3tRQaY8tj7+TUcJ5ITyM2T3mRFo1XtBFKglJSKOohZg1nkzCVHsG4qVWESoU97BqWZWzEibRt96O2t199GdW20k9ltqhKKgmARwidT8PZxYED1pb+Cr8FKhvEFsQvRD3jKVMDHcRwhZG2RJJmuxSk3wZbMGomh4UMCKSCBBIhNEYIL8DEbohKglgXHqafuCWL7jasbKPpNrT2XyVF0qKtcFKiobQomPfXHnpWnvovV7/F3GuUPVmGgCw+F1brzJ9ivuM5tBilKUYrKUrxoyL+tS6K4Kz0UvjREcCrgxxrjSroqRVxotccdV1vguiKUul1RDVM7spqYTqYqbaaQ5ZuUmUHkzwIsZIWfjL7ofMPJPKPI+C+GVyI+CEfIjW7fB6fwTS5lKuRIcT3PIeQjkkQI5KuSrkpvq+h1PWl6MlerZdKUg7DwUuig3LI0U7LbCheloV4DzWmdbKP5bD3RGCY5lGzY31pff4RmPpdJZf8Z9CP+PMmSe0lrSmXPxDOX2FzBxE/4w5yfZFmMi++nja/8rH/ADgr/vH8mD/lQ+P6cfbFuFxGYi4Y74IfZLi0rKbGzD7BNC7Y02vsG+2LTsDLZL7Yy2I+QlzklJEJAYJPBtIem2UtjnEYRX+Sf+SE0iIQgSEIHGuHuQRwiBo7E8IfEJnZDjseJHjRneEeBHgFuz4PEJPZDa8oeF8H0AjFwvgSlhBLWygtokbjS6P/xAAxEQABAwIEBAMGBwAAAAAAAAABAAIRAxIEICEwEBMxUAVAURQiNEFhsVJxcqLB4vH/2gAIAQIBAT8A7MNyFChQo4RkjjCjJGdvZR2UdlHnhnG45zWAucYCbjMO4FzXggfVCo0tvnRMr0nxa4GVe262dcl7brZ1QxVAvsDxPpPkB13PEfg6n6SsSKnsL72gafL/AAIOhp8P+v7Ov9VhIaMN6S/+VS1x9Qj8I+5yY8vFZ5Z15ZWJp0G+HAs9BH5ps2id8bj2Ne0td0Kexj2WOGi5dPmcyNYhHD0XU+UW6KhRpURFNscSVay++NU3B4Zj72sEoOU+bhWq1VnlhbBiTxIVqtULCuc5nvGTJ+/ZRvFAqeEqVKnanLKnZOeFChQoUKFG7CjPBUHL/8QAJREAAwABAwMDBQAAAAAAAAAAAAEREgIgMBAxcRMhUDIzQHDB/9oACAEDAQE/ACb58nd1/Ty5cdSGoRrdi5eR7F25F3Q56i8kymsfu34X8F9t+dmn6X5RdXqmrv7cb2Ltyx2iTkI7TU2+/XGmLkLq7GPG9i5UzIyF7vqmZGQ9Rq4nsXwL2aScU6Qn4b3UpSlKUpSspWUpSlKUpSlKUpkjJGSMjIvX/9k="}}]);