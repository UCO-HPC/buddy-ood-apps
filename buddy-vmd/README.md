# Buddy OnDemand - VMD

[![GitHub Release](https://img.shields.io/github/v/release/UCO-HPC/buddy_vmd?style=flat-square)](https://github.com/UCO-HPC/buddy_vmd/blob/devel/CHANGELOG.md)
[![GitHub License](https://img.shields.io/github/license/UCO-HPC/buddy_vmd?style=flat-square)](https://opensource.org/licenses/MIT)

An app designed for UCO's OnDemand that launches VMD.

## Prerequisites

The following should be made available on the compute nodes
- [VMD] 1.9.3+
- [Xfce Desktop] 4+
- [TurboVNC] 2.2.3+
- [websockify] 0.6.0+

Optional add ins:

- [VirtualGL] 2.3+
- [GROMACS] 5.0+

For module support:

- [Lmod] 8.1.0+

[VMD]: https://www.ks.uiuc.edu/Research/vmd/
[Xfce Desktop]: https://xfce.org/
[TurboVNC]: http://www.turbovnc.org/
[websockify]: https://github.com/novnc/websockify
[VirtualGL]: http://www.virtualgl.org/
[GROMACS]: https://www.gromacs.org
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod

## Installation

You can either use the "New App" feature in the Open OnDemand development tab, or clone this app directly to the /var/www/ood/apps/sys folder. 

## Contributing

Please note that this application is specific to our university. Please feel free to copy and use as needed according to the associated license. IF you discover a big during use, please feel free to create a new branch and submit a pull request. 

## License

* Code, documentation, and content are licensed under MIT (see LICENSE.txt) at this time. License is subject to change without notice. 
* VMD. GROMACS, and OnDemand and it's source code are copyrighted by their respective parties
