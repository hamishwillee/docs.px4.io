(window.webpackJsonp=window.webpackJsonp||[]).push([[1182],{2537:function(e,t,a){"use strict";a.r(t);var r=a(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"manufacturer-s-px4-board-support-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manufacturer-s-px4-board-support-guide"}},[e._v("#")]),e._v(" Manufacturer's PX4 Board Support Guide")]),e._v(" "),a("p",[e._v("The PX4 development and test teams fully support and maintain boards that are compliant with the "),a("a",{attrs:{href:"https://pixhawk.org/standards/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk Standard"),a("OutboundLink")],1),e._v(". Manufacturers who wish to deviate from the standard or create completely new boards can do so, but will need to support any resulting compatibility differences.")]),e._v(" "),a("p",[e._v("This guide outlines the "),a("a",{attrs:{href:"#general_requirements"}},[e._v("general requirements")]),e._v(" for board support, along with the additional requirements for the different "),a("a",{attrs:{href:"#board_support_categories"}},[e._v("board support categories")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Boards that are not compliant with the requirements are "),a("a",{attrs:{href:"#unsupported"}},[e._v("unsupported")]),e._v("; they will not be listed on the PX4 website hardware list and will be removed from the codebase.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"general_requirements"}})]),e._v(" "),a("h2",{attrs:{id:"general-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-requirements"}},[e._v("#")]),e._v(" General Requirements")]),e._v(" "),a("p",[e._v("The general requirements for all supported boards are:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The hardware must be available in the market.")])]),e._v(" "),a("li",[a("p",[e._v("The boards may not have blocking hardware bugs or unacceptable quality that make it impossible or dangerous to use the board with PX4 on a UAV. Board needs to pass acceptance criteria to ensure quality of parts and assembly.")])]),e._v(" "),a("li",[a("p",[e._v("A clear and easy way to contact customer support for customers. One or more of the following is accepted:")]),e._v(" "),a("ul",[a("li",[e._v("Slack channel presence")]),e._v(" "),a("li",[e._v("Support email")]),e._v(" "),a("li",[e._v("Phone number")])])]),e._v(" "),a("li",[a("p",[e._v("Point of contact (PoC) for the PX4 maintainers (direct email or available in Slack/Forum/Github)")])]),e._v(" "),a("li",[a("p",[e._v("The board needs to use the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/platforms/nuttx/src/bootloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 bootloader protocol"),a("OutboundLink")],1),e._v(". For more information on bootloaders see: "),a("RouterLink",{attrs:{to:"/zh/hardware/porting_guide_nuttx.html#bootloader"}},[e._v("PX4 Nuttx Porting Guide > Bootloader")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Adequate documentation, which includes, but is not limited to:")]),e._v(" "),a("ul",[a("li",[e._v("A complete pinout made available publicly that maps PX4 pin definitions to:\n"),a("ol",[a("li",[e._v("Microcontroller pins")]),e._v(" "),a("li",[e._v("Physical external connectors")])])]),e._v(" "),a("li",[e._v("A block diagram or full schematic of the main components (sensors, power supply, etc.) that allows to infer software requirements and boot order")]),e._v(" "),a("li",[e._v("A manual of the finished product detailing its use")])])]),e._v(" "),a("li",[a("p",[e._v("There must be a dedicated webpage for the board with PX4, which lists the features and limitations for usage with PX4, and includes or links to the above described documentation.")])])]),e._v(" "),a("h2",{attrs:{id:"board-support-categories-board-support-categories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#board-support-categories-board-support-categories"}},[e._v("#")]),e._v(" Board Support Categories {#board_support_categories)")]),e._v(" "),a("p",[e._v("The board support categories are listed below. The autopilot boards in each category are listed at: "),a("a",{attrs:{href:"https://px4.io/autopilots/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://px4.io/autopilots/."),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Manufacturer supported boards may be as well/better supported than Pixhawk boards (for example through economies of scale).")])]),e._v(" "),a("h2",{attrs:{id:"pixhawk-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-standard"}},[e._v("#")]),e._v(" Pixhawk Standard")]),e._v(" "),a("p",[e._v("A Pixhawk board is one that conforms to the Pixhawk standards. These standards are laid out on "),a("a",{attrs:{href:"http://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://pixhawk.org"),a("OutboundLink")],1),e._v(", but at high-level require that the board passes electrical tests mandated by the standard and the manufacturer has signed the Pixhawk adopter and trademark agreement.")]),e._v(" "),a("p",[e._v("PX4 generally only supports boards that are commercially available, which typically means that board standards released within the last five years are supported.")]),e._v(" "),a("p",[a("a",{attrs:{id:"ver_rev_id"}})]),e._v(" "),a("h3",{attrs:{id:"ver-and-rev-id-hardware-revision-and-version-sensing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ver-and-rev-id-hardware-revision-and-version-sensing"}},[e._v("#")]),e._v(" VER and REV ID (Hardware Revision and Version Sensing)")]),e._v(" "),a("p",[e._v("FMUv5 and onwards have an electrical sensing mechanism. This sensing coupled with optional configuration data will be used to define hardware’s configuration with respect to a mandatory device and power supply configuration. Manufacturers must obtain the VER and REV ID from PX4 board maintainers at "),a("a",{attrs:{href:"mailto:boards@px4.io"}},[e._v("boards@px4.io")]),e._v(" for releasing Pixhawk standard boards.")]),e._v(" "),a("p",[e._v("Because these boards are 100% compliant with the Pixhawk standard, the values assigned for VER and REV ID are the defaults for that FMUv Version.")]),e._v(" "),a("p",[e._v("For example on FMUv5, the values are as listed below:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("REV")]),e._v(" "),a("th",[e._v("VER")]),e._v(" "),a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("0")]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[e._v("FMUV5")])]),e._v(" "),a("tr",[a("td",[e._v("0")]),e._v(" "),a("td",[e._v("4")]),e._v(" "),a("td",[e._v("FMUV5 Mini")])])])]),e._v(" "),a("h2",{attrs:{id:"manufacturer-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manufacturer-supported"}},[e._v("#")]),e._v(" Manufacturer Supported")]),e._v(" "),a("p",[e._v("These boards are supported by the manufacturer. To qualify for this category the board must work with the latest stable PX4 release within 4 months of that release.")]),e._v(" "),a("ul",[a("li",[e._v("Manufacture owns the support")]),e._v(" "),a("li",[e._v("Manufacturer must supply at least 2 boards to the core-dev team (for use on test rack and by test team)")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("While there is no commitment from the PX4 maintainers and the flight test team to support and test boards in this category, we strongly recommended PX4 and manufacturer teams build close working relationships. This will result in a better result for all parties.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("These boards will be assigned "),a("a",{attrs:{href:"#ver_rev_id"}},[e._v("VER and REV ID")]),e._v(" based on compatibility. A special assignment will be made by PX4 if the board is a variant of an FMU specification and capable of running the same binary, with minor differences supported by the manufacturer. Contact the PX4 maintainer at "),a("a",{attrs:{href:"mailto:boards@px4.io"}},[e._v("boards@px4.io")]),e._v(" to request more information.")])]),e._v(" "),a("h2",{attrs:{id:"experimental"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental"}},[e._v("#")]),e._v(" Experimental")]),e._v(" "),a("p",[e._v("These boards are all boards that don't fall in the above categories, or don't fall in those categories "),a("em",[e._v("anymore")]),e._v(". The following requirements apply:")]),e._v(" "),a("ul",[a("li",[e._v("The board must be working with at least one PX4 release for a defined vehicle type, but not necessarily the latest release.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Experimental boards that were "),a("em",[e._v("previously")]),e._v(" Pixhawk or Manufacturer supported will have/retain their original IDs. "),a("em",[e._v("New")]),e._v(" experimental boards are allocated "),a("a",{attrs:{href:"#ver_rev_id"}},[e._v("VER and REV IDs")]),e._v(" based on compatibility, in the same way as Manufacturer Supported boards. :::")]),e._v(" "),a("p",[a("a",{attrs:{id:"unsupported"}})]),e._v(" "),a("h2",{attrs:{id:"unsupported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsupported"}},[e._v("#")]),e._v(" Unsupported")]),e._v(" "),a("p",[e._v('This category includes all boards that aren\'t supported by the PX4 project or a manufacturer, and that fall outside the"experimental" support.')]),e._v(" "),a("ul",[a("li",[e._v('Board is somewhat compatible on paper with something we already support, and it would take minimal effort to raise it to "experimental", but neither the dev-team or the manufacturer are currently pursuing this')]),e._v(" "),a("li",[e._v("Manufacturer/Owner of hardware violates our "),a("a",{attrs:{href:"https://discuss.px4.io/t/code-of-conduct/13655",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code of Conduct"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Closed source, where any of the necessary tools/libs/drivers/etc needed to add support for a board is deemed incompatible due to licensing restrictions")]),e._v(" "),a("li",[e._v("Board doesn't meet minimum requirements outlined in the General requirements")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Unsupported boards will NOT be assigned "),a("a",{attrs:{href:"#ver_rev_id"}},[e._v("VER and REV ID")]),e._v(" (and cannot run PX4 FMUvX firmware).")])])]),e._v(" "),a("h2",{attrs:{id:"release-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-process"}},[e._v("#")]),e._v(" Release Process")]),e._v(" "),a("p",[e._v("It is assumed that when a manufacturer declares that a board falls in a certain category, that the board is compliant with the requirements for that category and the general requirements.")]),e._v(" "),a("p",[e._v("When a new board is brought to market that falls into the manufacturer supported or experimental category, the manufacturer is responsible for updating the PX4 documentation and doing the board release process in PX4. We recommend the following steps:")]),e._v(" "),a("p",[e._v("Contact PX4 board maintainers at "),a("a",{attrs:{href:"mailto:boards@px4.io"}},[e._v("boards@px4.io")]),e._v(" and request the following:")]),e._v(" "),a("ol",[a("li",[e._v("The assignment of a "),a("em",[e._v("board id")]),e._v(" for bootloader and firmware selection in QGC.")]),e._v(" "),a("li",[e._v("The assignment of REV and VER ID resistor values.")]),e._v(" "),a("li",[e._v("If the board supports USB: Either request the assignment of a USB VID and PID or provide the USB VID and PID.")])]),e._v(" "),a("p",[e._v("Integrate the board according to the board porting release process described in the "),a("RouterLink",{attrs:{to:"/zh/hardware/porting_guide.html"}},[e._v("porting guide")])],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("The board support process may be changed and improved over time. Hardware manufacturers are encouraged to contribute to this process through the regular hardware call, the Discuss forum or Slack.")])]),e._v(" "),a("h2",{attrs:{id:"技术支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术支持"}},[e._v("#")]),e._v(" 技术支持")]),e._v(" "),a("p",[e._v("If parts of the board support guide/process are not clear:")]),e._v(" "),a("ul",[a("li",[e._v("Ask the community for help on Slack channel "),a("code",[e._v("#hardware")]),e._v(" or on the discuss forums")]),e._v(" "),a("li",[e._v("Attend the regular hardware call")]),e._v(" "),a("li",[e._v("Consultancy options are listed here: "),a("a",{attrs:{href:"https://px4.io/community/consultants/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://px4.io/community/consultants/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);