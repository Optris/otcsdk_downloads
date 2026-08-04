# Optris Thermal Camera SDK (otcsdk)
Download area for the Optris Thermal Camera Software Development Kit. 

# Documentation
The API documentation is included with the SDK installation.
Additionally, the documentation for the latest version is available online and can be accessed via [this link](https://optris.github.io/otcsdk_downloads/).

# Provided Binaries
The following lists the provided binaries for different operating systems and platforms. On request, additional binaries can be provided. 
Please send your requests to [direct-sdk@optris.com](mailto:direct-sdk@optris.com).

On Linux you can use the following commands to find out the version of your `GLIBC` and `GLIBCXX`. Please, choose a library version that uses 
the same or an older `GLIBC`/`GLIBCXX` version.

```bash
# GLIBC
ldd --version

# GLIBCXX
strings /usr/lib/x86_64-linux-gnu/libstdc++.so.6 | grep GLIBCXX
``` 

## Supported Systems

### Windows
#### Environment
- Compiler: `MSVC`
- Toolset: v143
- Windows SDK Version: 10.0
#### Architectures
- amd64

### Debian 13 (Trixie)
#### Environment
- Compiler: `gcc`
- Compiler version: 14.2.0
#### Architectures
- amd64
- arm64

### Debian 12 (Bookworm)
#### Environment
- Compiler: `gcc`
- Compiler version: 12.2.0
#### Architectures
- amd64
- arm64

### Ubuntu 24.04 (Noble Numbat)
#### Environment
- Compiler: `gcc`
- Compiler version: 13.3.0
  - `GLIBC`: 2.39
  - `GLIBCXX`: 3.4.33
#### Architectures
- amd64
- arm64

### Ubuntu 22.04 (Jammy Jellyfish)
#### Environment
- Compiler: `gcc`
- Compiler version: 11.4.0
  - `GLIBC`: 2.35
  - `GLIBCXX`: 3.4.30
#### Architectures
- amd64
- arm64
