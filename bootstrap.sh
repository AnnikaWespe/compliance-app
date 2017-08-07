#add JAVA as debian package


#add google chrome package
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list

#install dev packages
sudo apt-get update


sudo apt-get install -y --no-install-recommends git build-essential unzip lib32z1 lib32ncurses5 lib32stdc++6  google-chrome-stable software-properties-common

#configure java
echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" | tee /etc/apt/sources.list.d/webupd8team-java.list
echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" | tee -a /etc/apt/sources.list.d/webupd8team-java.list

# Accept license non-iteractive
echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886
apt-get update
sudo apt-get install -y --no-install-recommends oracle-java8-installer git build-essential unzip lib32z1 lib32ncurses5 lib32stdc++6
# Make sure Java 8 becomes default java
#apt-get install -y oracle-java8-set-default
java -version

#set variables for installation instance
export VAGRANT_HOME=/home/vagrant
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
export ANDROID_HOME=$VAGRANT_HOME/android-sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
#create login shell script to set android dev variables.
echo "export JAVA_HOME=${JAVA_HOME}" >> /etc/profile.d/android-env.sh
echo "export ANDROID_HOME=${ANDROID_HOME}" >> /etc/profile.d/android-env.sh
echo "export PATH=${PATH}" >> /etc/profile.d/android-env.sh

#this is needed for remote debugging
curl --create-dirs -L -o /etc/udev/rules.d/51-android.rules -O -sL https://raw.githubusercontent.com/snowdream/51-android/master/51-android.rules
chmod a+r /etc/udev/rules.d/51-android.rules
adduser vagrant plugdev

#install node 7.x
sudo sh -c 'wget -q -O - https://deb.nodesource.com/setup_7.x | bash -'
sudo apt-get install -y nodejs

#install latest ionic and cordova
sudo npm install -g cordova --loglevel=error
sudo npm install -g ionic --loglevel=error

cordova telemetry off
