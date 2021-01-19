(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{2433:function(t,T,Q){"use strict";Q.r(T);var a=Q(18),r=Object(a.a)({},(function(){var t=this,T=t.$createElement,a=t._self._c||T;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"特技模式-多旋翼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特技模式-多旋翼"}},[t._v("#")]),t._v(" 特技模式（多旋翼）")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:Q(325),title:"很难飞",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:Q(323),title:"需要手动或遥控控制",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("特技模式")]),t._v("是用于执行特技动作的遥控模式，例如翻转，滚转和环绕。")]),t._v(" "),a("p",[t._v("滚动、俯仰和偏航杆控制围绕相应轴的旋转角速率，并且油门直接传递到输出混合器。 当操纵杆居中时，飞机将停止旋转，但保持其当前朝向（在其侧面，倒置或任何其他方向）并根据当前动量移动。")]),t._v(" "),a("p",[a("img",{attrs:{src:Q(420),alt:"手动特技飞行"}})]),t._v(" "),a("h2",{attrs:{id:"技术描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术描述"}},[t._v("#")]),t._v(" 技术描述")]),t._v(" "),a("p",[t._v("用于执行特技动作的R遥控/手动模式，例如翻转，滚转和环绕。")]),t._v(" "),a("p",[t._v("RPY摇杆输入控制围绕各自轴的角度旋转速率。 当操纵杆居中时，飞机将停止旋转，但保持其当前朝向（不一定是水平）。")]),t._v(" "),a("h2",{attrs:{id:"杆输入映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#杆输入映射"}},[t._v("#")]),t._v(" 杆输入映射")]),t._v(" "),a("p",[t._v("特技模式下默认的滚转、俯仰和偏航操纵杆输入映射如下所示。 该曲线使得在最大杆输入处具有大转弯速率能够进行特技动作，在靠近杆回中位置的区域具有较低灵敏度以进行微调。")]),t._v(" "),a("p",[a("img",{attrs:{src:Q(811),alt:"特技模式 - 默认输入曲线"}})]),t._v(" "),a("p",[t._v("可以使用"),a("a",{attrs:{href:"#MC_ACRO_EXPO"}},[t._v("MC_ACRO_EXPO")]),t._v("和"),a("a",{attrs:{href:"#MC_ACRO_SUPEXPO"}},[t._v("MC_ACRO_SUPEXPO")]),t._v("“指数”参数调整滚转和俯仰轴杆输入响应，同时使用"),a("a",{attrs:{href:"#MC_ACRO_EXPO_Y"}},[t._v("MC_ACRO_EXPO_Y")]),t._v("和"),a("a",{attrs:{href:"#MC_ACRO_SUPEXPOY"}},[t._v("MC_ACRO_SUPEXPOY")]),t._v("调整偏航轴杆输入响应 。 "),a("code",[t._v("MC_ACRO_EXPO")]),t._v("和"),a("code",[t._v("MC_ACRO_EXPO_Y")]),t._v("参数用于调整线性曲线和三次曲线之间的曲线，如下所示。 "),a("code",[t._v("MC_ACRO_SUPEXPO")]),t._v("和"),a("code",[t._v("MC_ACRO_SUPEXPOY")]),t._v("允许进一步调整曲线形状，修改低灵敏度区域的宽度。")]),t._v(" "),a("p",[a("img",{attrs:{src:Q(812),alt:"特技模式 - 指数- 纯线性输入曲线"}}),t._v(" "),a("img",{attrs:{src:Q(813),alt:"特技模式 - 指数- 纯三次输入曲线"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("数学关系是：")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[a("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48.908ex",height:"2.564ex",viewBox:"0 -883.2 21617.3 1133.2"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mtext",fill:"red",stroke:"red"}},[a("path",{attrs:{"data-c":"5C",d:"M56 731Q56 740 62 745T75 750Q85 750 92 740Q96 733 270 255T444 -231Q444 -239 438 -244T424 -250Q414 -250 407 -240Q404 -236 230 242T56 731Z"}}),a("path",{attrs:{"data-c":"6D",d:"M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",transform:"translate(500, 0)"}}),a("path",{attrs:{"data-c":"61",d:"M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z",transform:"translate(1333, 0)"}}),a("path",{attrs:{"data-c":"69",d:"M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z",transform:"translate(1833, 0)"}}),a("path",{attrs:{"data-c":"6E",d:"M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",transform:"translate(2111, 0)"}}),a("path",{attrs:{"data-c":"74",d:"M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z",transform:"translate(2667, 0)"}}),a("path",{attrs:{"data-c":"6D",d:"M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",transform:"translate(3056, 0)"}})]),a("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(3889, 0)"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{attrs:{"data-c":"79",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}})])]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(4656.8, 0)"}},[a("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(5712.6, 0)"}},[a("path",{attrs:{"data-c":"72",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(6163.6, 0)"}},[a("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(6552.6, 0)"}},[a("path",{attrs:{"data-c":"66",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(7324.8, 0)"}},[a("path",{attrs:{"data-c":"22C5",d:"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"}})]),a("g",{attrs:{"data-mml-node":"msup",transform:"translate(7825, 0)"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),a("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, 413) scale(0.707)"}},[a("path",{attrs:{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}})])]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(9022.8, 0)"}},[a("path",{attrs:{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(10023, 0)"}},[a("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(10595, 0)"}},[a("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),a("g",{attrs:{"data-mml-node":"mn",transform:"translate(10984, 0)"}},[a("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(11706.2, 0)"}},[a("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(12706.4, 0)"}},[a("path",{attrs:{"data-c":"66",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(13256.4, 0)"}},[a("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(13645.4, 0)"}},[a("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(14034.4, 0)"}},[a("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),a("g",{attrs:{"data-mml-node":"mn",transform:"translate(14423.4, 0)"}},[a("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(15145.7, 0)"}},[a("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(16145.9, 0)"}},[a("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(16622.9, 0)"}},[a("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),a("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(17011.9, 0)"}},[a("g",{attrs:{"data-mml-node":"mo"}},[a("path",{attrs:{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}})])]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(17511.9, 0)"}},[a("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),a("g",{attrs:{"data-mml-node":"mn",transform:"translate(17900.9, 0)"}},[a("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(18623.1, 0)"}},[a("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(19623.3, 0)"}},[a("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(20100.3, 0)"}},[a("path",{attrs:{"data-c":"7C",d:"M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(20378.3, 0)"}},[a("path",{attrs:{"data-c":"78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(20950.3, 0)"}},[a("path",{attrs:{"data-c":"7C",d:"M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(21228.3, 0)"}},[a("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})])])])])])],1),t._v(", 其中 "),a("code",[t._v("f = MC_ACRO_EXPO")]),t._v(" 或 "),a("code",[t._v("MC_ACRO_EXPO_Y")]),t._v("，"),a("code",[t._v("g = MC_ACRO_SUPEXPO")]),t._v(" 或 "),a("code",[t._v("MC_ACRO_SUPEXPOY")]),t._v(" 和 "),a("code",[t._v("r")]),t._v(" 为最大速率。"),a("p"),t._v(" "),a("p",[t._v("您可以在"),a("a",{attrs:{href:"https://www.desmos.com/calculator/yty5kgurmc",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处"),a("OutboundLink")],1),t._v("进行试验。")])]),t._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MC_ACRO_EXPO"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ACRO_EXPO"}},[t._v("MC_ACRO_EXPO")])],1),t._v(" "),a("td",[t._v("特技模式“指数”因子，用于调整滚转和俯仰轴的杆输入曲线形状。 值：0表示纯线性输入曲线，1表示纯三次输入曲线。 默认：0.69")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MC_ACRO_EXPO_Y"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ACRO_EXPO_Y"}},[t._v("MC_ACRO_EXPO_Y")])],1),t._v(" "),a("td",[t._v("特技模式“指数”因子，用于调整偏航轴的杆输入曲线形状。 值：0表示纯线性输入曲线，1表示纯三次输入曲线。 默认：0.69")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MC_ACRO_SUPEXPO"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ACRO_SUPEXPO"}},[t._v("MC_ACRO_SUPEXPO")])],1),t._v(" "),a("td",[t._v("特技模式“超级指数”因子，用于精细调整滚动轴和俯仰轴的杆输入曲线形状（使用"),a("code",[t._v("MC_ACRO_EXPO")]),t._v("进行调整）。 值：0——纯指数函数，0.7——合理增强直观操纵感的形状，0.95——非常弯曲的输入曲线，仅在最大值附近有效。 默认：0.7")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MC_ACRO_SUPEXPOY"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ACRO_SUPEXPOY"}},[t._v("MC_ACRO_SUPEXPOY")])],1),t._v(" "),a("td",[t._v("特技模式“超级指数”因子用于精细调整偏航轴的杆输入曲线形状（使用"),a("code",[t._v("MC_ACRO_EXPO_Y")]),t._v("进行调整）。 值：0——纯指数函数，0.7——合理增强直观操纵感的形状，0.95——非常弯曲的输入曲线，仅在最大值附近有效。 默认：0.7")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MC_ACRO_P_MAX"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ACRO_P_MAX"}},[t._v("MC_ACRO_P_MAX")])],1),t._v(" "),a("td",[t._v("最大特技俯仰速率 默认：每秒2转（720度/秒）")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MC_ACRO_R_MAX"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ACRO_R_MAX"}},[t._v("MC_ACRO_R_MAX")])],1),t._v(" "),a("td",[t._v("最大特技滚转速率 默认：每秒2转（720度/秒）")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MC_ACRO_Y_MAX"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ACRO_Y_MAX"}},[t._v("MC_ACRO_Y_MAX")])],1),t._v(" "),a("td",[t._v("最大特技偏航速率 默认： 1.5转每秒（540度/秒）")])])])])])}),[],!1,null,null,null);T.default=r.exports},323:function(t,T,Q){t.exports=Q.p+"assets/img/remote_control.e49232a6.svg"},325:function(t,T){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAf6SURBVHic7Z1bbBxXGcf/39lZr+N01wk8lUsilSZuqep0d8Z24zhhjdJWEGhRqQgPgBBKXwhCVAi1EkJJVVFRFZEiEC9EQioSNLSCIqeojdw6UXFdZ3d2bJdUdRouCSp9gdqddRLvZc7Hg+2Nb3ufi70zvyfPzDnf+e9fx2dnds75DmEDMtndvbUQDnexlLtBdJsAuiSwk4CtAG4CsB0LfwPAVQAzAOYYuCqAywDekczTJMTFcKEwvWdq6qpHH6Us5LUAAEiragdL2Q+iAQHsY+AAgDabwlsAJkA0TMyjhXD43N3j46ZNsRvGM+NHksn2mGnez8DXAdwL+4yuRo6BM2B+dq6z8/Tg2bPzLrW7AteNT2laL1nWwyB6CMA2t9tfxSwDf2ApT/ZOTKTcbNg149OqOgDmRwF8wa0264J5lIieUjOZITeac9z4lKbdI6Q8zkC/023ZAvMoA8d7DGPYyWYcMz4Tj3+MiX6yOIZvRk6D6Kim61ecCG678SPJpBLNZo+C+QkAUbvju8w1Bp7uyOWevOPChbydgW01PhOP75REzwG42864GwAdRIc1Xf+7XQGFXYHSqvolSWSg9UwHABXMGT2ROGxXwKZ7fFpVw8x8goCjdgja8BD9AsD3NV0vNBWmmcppVe2AlM+D6PPNxNlsEDB8fcuWBwdGR7NNxGiMqTvv3J5XlCEQ7Ws0xqaG+TyEOKTp+n8bqd6Q8W92d39CUZQzAG5vpH7LQHRBKRbvu2ty8r26q9ZbYby396OhYvF1+N30G7ydj0T294+NfVBPpbruatKq2hEqFP6MwPTlfLotl/vLZHf31upFb1Cz8WlVDRPzC74d0yvTV1CUUyPJpFJrhZqNZ+YTDHyuMV2+4NBNpvl0rYVrGuNT8fhDRPR845p8AxPwZTWT+VO1glWNT6vqp8CsA+i0RVrrM2sVi4m+qal/VipUcahZfCp9DoHp9bAtpCi/rzbeVzSemR8hQLNXly/oi5nmdyoVKDvUnO/p+aSwrLex8FY/oH6yimXdXu7hqmyPJ8t6BoHpzRC1QqGflru4bo9Pado9JOUZ5zT5BxZisCedPrv6/Lo9nizrmOOKfIKQ8vi651efSKvqYPB0ah8MfEZPJPavPr/GeGb+oTuS/AMDazxdMcanNK2XpBx3T5J/EMw9CcNIl46XXyTLeth9Sf6AiY4sPy71+JFksj1qmu/D+2l1rcqH+Ujk5v6xsevAsh4fM80HEJjuJJ3h+flDSwcl4zfxjK9NgyAqeUzA4mwB5g8ARDxT5Q9y+Uhke//Y2PWlHj+AwHQ3iLTPz/cDS0ONlIOeyvERTDQI3BjjP+uhFl8hF72mye7urQVFmQVQ84vagKYogqhTFMLhLgSmu4kipNwlWMour5X4DSbqEiAKjHcZJuoSAgiMdxvmLgFgh9c6fMhOwUDMaxU+JCqw+ReIbT6IYgLMgfFuwxwVIAqmcLhP1LZVfwH1IcA857UIH5IVIGp45VpAgxBlBYDAeLdhNgUBnmcr8iFZAcCR7BQBFbksJDDttQrfQTQtwBwY7zLEPC1IiMB4lyHmaREuFKYBFL0W4yMKUoh3xWIyTN1rNX6BgJSm69cWfjJgfs1jPb6BiV4DFqd3cCg04q0c/0DMI8Ci8cQ8CiDnqSJ/MJ+LRMaAReM1Xb/GQLDYzHleXjNNm4h+650ef0BAyeOS8dlodAjArCeK/MFMzDRfWjooGb+YVTrI0OEURKd2XbpU+h5d8QZKSvlr9xX5A2I+ufx4hfG9ExMpAhxNZuxHGHhZzWRWPKSueecqhfixe5L8gQCeXH1u3VwG6UTidSysEgloFuazmmGsWfix7iwDZn7ceUX+QALH1zu/rvE9hjEMohccVeQHmH/Xaxjn1rtUaV7NdxG8j20GUwA/KHexrPGarr8Poiec0eQDiH6UMIz/lLtcbSbZzwlwdbeYVoCBsWw0+qtKZWpJf7gDUhog+oh90lqamZCUifjExL8qFao6d1LT9StE9E0AbJOwVoZB9K1qpgM1prhVM5khEP2yaVmtDtEJTddfrKVozbOF/3HLLY8AqJq61ceczkajj9ZauK788W/s3bulLZc7g+CpdjVvhovFg/Xsoll34v60qnaC+RyAPfXWbUmILuTb2g7Um7i/oa0qJvbs+XhRUV4B8x2N1G8h/iaY76t0v16OhlaE3DU5+V5bPr8fwF8bqd8ijFuKkmzEdKCJDbi633prptM0DzLwx0ZjbFYYGMpHIoN958//r9EYTa2B2nXpUm4uFjvMwDPwx30+g+hnc7HYg0uzBRrFtr3+UvH4/QT8poWfcD9k5iM9hmHLr7ZObLJ4CkCfnXG9hoExIvqqnVuM2rrcMmEYl7Ox2ACIvofW+En5Kpgfm4vFDti9r6tjG+mmVfVmYn6Kga852Y6DnJah0Ld7U6l/OxHcja2jk5DycQIOON2WHRBwzmI+Vu7NkY3tuENK0/aRlI8BOORmuzXDPCqAYwnDeNWN5lw3IBOPa0x0hIGvANjudvurmAHRKWI+uXrei9N41vPevfXWyGw0+kUQfYOAe+FewtF5EL1CzM/GTPOl5dPq3GRD/Mu/sXfvlrZ8XoWU+4joIC98H7TZFN4CMAGiYZZyuNDePtrsw48dbAjjV5NW1Q5pWbtDQnQx0W5IeRuIdmAhqVEUzNtK6V6Y50A0CyITzHNgvgIh3iHmaUvKiyIUuqjp+jVPP9A6/B+9xauJ4GQk9wAAAABJRU5ErkJggg=="},420:function(t,T,Q){t.exports=Q.p+"assets/img/manual_acrobatic_MC.50e4aa5e.png"},811:function(t,T,Q){t.exports=Q.p+"assets/img/acro_mc_input_curve_expo_superexpo_default.30cc8a7e.png"},812:function(t,T,Q){t.exports=Q.p+"assets/img/acro_mc_input_curve_expo_linear.3714b0a5.png"},813:function(t,T,Q){t.exports=Q.p+"assets/img/acro_mc_input_curve_expo_cubic.55447d52.png"}}]);