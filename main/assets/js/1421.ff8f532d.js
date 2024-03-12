(window.webpackJsonp=window.webpackJsonp||[]).push([[1421],{2603:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-lift-drag-avl-automation-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-lift-drag-avl-automation-tool"}},[t._v("#")]),t._v(" Advanced Lift Drag (AVL) Automation Tool")]),t._v(" "),a("p",[t._v("The Gazebo "),a("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/vehicles.html#advanced-plane"}},[t._v("Advanced Plane")]),t._v(" vehicle model uses the "),a("em",[t._v("Advanced Lift Drag")]),t._v(" plugin to model vehicle lift and drag behaviour.\nThis tool allows you to calculate the parameters required to create a "),a("em",[t._v("Advanced Lift Drag")]),t._v(" plugin for your own particular vehicle.")],1),t._v(" "),a("p",[t._v("You only have to provide a few parameters for each wing foil and the tool will use this information to call the Athena Lattice Vortex (AVL) to make the necessary calculations.\nThe results will then automatically be written into a provided plugin template that can then be copy-pasted into a model or world sdf file.")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("To setup the tool:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download AVL 3.36 from "),a("a",{attrs:{href:"https://web.mit.edu/drela/Public/web/avl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.mit.edu/drela/Public/web/avl/"),a("OutboundLink")],1),t._v(".\nThe file for AVL version 3.36 can be found about halfway down the page.")])]),t._v(" "),a("li",[a("p",[t._v("After downloading, extract AVL and move it to the home directory using:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xf avl3.36.tgz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" ./Avl /home/\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Follow the "),a("strong",[t._v("README.md")]),t._v(" found in "),a("code",[t._v("./Avl")]),t._v(" to finish the setup process for AVL (this requires that you set up "),a("code",[t._v("plotlib")]),t._v(" and "),a("code",[t._v("eispack")]),t._v(" libraries).\nWe recommend using the "),a("code",[t._v("gfortran")]),t._v(" compile option, which might further require that you to install "),a("code",[t._v("gfortran")]),t._v(".\nOn Ubuntu can be done by running:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gfortran\n")])])]),a("p",[t._v("When running the Makefile for AVL, you might encounter an "),a("code",[t._v("Error 1")]),t._v(" message stating that there is a directory missing.\nThis does not prevent AVL from working for our purposes.")])])]),t._v(" "),a("p",[t._v("Once the process described in the AVL README is completed, AVL is ready to be used.\nNo further set up is required on the side of the AVL or the tool.")]),t._v(" "),a("p",[t._v("If you want to move the location of the AVL directory, this can simply be done by passing the "),a("code",[t._v("--avl_path")]),t._v(" flag to the "),a("code",[t._v("input_avl.py")]),t._v(' file, using the desired directory location for the flag (don\'t forget to place a "/" behind the last part of the path).\nRunning this will automatically also adjust the paths where necessary.')]),t._v(" "),a("h2",{attrs:{id:"run-avl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-avl"}},[t._v("#")]),t._v(" Run AVL")]),t._v(" "),a("p",[t._v("An example template has been provided in the form of the "),a("code",[t._v("input.yml")]),t._v(" that implements a standard plane with two ailerons, an elevator and a rudder.\nThis example template can be run using: "),a("code",[t._v("python input_avl.py --yaml_file input.yml")]),t._v(".")]),t._v(" "),a("p",[t._v("To run the tool for your plane:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Copy the example "),a("code",[t._v("input.yml")]),t._v(" to "),a("code",[t._v("<your_custom_yaml_file>.yml")]),t._v(" and modify it to match your desired plane")])]),t._v(" "),a("li",[a("p",[t._v("Run the tool on your yml file:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python input_avl.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_custom_yaml_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".yml\n")])])]),a("p",[t._v("Note that the "),a("code",[t._v("yaml")]),t._v(" and "),a("code",[t._v("argparse")]),t._v(" packages must be present in your Python environment.")])]),t._v(" "),a("li",[a("p",[t._v("The tool prompts for a range of vehicle specific parameters that are needed in order to specify the geometry and physical properties of the plane.\nYou can either:")]),t._v(" "),a("ul",[a("li",[t._v("select a predefined model template (such as a Cessna or a VTOL), which has a known number of control surfaces, and just modify some physical properties, or")]),t._v(" "),a("li",[t._v("define a completely custom model")])])])]),t._v(" "),a("p",[t._v("Once the script has been executed, the generated "),a("code",[t._v(".avl")]),t._v(", "),a("code",[t._v(".sdf")]),t._v(" and a plot of the proposed control surfaces can be found in "),a("code",[t._v("<your-plane-name>")]),t._v(" directory.\nThe sdf file is the generated Advanced Lift Drag Plugin that can be copied and pasted into a model.sdf file, which can then be run in Gazebo.")]),t._v(" "),a("h2",{attrs:{id:"functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functionality"}},[t._v("#")]),t._v(" Functionality")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("input_avl.py")]),t._v(" file takes the user-provided parameters and creates an .avl file from this that can be read by AVL (the program).\nThis happens in the "),a("strong",[t._v("process.sh")]),t._v(" file.")]),t._v(" "),a("p",[t._v("The output generated by AVL will be saved in two files: "),a("strong",[t._v("custom_vehicle_body_axis_derivatives.txt")]),t._v(" and "),a("strong",[t._v("custom_vehicle_stability_derivatives.txt")]),t._v(".\nThese two files contain the parameters that are required in order to populate the Advanced Lift Drag Plugin.")]),t._v(" "),a("p",[t._v("Finally, "),a("strong",[t._v("avl_out_parse.py")]),t._v(" reads the generated .txt files and assigns parameters to the correct elements in sdf.")]),t._v(" "),a("p",[t._v("The generated Advanced Lift Drag plugin ("),a("code",[t._v("<custom_plane>.sdf")]),t._v(") can be copied into the particular "),a("strong",[t._v("model.sdf")]),t._v(" file used by Gazebo.")]),t._v(" "),a("h2",{attrs:{id:"usability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usability"}},[t._v("#")]),t._v(" Usability")]),t._v(" "),a("p",[t._v("The current implementation provides a minimal working example.\nMore accurate measurements can be made by adjusting the chosen number of vortices along span and chord according to desired preferences.\nA good starting point for this can be found here: "),a("a",{attrs:{href:"https://www.redalyc.org/pdf/6735/673571173005.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.redalyc.org/pdf/6735/673571173005.pdf"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("One can also more accurately model a vehicle by using a larger number of sections.\nIn the current .yml file, only a left and right edge are defined for each surface yielding exactly one section, but the code supports expanding this to any number of desired sections.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("A control surface in AVL is always defined from left to right.\nThis means you need to first provide the left edge of a surface and then the right edge.\nIf you do this the opposite way around, a surface will essentially be defined upside down.")]),t._v(" "),a("li",[t._v("The tool is designed to only support at most two control surfaces of any type on any one vehicle.\nHaving more surfaces than that can lead to faulty behavior.")]),t._v(" "),a("li",[t._v("Another important point is that these scripts make use of the match, case syntax, which was only introduced in Python in version 3.10.")]),t._v(" "),a("li",[t._v("The primary reference resource for AVL can be found at "),a("a",{attrs:{href:"https://web.mit.edu/drela/Public/web/avl/AVL_User_Primer.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://web.mit.edu/drela/Public/web/avl/AVL_User_Primer.pdf"),a("OutboundLink")],1),t._v(".\nThis document was written by the creators of AVL and contains all the variables that could be required in defining the control surfaces.")]),t._v(" "),a("li",[t._v("AVL cannot predict stall values so these need to be calculated/estimated in another way.\nIn the current implementation, default stall values have been taken from PX4's Advanced Plane.\nThese should naturally be changed for new/different models.")])])]),t._v(" "),a("h2",{attrs:{id:"parameter-assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-assignment"}},[t._v("#")]),t._v(" Parameter Assignment")]),t._v(" "),a("p",[t._v("Below is a comprehensive list on how the parameters are assigned at output and what files in AVL they are taken from.\nThe Advanced Lift Drag Plugin contains more detail about what each of these parameters do.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The parameters have not been verified by an expert, so you should check them in the plugin.")])]),t._v(" "),a("p",[t._v("From the stability derivatives log file, the following advanced lift drag plugin parameters are taken:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name in AVL")]),t._v(" "),a("th",[t._v("Name in Advanced Lift Drag Plugin")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Alpha")]),t._v(" "),a("td",[t._v("alpha")]),t._v(" "),a("td",[t._v("The angle of attack")])]),t._v(" "),a("tr",[a("td",[t._v("Cmtot")]),t._v(" "),a("td",[t._v("Cem0")]),t._v(" "),a("td",[t._v("Pitching moment coefficient at zero angle of attack")])]),t._v(" "),a("tr",[a("td",[t._v("CLtot")]),t._v(" "),a("td",[t._v("CL0")]),t._v(" "),a("td",[t._v("Lift Coefficient at zero angle of attack")])]),t._v(" "),a("tr",[a("td",[t._v("CDtot")]),t._v(" "),a("td",[t._v("CD0")]),t._v(" "),a("td",[t._v("Drag coefficient at zero angle of attack")])]),t._v(" "),a("tr",[a("td",[t._v("CLa")]),t._v(" "),a("td",[t._v("CLa")]),t._v(" "),a("td",[t._v("dCL/da (slope of CL-alpha curve)")])]),t._v(" "),a("tr",[a("td",[t._v("CYa")]),t._v(" "),a("td",[t._v("CYa")]),t._v(" "),a("td",[t._v("dCy/da (sideforce slope wrt alpha)")])]),t._v(" "),a("tr",[a("td",[t._v("Cla")]),t._v(" "),a("td",[t._v("Cell")]),t._v(" "),a("td",[t._v("dCl/da (roll moment slope wrt alpha)")])]),t._v(" "),a("tr",[a("td",[t._v("Cma")]),t._v(" "),a("td",[t._v("Cema")]),t._v(" "),a("td",[t._v("dCm/da (pitching moment slope wrt aLpha - before stall)")])]),t._v(" "),a("tr",[a("td",[t._v("Cna")]),t._v(" "),a("td",[t._v("Cena")]),t._v(" "),a("td",[t._v("dCn/da (yaw moment slope wrt alpha)")])]),t._v(" "),a("tr",[a("td",[t._v("CLb")]),t._v(" "),a("td",[t._v("CLb")]),t._v(" "),a("td",[t._v("dCL/dbeta (lift coefficient slope wrt beta)")])]),t._v(" "),a("tr",[a("td",[t._v("CYb")]),t._v(" "),a("td",[t._v("CYb")]),t._v(" "),a("td",[t._v("dCY/dbeta (side force slope wrt beta)")])]),t._v(" "),a("tr",[a("td",[t._v("Clb")]),t._v(" "),a("td",[t._v("Cell")]),t._v(" "),a("td",[t._v("dCl/dbeta (roll moment slope wrt beta)")])]),t._v(" "),a("tr",[a("td",[t._v("Cmb")]),t._v(" "),a("td",[t._v("Cemb")]),t._v(" "),a("td",[t._v("dCm/dbeta (pitching moment slope wrt beta)")])]),t._v(" "),a("tr",[a("td",[t._v("Cnb")]),t._v(" "),a("td",[t._v("Cenb")]),t._v(" "),a("td",[t._v("dCn/dbeta (yaw moment slope wrt beta)")])])])]),t._v(" "),a("p",[t._v("From the body axis derivatives log file, the following advanced lift drag plugin parameters are taken:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name in AVL")]),t._v(" "),a("th",[t._v("Name in Advanced Lift Drag Plugin")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("e")]),t._v(" "),a("td",[t._v("eff")]),t._v(" "),a("td",[t._v("Wing efficiency (Oswald efficiency factor for a 3D wing)")])]),t._v(" "),a("tr",[a("td",[t._v("CXp")]),t._v(" "),a("td",[t._v("CDp")]),t._v(" "),a("td",[t._v("dCD/dp (drag coefficient slope wrt roll rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CYp")]),t._v(" "),a("td",[t._v("CYp")]),t._v(" "),a("td",[t._v("dCY/dp (sideforce slope wrt roll rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CZp")]),t._v(" "),a("td",[t._v("CLp")]),t._v(" "),a("td",[t._v("dCL/dp (lift coefficient slope wrt roll rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Clp")]),t._v(" "),a("td",[t._v("Cellp")]),t._v(" "),a("td",[t._v("dCl/dp (roll moment slope wrt roll rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Cmp")]),t._v(" "),a("td",[t._v("Cemp")]),t._v(" "),a("td",[t._v("dCm/dp (pitching moment slope wrt roll rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Cmp")]),t._v(" "),a("td",[t._v("Cenp")]),t._v(" "),a("td",[t._v("dCn/dp (yaw moment slope wrt roll rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CXq")]),t._v(" "),a("td",[t._v("CDq")]),t._v(" "),a("td",[t._v("dCD/dq (drag coefficient slope wrt pitching rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CYq")]),t._v(" "),a("td",[t._v("CYq")]),t._v(" "),a("td",[t._v("dCY/dq (side force slope wrt pitching rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CZq")]),t._v(" "),a("td",[t._v("CLq")]),t._v(" "),a("td",[t._v("dCL/dq (lift coefficient slope wrt pitching rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Clq")]),t._v(" "),a("td",[t._v("Cellq")]),t._v(" "),a("td",[t._v("dCl/dq (roll moment slope wrt pitching rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Cmq")]),t._v(" "),a("td",[t._v("Cemq")]),t._v(" "),a("td",[t._v("dCm/dq (pitching moment slope wrt pitching rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Cnq")]),t._v(" "),a("td",[t._v("Cenq")]),t._v(" "),a("td",[t._v("dCn/dq (yaw moment slope wrt pitching rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CXr")]),t._v(" "),a("td",[t._v("CDr")]),t._v(" "),a("td",[t._v("dCD/dr (drag coefficient slope wrt yaw rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CYr")]),t._v(" "),a("td",[t._v("CYr")]),t._v(" "),a("td",[t._v("dCY/dr (side force slope wrt yaw rate)")])]),t._v(" "),a("tr",[a("td",[t._v("CZr")]),t._v(" "),a("td",[t._v("CLr")]),t._v(" "),a("td",[t._v("dCL/dr (lift coefficient slope wrt yaw rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Clr")]),t._v(" "),a("td",[t._v("Cellr")]),t._v(" "),a("td",[t._v("dCl/dr (roll moment slope wrt yaw rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Cmr")]),t._v(" "),a("td",[t._v("Cemr")]),t._v(" "),a("td",[t._v("dCm/dr (pitching moment slope wrt yaw rate)")])]),t._v(" "),a("tr",[a("td",[t._v("Cnr")]),t._v(" "),a("td",[t._v("Cenr")]),t._v(" "),a("td",[t._v("dCn/dr (yaw moment slope wrt yaw rate)")])])])]),t._v(" "),a("p",[t._v("Furthermore, every control surface also has six own parameters, which are also derived from this log file.\n"),a("code",[t._v("{i}")]),t._v(" below ranges from 1 to the number of unique control surface types in the model.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name in AVL")]),t._v(" "),a("th",[t._v("Name in Advanced Lift Drag Plugin")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CXd{i}")]),t._v(" "),a("td",[t._v("CD_ctrl")]),t._v(" "),a("td",[t._v("Effect of the control surface's deflection on drag")])]),t._v(" "),a("tr",[a("td",[t._v("CYd{i}")]),t._v(" "),a("td",[t._v("CY_ctrl")]),t._v(" "),a("td",[t._v("Effect of the control surface's deflection on side force")])]),t._v(" "),a("tr",[a("td",[t._v("CZd{i}")]),t._v(" "),a("td",[t._v("CL_ctrl")]),t._v(" "),a("td",[t._v("Effect of the control surface's deflection on lift")])]),t._v(" "),a("tr",[a("td",[t._v("Cld{i}")]),t._v(" "),a("td",[t._v("Cell_ctrl")]),t._v(" "),a("td",[t._v("Effect of the control surface's deflection on roll moment")])]),t._v(" "),a("tr",[a("td",[t._v("Cmd{i}")]),t._v(" "),a("td",[t._v("Cem_ctrl")]),t._v(" "),a("td",[t._v("Effect of the control surface's deflection on pitching moment")])]),t._v(" "),a("tr",[a("td",[t._v("Cnd{i}")]),t._v(" "),a("td",[t._v("Cen_ctrl")]),t._v(" "),a("td",[t._v("Effect of the control surface's deflection on yaw moment")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);