(window.webpackJsonp=window.webpackJsonp||[]).push([[1494],{2735:function(e,t,r){"use strict";r.r(t);var o=r(19),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"multicopter-geometry-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-geometry-files"}},[e._v("#")]),e._v(" Multicopter Geometry Files")]),e._v(" "),r("p",[e._v("Geometry files are used by PX4 to generate mixer definitions that map the outputs of PX4 rate controllers to specific motors. The files describe the positions, direction of thrust, rotation direction, thrust and drag coefficients of each of the rotors.")]),e._v(" "),r("h2",{attrs:{id:"how-to-add-a-new-geometry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-a-new-geometry"}},[e._v("#")]),e._v(" How to add a New Geometry")]),e._v(" "),r("ol",[r("li",[e._v('Create new TOML geometry file (e.g. "foo.toml") in '),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/lib/mixer/MultirotorMixer/geometries",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/lib/mixer/MultirotorMixer/geometries"),r("OutboundLink")],1),e._v(". The file must include a new "),r("strong",[e._v("key")]),e._v(" (e.g.: "),r("code",[e._v('key = "4fo"')]),e._v("). See "),r("a",{attrs:{href:"#geometry-file-format"}},[e._v("Geometry File Format")]),e._v(" for information on the required fields.")]),e._v(" "),r("li",[e._v("Add the geometry file to "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/lib/mixer/MultirotorMixer/CMakeLists.txt"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Create a new "),r("RouterLink",{attrs:{to:"/zh/concept/mixing.html"}},[e._v("mixer file")]),e._v(" that uses the new geometry. For example you might create "),r("strong",[e._v("ROMFS/px4fmu_common/mixers/foo.main.mix")]),e._v(" with a line containing the new key (in this case "),r("code",[e._v("4fo")]),e._v("):"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("R 4fo\n")])])])],1),e._v(" "),r("li",[e._v("Set the new mixer in your "),r("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html#add-new-airframe-to-qgroundcontrol"}},[e._v("airframe configuration")]),e._v(" (e.g. "),r("strong",[e._v("init.d/airframes/myconfig")]),e._v(")"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("set MIXER foo\n")])])])],1)]),e._v(" "),r("h2",{attrs:{id:"geometry-file-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geometry-file-format"}},[e._v("#")]),e._v(" Geometry File Format")]),e._v(" "),r("p",[e._v("Geometry files are plain-text files that are divided into sections deliniated by the headers: "),r("code",[e._v("[info]")]),e._v(", "),r("code",[e._v("[rotor_default]")]),e._v(", and "),r("code",[e._v("[[rotor]]")]),e._v(" (there is a "),r("code",[e._v("[[rotor]]")]),e._v(" section for each rotor in the geometry).")]),e._v(" "),r("p",[e._v("The fields allowed in each section are listed below (as defined in the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/geometries/tools/px_generate_mixers.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("px_generate_mixers.py"),r("OutboundLink")],1),e._v(" script).")]),e._v(" "),r("h3",{attrs:{id:"info-section"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#info-section"}},[e._v("#")]),e._v(" [info] section")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("[info]")]),e._v(" section identifies the files for readers and for PX4.")]),e._v(" "),r("p",[e._v("It must define values for:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("key:")]),e._v(" An arbitrary identifier to allow the file to be distinguished from other geometry files. By convention the key is usually the number of rotors followed by one or two letters (these letters "),r("em",[e._v("may")]),e._v(' hint at the configuration). For example: "4hb"')]),e._v(" "),r("li",[r("strong",[e._v("description:")]),e._v(' A human readable description of the configuration described by the geometry file. For example: "Generic Quadcopter in H configuration"')])]),e._v(" "),r("h3",{attrs:{id:"rotor-default"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rotor-default"}},[e._v("#")]),e._v(" [rotor_default]")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("[rotor_default]")]),e._v(" section specifies default values will be applied to a rotor if the corresponding key is not provided in the "),r("code",[e._v("[[rotor]]")]),e._v(" definition. For example, the rotation direction might be defined for every rotor, or a default might be specified in th")]),e._v(" "),r("p",[e._v("The allowed keys are described in the "),r("code",[e._v("[[rotor]]")]),e._v(" section below (noting that it doesn't make sense to define a default value for a key like "),r("em",[e._v("name")]),e._v(" that is unique to each rotor).")]),e._v(" "),r("h3",{attrs:{id:"rotor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rotor"}},[e._v("#")]),e._v(" [[rotor]]")]),e._v(" "),r("p",[e._v("Each "),r("code",[e._v("[rotor]")]),e._v(" section describes the geometry values for a rotor. Default values may be supplied in "),r("code",[e._v("[rotor_default]")]),e._v(" (the values in the rotor section take precedence).")]),e._v(" "),r("p",[e._v("The allowed keys are:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("name:")]),e._v(' Human-readable name for the rotor. For example: "front_right_top"')]),e._v(" "),r("li",[r("strong",[e._v("position:")]),e._v(" A vector describing the location of the rotor relative to the vehicle centre of gravity in the body frame (Forward-Right-Down). This can be any units (e.g. metres, fathoms, whatever) because the mixer is normalised (only only the ratio between the distances is really important).")]),e._v(" "),r("li",[r("strong",[e._v("axis:")]),e._v(" A vector in the in the body frame (Forward-Right-Down) describing the direction of the thrust produced by the rotor. For example "),r("code",[e._v("[1.0, 0.0, -1.0]")]),e._v(" means that the rotor produces upward and forward thrust equally (i.e.: angle of 45 degrees).")]),e._v(" "),r("li",[r("strong",[e._v("direction:")]),e._v(" specifies the direction of rotation of a rotor, "),r("code",[e._v("CW")]),e._v(" (clockwise) or "),r("code",[e._v("CCW")]),e._v(" (counter clockwise)")]),e._v(" "),r("li",[r("strong",[e._v("Ct:")]),e._v(" Non-dimensional thrust coefficient. For example, a rotor with a "),r("code",[e._v("Ct")]),e._v(" of 2.0 produces 2 times the thrust of a rotor with a "),r("code",[e._v("Ct")]),e._v(" of 1.0")]),e._v(" "),r("li",[r("strong",[e._v("Cm:")]),e._v(" Non-dimensional drag torque coefficient. This relates to the axial torque produced by a spinning propeller. This needs to be set relative to "),r("code",[e._v("Ct")]),e._v(" if some torque can be produced by drag and thrust together. If set to 0, the mixer will assume that the rotor does not produce any axial torque.")])]),e._v(" "),r("h2",{attrs:{id:"example-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-file"}},[e._v("#")]),e._v(" Example File")]),e._v(" "),r("p",[e._v("There are numerous exmaples in the source tree: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/geometries/",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/lib/mixer/MultirotorMixer/geometries/"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("A tri-copter geometry ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/geometries/tri_y.toml",target:"_blank",rel:"noopener noreferrer"}},[e._v("tri_y.toml"),r("OutboundLink")],1),e._v(") is reproduced below.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# Tri Y\n\n[info]\nkey = "3y"\ndescription = "Tri Y"\n\n[rotor_default]\naxis      = [0.0, 0.0, -1.0]\nCt        = 1.0\nCm        = 0.0\ndirection = "CW"\n\n[[rotors]]\nname      = "front_right"\nposition  = [0.5, 0.866025, 0.0]\n\n[[rotors]]\nname      = "front_left"\nposition  = [0.5, -0.866025, 0.0]\n\n[[rotors]]\nname      = "rear"\nposition  = [-1.0, 0.0, 0.0]\n')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);