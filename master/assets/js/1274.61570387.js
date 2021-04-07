(window.webpackJsonp=window.webpackJsonp||[]).push([[1274],{2663:function(t,a,Q){"use strict";Q.r(a);var T=Q(18),r=Object(T.a)({},(function(){var t=this,a=t.$createElement,Q=t._self._c||a;return Q("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[Q("h1",{attrs:{id:"release-1-12"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#release-1-12"}},[t._v("#")]),t._v(" Release 1.12")]),t._v(" "),Q("h2",{attrs:{id:"pre-releases"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#pre-releases"}},[t._v("#")]),t._v(" Pre releases")]),t._v(" "),Q("ul",[Q("li",[Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Beta 1"),Q("OutboundLink")],1)])]),t._v(" "),Q("h2",{attrs:{id:"changes"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#changes"}},[t._v("#")]),t._v(" Changes")]),t._v(" "),Q("ul",[Q("li",[Q("a",{attrs:{href:"#common"}},[t._v("Common")])]),t._v(" "),Q("li",[Q("a",{attrs:{href:"#mavlink"}},[t._v("MAVLink")])]),t._v(" "),Q("li",[Q("a",{attrs:{href:"#commander"}},[t._v("Commander")])]),t._v(" "),Q("li",[Q("a",{attrs:{href:"#multicopter"}},[t._v("Multicoper")])]),t._v(" "),Q("li",[Q("a",{attrs:{href:"#vtol"}},[t._v("VTOL")])]),t._v(" "),Q("li",[Q("a",{attrs:{href:"#control"}},[t._v("Control & Navigation")])]),t._v(" "),Q("li",[Q("a",{attrs:{href:"#gps"}},[t._v("GPS")])])]),t._v(" "),Q("h3",{attrs:{id:"common"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[t._v("#")]),t._v(" Common")]),t._v(" "),Q("ul",[Q("li",[Q("strong",[t._v("RTL Trigger based on remaining flight range ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16399",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16399"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("Calculates time to home, on RTL, taking into account vehicle speed, wind speed, and destination distance/direction")])])]),t._v(" "),Q("li",[Q("strong",[t._v("Pre-emptive geofence breach ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16400",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16400"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("Triggers a breach if the "),Q("em",[t._v("predicted")]),t._v(" current trajectory will result in a breach, allowing the vehicle to be re-routed to a safe hold position.")])])]),t._v(" "),Q("li",[Q("strong",[t._v("Airframe Scripts")]),t._v(" "),Q("ul",[Q("li",[t._v("The syntax for setting defaults was changed and custom scripts require an update")]),t._v(" "),Q("li",[t._v("See "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16796/files#diff-dcf2f5536f47f260e5e0ff3b3fd22eaef6b6c510126463d70affa0eb7bd4d3ddL20",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16796"),Q("OutboundLink")],1),t._v(" for an example.")])])])]),t._v(" "),Q("h3",{attrs:{id:"mavlink"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[t._v("#")]),t._v(" MAVLink")]),t._v(" "),Q("ul",[Q("li",[Q("strong",[t._v("MAVLink Ethernet configuration ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14460",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#14460"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("MAVLink Ethernet channel settings such as UDP port, remote port and broadcast mode now can be changed dynamically via parameters.")])])])]),t._v(" "),Q("h3",{attrs:{id:"commander"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[t._v("#")]),t._v(" Commander")]),t._v(" "),Q("ul",[Q("li",[Q("strong",[t._v("Commander: use control mode flags and cleanup arm/disarm ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16266",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16266"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("Consolidate scattered arming requirements in arm_disarm(), and, keeps the "),Q("code",[t._v("vehicle_control_mode")]),t._v(" last state in commander")])])]),t._v(" "),Q("li",[Q("strong",[t._v("Commander: Separate out manual control setpoint processing ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16878",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16878"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("Adds a new class "),Q("code",[t._v("ManualControl")]),t._v(" for handling "),Q("code",[t._v("manual_control_setpoint")]),t._v(" and handles RC loss, RC override, and RC arming/disarming")])])])]),t._v(" "),Q("h3",{attrs:{id:"multicopter"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[t._v("#")]),t._v(" Multicopter")]),t._v(" "),Q("ul",[Q("li",[Q("p",[Q("strong",[t._v("More intuitive stick feel in Position mode")])]),t._v(" "),Q("ul",[Q("li",[t._v("Horizontal stick input mapped to acceleration instead of velocity setpoints")]),t._v(" "),Q("li",[t._v("Removes unexpected tilt changes upon reaching travel speed velocity")]),t._v(" "),Q("li",[t._v("Intuitive shunting e.g. when landing")]),t._v(" "),Q("li",[t._v("Opt out possible using "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),Q("li",[t._v("Development: "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12072",target:"_blank",rel:"noopener noreferrer"}},[t._v("First attempt"),Q("OutboundLink")],1),t._v(", "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16052",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction"),Q("OutboundLink")],1),t._v(", "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16320",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improvements"),Q("OutboundLink")],1),t._v(", "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16786",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugfix zero oscillation"),Q("OutboundLink")],1),t._v(", "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16791",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugfix position unlock"),Q("OutboundLink")],1),t._v(", "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/17078",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugfix invalid setpoint"),Q("OutboundLink")],1)])])]),t._v(" "),Q("li",[Q("p",[Q("strong",[t._v("Hover thrust independent velocity control gains")])]),t._v(" "),Q("ul",[Q("li",[t._v("Parameters "),Q("code",[t._v("MPC_{XY/Z}_VEL_{P/I/D}")]),t._v(" were replaced with "),Q("code",[t._v("MPC_{XY/Z}_VEL_{P/I/D}_ACC")]),t._v(", see: "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_VEL_P_ACC"}},[t._v("MPC_XY_VEL_P_ACC")]),t._v(", "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_VEL_I_ACC"}},[t._v("MPC_XY_VEL_I_ACC")]),t._v(", "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_VEL_D_ACC"}},[t._v("MPC_XY_VEL_D_ACC")]),t._v(", "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_P_ACC"}},[t._v("MPC_Z_VEL_P_ACC")]),t._v(", "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_I_ACC"}},[t._v("MPC_Z_VEL_I_ACC")]),t._v(", "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_D_ACC"}},[t._v("MPC_Z_VEL_D_ACC")])],1)])])]),t._v(" "),Q("div",{staticClass:"custom-block warning"},[Q("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),Q("p",[t._v("The gains have a new meaning\n* Scale from velocity error in "),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"4.179ex",height:"2.262ex",viewBox:"0 -750 1847 1000"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"6D",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(878, 0)"}},[Q("g",{attrs:{"data-mml-node":"mo"}},[Q("path",{attrs:{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}})])]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(1378, 0)"}},[Q("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})])])])])]),t._v(" to acceleration output in "),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.092ex",height:"2.452ex",viewBox:"0 -833.9 2250.6 1083.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"6D",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(878, 0)"}},[Q("g",{attrs:{"data-mml-node":"mo"}},[Q("path",{attrs:{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}})])]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(1378, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(469, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])])])])])]),t._v("\n* Existing gains need to roughly be rescaled by a factor of: "),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"37.072ex",height:"2.262ex",viewBox:"0 -750 16386 1000"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(477, 0)"}},[Q("path",{attrs:{"data-c":"72",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(928, 0)"}},[Q("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(1457, 0)"}},[Q("path",{attrs:{"data-c":"76",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(1942, 0)"}},[Q("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(2287, 0)"}},[Q("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(2648, 0)"}},[Q("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(3177, 0)"}},[Q("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(3538, 0)"}},[Q("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(3883, 0)"}},[Q("path",{attrs:{"data-c":"6F",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(4368, 0)"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(4968, 0)"}},[Q("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(5497, 0)"}},[Q("path",{attrs:{"data-c":"6C",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(5795, 0)"}},[Q("path",{attrs:{"data-c":"5F",d:"M0 -62V-25H499V-62H0Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(6295, 0)"}},[Q("path",{attrs:{"data-c":"63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(6728, 0)"}},[Q("path",{attrs:{"data-c":"6F",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(7213, 0)"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(7813, 0)"}},[Q("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(8282, 0)"}},[Q("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(8643, 0)"}},[Q("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(9172, 0)"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(9772, 0)"}},[Q("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(10133, 0)"}},[Q("g",{attrs:{"data-mml-node":"mo"}},[Q("path",{attrs:{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}})])]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(10633, 0)"}},[Q("path",{attrs:{"data-c":"68",d:"M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(11209, 0)"}},[Q("path",{attrs:{"data-c":"6F",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(11694, 0)"}},[Q("path",{attrs:{"data-c":"76",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(12179, 0)"}},[Q("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(12645, 0)"}},[Q("path",{attrs:{"data-c":"72",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(13096, 0)"}},[Q("path",{attrs:{"data-c":"5F",d:"M0 -62V-25H499V-62H0Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(13596, 0)"}},[Q("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(13957, 0)"}},[Q("path",{attrs:{"data-c":"68",d:"M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(14533, 0)"}},[Q("path",{attrs:{"data-c":"72",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(14984, 0)"}},[Q("path",{attrs:{"data-c":"75",d:"M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(15556, 0)"}},[Q("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(16025, 0)"}},[Q("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})])])])])]),t._v("\n* Automatic parameter transition assumes 50% hover thrust: "),Q("code",[t._v("~10m/s^2 / 50% = 20 m/s^2")]),t._v(". See "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14823#issuecomment-791357646",target:"_blank",rel:"noopener noreferrer"}},[t._v("question"),Q("OutboundLink")],1)],1)]),t._v(" "),Q("ul",[Q("li",[t._v("Development: "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14749",target:"_blank",rel:"noopener noreferrer"}},[t._v("Logic introduction"),Q("OutboundLink")],1),t._v(", "),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14823",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parameter replacement"),Q("OutboundLink")],1)]),t._v(" "),Q("li",[Q("strong",[t._v("Improve Rounded Turns ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16376",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16376"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("Creates a more rounded turn at waypoints in multirotor missions (using L1-style guidance logic in corners)")]),t._v(" "),Q("li",[t._v("See "),Q("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html#inter-waypoint-trajectory"}},[t._v("Mission Mode > Inter-waypoint Trajectory")]),t._v(" and "),Q("RouterLink",{attrs:{to:"/zh/flying/missions.html#setting-acceptance-turning-radius"}},[t._v("Mission > Setting Acceptance/Turning Radius")])],1)])])]),t._v(" "),Q("h3",{attrs:{id:"vtol"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),Q("ul",[Q("li",[Q("strong",[t._v("RTL improvements ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16377",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16377"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("Hardens the RTL safety failsafes taking into consideration the many edge cases when trying to land, depending on the current vehicle mode (Multicopter vs Fixed Wing)")])])])]),t._v(" "),Q("h3",{attrs:{id:"control"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[t._v("#")]),t._v(" Control")]),t._v(" "),Q("ul",[Q("li",[Q("strong",[t._v("Dynamic Notch Filter updated with Gyro FFT ("),Q("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16385",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16385"),Q("OutboundLink")],1),t._v(")")]),t._v(" "),Q("ul",[Q("li",[t._v("Adds dynamic notch filtering to the gyro control data resulting in much smoother control")])])]),t._v(" "),Q("li",[Q("strong",[t._v("Multi-EKF enabled by default")])])]),t._v(" "),Q("h3",{attrs:{id:"gps"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[t._v("#")]),t._v(" GPS")]),t._v(" "),Q("ul",[Q("li",[t._v("The GPS protocol now defaults to u-blox for faster startup, and "),Q("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[t._v("GPS_x_PROTOCOL")]),t._v(" needs to be changed if another GPS is used.")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);