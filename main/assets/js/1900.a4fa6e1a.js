(window.webpackJsonp=window.webpackJsonp||[]).push([[1900],{3394:function(e,t,a){"use strict";a.r(t);var o=a(19),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gazebo-models-repository-px4-gazebo-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-models-repository-px4-gazebo-models"}},[e._v("#")]),e._v(" Gazebo Models Repository (PX4-gazebo-models)")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-gazebo-models"),a("OutboundLink")],1),e._v(" repository is used to store all "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[e._v("Gazebo")]),e._v(" models and worlds that are supported by PX4.")],1),e._v(" "),a("ul",[a("li",[e._v("Models are stored in the "),a("code",[e._v("/models")]),e._v(" directory and worlds are stored in the "),a("code",[e._v("/worlds")]),e._v(" directory.")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models/blob/main/simulation-gazebo",target:"_blank",rel:"noopener noreferrer"}},[e._v("simulation-gazebo"),a("OutboundLink")],1),e._v(" Python script is used for "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/#standalone-mode"}},[e._v("starting Gazebo in standalone mode")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("PX4-gazebo-models")]),e._v(' repository is included in PX4 as a submodule, and all models are available by default when using the "normal" '),a("code",[e._v("make")]),e._v(" targets, such as "),a("code",[e._v("make px4_sitl gz_x500")]),e._v(".")]),e._v(" "),a("p",[e._v("For Gazebo "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/#standalone-mode"}},[e._v("standalone simulations")]),e._v(" you first have obtain the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models/blob/main/simulation-gazebo",target:"_blank",rel:"noopener noreferrer"}},[e._v("simulation-gazebo"),a("OutboundLink")],1),e._v(" Python script, and then it will fetch the models and worlds to "),a("code",[e._v("~/.simulation-gazebo")]),e._v(" if that directory is not present.")],1),e._v(" "),a("h2",{attrs:{id:"simulation-gazebo-standalone-simulation-start-up-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation-gazebo-standalone-simulation-start-up-script"}},[e._v("#")]),e._v(" simulation-gazebo (Standalone Simulation Start-up Script)")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models/blob/main/simulation-gazebo",target:"_blank",rel:"noopener noreferrer"}},[e._v("simulation-gazebo"),a("OutboundLink")],1),e._v(" Python script is used for starting Gazebo in "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/#standalone-mode"}},[e._v("standalone mode")]),e._v(".\nThe script can communicate with a PX4 SITL instance on the same host by default.\nIf the script arguments are set correctly, it can also communicate with any PX4 instance on any machine within the same network.")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("simulation-gazebo")]),e._v(" script does not require any additional libraries and should work out of the box.")]),e._v(" "),a("h3",{attrs:{id:"basic-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[e._v("#")]),e._v(" Basic Usage")]),e._v(" "),a("p",[e._v("The default "),a("code",[e._v("simulation-script")]),e._v(" can be run with:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python simulation-gazebo\n")])])]),a("p",[e._v("This will fetch the models and worlds from the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-gazebo-models",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 gazebo models repository"),a("OutboundLink")],1),e._v(" into subfolders of the "),a("code",[e._v("~/.simulation-gazebo")]),e._v(" directory the first time it is called (or more precisely, if the directory is not detected).\nA "),a("em",[e._v("gz-server")]),e._v(" instance will then be launched using the default grey plane world.")]),e._v(" "),a("p",[e._v("The build system won't automatically update the local copy again if the "),a("code",[e._v(".simulation-gazebo")]),e._v(" folder is detected, but you can force it to update to the latest models and vehicles by passing the "),a("code",[e._v("overwrite")]),e._v(" flag to the script.\nThe resulting command will look something like:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python simulation-gazebo --overwrite\n")])])]),a("p",[e._v("You can connect a PX4-enabled vehicle to an instance of "),a("em",[e._v("gz-server")]),e._v(" using several approaches:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("In a new terminal, run PX4 using "),a("code",[e._v("PX4_GZ_STANDALONE=1 make px4_sitl gz_<vehicle>")]),e._v(" and you will observe a vehicle appearing in Gazebo.")])]),e._v(" "),a("li",[a("p",[e._v('Gazebo also has its own, built-in "resource spawner".\nIt can be called up by clicking on the three dots in the top right corner of the Gazebo GUI.\nThere enter "resource spawner" and, under "Fuel resources", add the owner "px4".\nYou can then drag and drop any PX4 model into your simulation.')]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("These models are taken from an web-server called "),a("a",{attrs:{href:"https://app.gazebosim.org/dashboard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo Fuel"),a("OutboundLink")],1),e._v(", which essentially acts as an online database for all types of models and worlds that can be launched in Gazebo.")])])])]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("p",[e._v("After dropping the vehicle of your choice into Gazebo, launch PX4 SITL with:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("airframe-number-of-choice"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_MODEL_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("vehicle-of-choice"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ./build/px4_sitl_default/bin/px4`\n")])])]),a("p",[e._v("This will connect PX4 SITL to the running instance of Gazebo.")]),e._v(" "),a("p",[e._v("All the functionality and flexibility that exists for PX4 is applicable and directly works in the Gazebo instance.")]),e._v(" "),a("h3",{attrs:{id:"command-line-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-arguments"}},[e._v("#")]),e._v(" Command line arguments")]),e._v(" "),a("p",[e._v("The following arguments can be passed to the "),a("code",[e._v("simulation-gazebo")]),e._v(" script:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("--world")]),e._v('\nA string variable that names the sdf file which runs the simulation world.\nDefault argument is "default", which links to the default world.')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--gz_partition")]),e._v("\nA string variable that sets the gazebo partition to run in (more information "),a("a",{attrs:{href:"https://gazebosim.org/api/transport/13/envvars.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--gz_ip")]),e._v("\nA string variable that sets the IP of the outgoing network interface (more information "),a("a",{attrs:{href:"https://gazebosim.org/api/transport/13/envvars.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--interactive")]),e._v(" A boolean variable that requires the ability to run the code in interactive mode, allowing for custom paths for "),a("code",[e._v("--model_download_source")]),e._v(".\nIf this is not set, "),a("code",[e._v("--model_download_source")]),e._v(" will only download from the default Github repo.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--model_download_source")]),e._v("\nA string variable setting the path to a directory from where models are to be imported.\nAt the moment this can only be a local file directory or a http address.\nThe source should end with the zipped model file (for example: https://path/to/simulation/models/models.zip).")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--model_store")]),e._v("\nA string variable setting the path to the model storage directory.\nThis is where the zip file provided in "),a("code",[e._v("model_download_source")]),e._v(" will be placed.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--overwrite")]),e._v("\nA boolean variable indicating that the "),a("code",[e._v(".simulation-gazebo")]),e._v(" should be updated with world and vehicle data from the gazebo model repository.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("--dryrun")]),e._v("\nA boolean variable that can be set when running test cases.\nIt will not provide any interactivity and will not start a gz-server instance.")])])]),e._v(" "),a("p",[e._v("None of these arguments are required for "),a("code",[e._v("simulation-gazebo")]),e._v(" to work.\nThey are needed when you want to provide custom model downloads, other worlds, or you want to run Gazebo and PX4 on separate hosts.")]),e._v(" "),a("h2",{attrs:{id:"example-running-one-host-with-multiple-terminals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-running-one-host-with-multiple-terminals"}},[e._v("#")]),e._v(" Example: Running One Host with Multiple Terminals")]),e._v(" "),a("p",[e._v("This example explains how you can run standalone mode PX4 via two terminals on one host.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In one terminal run")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_STANDALONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SIM_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("gz_x500 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_WORLD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("windy ./build/px4_sitl_default/bin/px4\n")])])])]),e._v(" "),a("li",[a("p",[e._v("In a second terminal window run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python3 /path/to/simulation-gazebo --world windy\n")])])])])]),e._v(" "),a("p",[e._v("No additional parameters have to be passed to the simulation-gazebo script in order for this example to work, as all Gazebo nodes run on the same host.\nSee the example below for a more involved scenario with different hosts.")]),e._v(" "),a("h2",{attrs:{id:"example-running-multiple-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-running-multiple-hosts"}},[e._v("#")]),e._v(" Example: Running Multiple Hosts")]),e._v(" "),a("p",[e._v('The following example will illustrate how you can set up a distributed system, running PX4 on one host on a network (called "PX4-host") and Gazebo on another (called "Gazebo-host").\nThis will result in two Gazebo nodes running on two different hosts in the same network, and communicating using the '),a("code",[e._v("gz-transport")]),e._v(" library.")]),e._v(" "),a("p",[e._v("We first have to figure out what IP address we can use to send out messages on both hosts.")]),e._v(" "),a("p",[e._v("On the PX4-host, run the following commands:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" iproute2\n")])])]),a("p",[e._v("Then type:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" a\n")])])]),a("p",[e._v("If you are connected to a network via WiFi, then the desired address will usually have a name along the lines of "),a("code",[e._v("wlp12345")]),e._v(".\nRecord the IPv4 address for this interface by noting the number listed next to "),a("code",[e._v("inet")]),e._v(".\nIt should be four numbers, separated by points and followed by a slash and another number.\nA valid IPv4 address would be for example: "),a("code",[e._v("192.168.24.89/24")]),e._v(".")]),e._v(" "),a("p",[e._v("You only require the first four numbers.\nSo in the example's case, the IP address of the PX4-host would be: "),a("code",[e._v("192.168.24.89")]),e._v(".\nNote that if you are connected via Ethernet the network interface might start with "),a("code",[e._v("eth")]),e._v(" or "),a("code",[e._v("en")]),e._v(", however this is not standardized.")]),e._v(" "),a("p",[e._v("Repeat the same procedure on the Gazebo-host and note down the second IPv4 address.\nFor this example we will take "),a("code",[e._v("192.168.24.107")]),e._v(".")]),e._v(" "),a("p",[e._v("We can now start setting up both hosts.\nWe first set up the PX4-host:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GZ_PARTITION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("relay "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GZ_RELAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".24.107 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GZ_IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".24.89 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_STANDALONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SYS_AUTOSTART")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4001")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_SIM_MODEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("gz_x500 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_GZ_WORLD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("baylands ./build/px4_sitl_default/bin/px4\n")])])]),a("p",[e._v("Explanation of the environment variables:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GZ_PARTITION")]),e._v(" declares the partition name that the two gazebo nodes will run in.\nThis "),a("strong",[e._v("has")]),e._v(" to be same across all connected notes.")]),e._v(" "),a("li",[a("code",[e._v("GZ_RELAY")]),e._v(" points to the target IP address on the other host (in this case the Gazebo-host).\nThis environment variable is necessary to connect the two nodes to each other.\nNote that this connection is bidirectional, so "),a("code",[e._v("GZ_RELAY")]),e._v(" only has to be set on one host.")]),e._v(" "),a("li",[a("code",[e._v("GZ_IP")]),e._v(" tells the current host what network interface to use to send out messages.\nThis is required when advertising topics or services.")])]),e._v(" "),a("p",[e._v("We can then set up the Gazebo-host.\nNote that the actual setup order (PX4-host first or Gazebo-host first) is not actually important.\nBoth will continuously look for other Gazebo nodes until they find one.\nOn your Gazebo-host, in a terminal, run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python3 /path/to/simulation-gazebo --gz_partition relay --gz_ip "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".24.107 --world baylands\n")])])]),a("p",[e._v("Here we pass same environmental variables as arguments.\nNote that the "),a("code",[e._v("--world")]),e._v(" values must be the same in order to be able to connect.\nIf you accidentally set "),a("code",[e._v("baylands")]),e._v(" in one host and say "),a("code",[e._v("default")]),e._v(" in the other, then the two nodes will not be able to connect.")]),e._v(" "),a("p",[e._v("If everything worked correctly, then the two hosts should now be connected and you should be able to fly your vehicle in the command line on the PX4-host.")]),e._v(" "),a("p",[e._v("Furthermore, you could also set up QGC and fly your vehicle that way.\nIn addition it is also possible to connect multiple PX4-hosts to the same Gazebo-host by setting the "),a("code",[e._v("-i")]),e._v(" flag as shown on the "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/multi_vehicle_simulation.html"}},[e._v("multi-vehicle simulation")]),e._v(" page.\nFor more information, concerning the environment variables, you can also refer to the "),a("a",{attrs:{href:"https://gazebosim.org/api/transport/12/envvars.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("gz-transport documentation"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("p",[e._v("A connection over VPN (and hence multiple networks) is also possible, but is currently not documented.")]),e._v(" "),a("h2",{attrs:{id:"workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[e._v("#")]),e._v(" Workflow")]),e._v(" "),a("p",[e._v("When a branch gets merged onto the main branch (this could be a model addition, deletion or a something like a parameter change), all models that have received any sort of change will automatically be updated and uploaded to the PX4 account on "),a("a",{attrs:{href:"https://app.gazebosim.org/PX4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo Fuel"),a("OutboundLink")],1),e._v(".\nFurthermore, there is also a workflow that can be used to check the validity of any provided sdf file.")])])}),[],!1,null,null,null);t.default=s.exports}}]);