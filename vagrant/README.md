### Vagrant VM

This directory holds the [Vagrant] file and [Ansible] commands to create the VM.

### Installation

The vagrant directory stores the Vagrant file to create the VM and provision it with Ansible. Navigate to directory and install VM.

```sh
$ cd vagrant && vagrant up
```

Vagrant machine will take some time to download, install and provision itself.

### Helpful Commands

Use the following commands to interact with the VM. All of these commands should be run from within the vagrant directory.

Start VM
```sh
$ vagrant up
```

Stop VM
```sh
$ vagrant halt
```

Destroy VM
```sh
$ vagrant destroy
```

SSH into VM
```sh
$ vagrant ssh
```

Get VM status
```sh
$ vagrant status
```

[Vagrant]: <https://www.vagrantup.com/>
[Ansible]: <http://docs.ansible.com/ansible/intro_installation.html>
