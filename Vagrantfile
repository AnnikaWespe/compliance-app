# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 8100, host: 8100
  config.vm.network "forwarded_port", guest: 35729, host: 35729
  config.vm.network "forwarded_port", guest: 53703, host: 53703

  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'" 
  config.ssh.forward_x11 = true
  config.ssh.forward_agent = true

  if Vagrant.has_plugin?("vagrant-cachier") then
    config.cache.scope = :box
  end

  if Vagrant.has_plugin?("vagrant-vbguest") then
    config.vbguest.auto_update = true
  end

	config.vm.synced_folder ".", "/vagrant", type: "nfs", fsnotify: true

  end

  config.vm.provider "virtualbox" do |vb|
    vb.name = "ComplianceApp-Dev"
    vb.memory = 2048
    vb.cpus = 2
    vb.customize ["modifyvm", :id, "--usb", "on"]
    vb.customize ["modifyvm", :id, "--usbxhci", "on"] # USB 3.0

  end

  config.vm.provision :shell, path: "bootstrap.sh"
end
