# List of Common Debugging

- Cannot use VM on windows 10 and Docker at the same time
- Cannot VPN into network and use Docker (nginex crashes) when working remotely
  - This seems to be related to the network drives?
  - If docker is running and then I vpn into the network, the computer detects no network drives
  - After running 'docker-compose down' and restating docker, the network drives appear
- Cannot execute 'docker exec' command in git bash
- If you are using DockerToolbox rather than Docker for Windows on Windows, see rm-docker-toolbox-setup

## Debugging '...\r'

Open '.gitattributes'

Add '<file_pattern> -crlf'

Commit '.gitattributes'

Open file in question in notepad++

Open Find+Replace dialog

Repalce '\r' with ''. Make sure that 'Search Mode' is in 'Extended mode'

i.e.

' /usr/bin/env: ‘python\r’: No such file or directory' in error message

Open '.gitattributes'

Add '\*.py -crlf'

Commit, replace in notepad++

## Debugging Virtualization Enabled

'Hardware assisted virtualization and data execution protection must be enabled in the BIOS.

See <https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization-must-be-enabled>'

This issue can be caused by a few things, but the most likely cause is that Virtualization is not enabled in the BIOS of the machine

Contact IT and ask them to Enable Virtualization in your machine's BIOS (this will require someone to restart your machine and change the BIOS)
