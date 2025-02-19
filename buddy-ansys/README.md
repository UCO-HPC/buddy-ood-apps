# Buddy OnDemand - ANSYS Workbench

[![GitHub Release](https://img.shields.io/github/v/release/UCO-HPC/buddy_ansys?style=flat-square)](https://github.com/UCO-HPC/buddy_ansys/blob/devel/CHANGELOG.md)
[![GitHub License](https://img.shields.io/github/license/UCO-HPC/buddy_ansys?style=flat-square)](https://opensource.org/licenses/MIT)

An app designed for UCO's OnDemand that launches an ANSYS Workbench.

## Prerequisites

The following should be made available on the compute nodes
- [ANSYS Workbench] 2020R2+
- [Xfce Desktop] 4+
- [TurboVNC] 2.2.3+
- [websockify] 0.6.0+

To get ANSYS running:

- [VirtualGL] 2.3+
- [LibPNG] 1.5.13+

For module support:

- [Lmod] 8.1.0+

[ANSYS Workbench]: https://www.ansys.com/
[Xfce Desktop]: https://xfce.org/
[TurboVNC]: http://www.turbovnc.org/
[websockify]: https://github.com/novnc/websockify
[VirtualGL]: http://www.virtualgl.org/
[LibPNG]: http://www.libpng.org/pub/png/libpng.html
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod

## Installation

You can either use the "New App" feature in the Open OnDemand development tab, or clone this app directly to the /var/www/ood/apps/sys folder. 

## Contributing

Please note that this application is specific to our university. Please feel free to copy and use as needed according to the associated license. IF you discover a big during use, please feel free to create a new branch and submit a pull request. 

## License

* Code, documentation, and content are licensed under MIT (see LICENSE.txt) at this time. License is subject to change without notice. 
* Ansys, Ansys Workbench, Ansoft, AUTODYN, CFX, FLUENT, HFSS and any and all ANSYS, Inc. brand, product, service and feature names, logos and slogans are trademarks or registered trademarks of ANSYS, Inc. or its subsidiaries located in the United States or other countries.
* OnDemand and it's source code are copyrighted by Ohio Supercomputer Center
