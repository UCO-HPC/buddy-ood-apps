# Buddy OnDemand - Maxent

[![GitHub Release](https://img.shields.io/github/v/release/UCO-HPC/buddy-maxent?style=flat-square)](https://github.com/UCO-HPC/buddy-maxent/blob/main/CHANGELOG.md)
[![GitHub License](https://img.shields.io/github/license/UCO-HPC/buddy-maxent?style=flat-square)](https://opensource.org/licenses/MIT)

An app designed for UCO's OnDemand that launches Maxent in a desktop environment.

## Prerequisites

The following should be made available on the compute nodes
- [Maxent] 3.4.4
- [OpenJDK] 1.8.0+
- [Xfce Desktop] 4+
- [TurboVNC] 2.2.3+
- [websockify] 0.6.0+

For module support:

- [Lmod] 8.1.0+

[Maxent]: https://biodiversityinformatics.amnh.org/open_source/maxent/
[OpenJDK]: https://openjdk.java.net/
[Xfce Desktop]: https://xfce.org/
[TurboVNC]: http://www.turbovnc.org/
[websockify]: https://github.com/novnc/websockify
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod

## Installation

You can either use the "New App" feature in the Open OnDemand development tab, or clone this app directly to the /var/www/ood/apps/sys folder. 

## Contributing

Please note that this application is specific to our university. Please feel free to copy and use as needed according to the associated license. If you discover a big during use, please feel free to create a new branch and submit a pull request. 

## License

* Code, documentation, and content are licensed under MIT (see LICENSE.txt) at this time. License is subject to change without notice. 
* American Museum of Natural History and any and all American Museum of Natural History brand, product, service and feature names, logos and slogans are trademarks or registered trademarks of American Natural History Museum or its subsidiaries located in the United States or other countries.
* Use of maxent requires citation as referenced on [their website]
* OnDemand and it's source code are copyrighted by Ohio Supercomputer Center

[their website]: https://biodiversityinformatics.amnh.org/open_source/maxent/
