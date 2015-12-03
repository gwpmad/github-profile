#!/bin/bash
# nodereinstall
# credit: http://stackoverflow.com/a/11178106/2083544


########## INSTRUCTIONS ##########
# 1. Download this script as uninstall_node.sh
# 2. Make it executable: $ chmod u+x uninstall_node.sh
# 3. Execute it: $ ./uninstall_node.sh
# 4. Reinstall node: $ brew install node

# get sudo
sudo -v

# check to see if npm is installed
IS_NPM_MISSING=$(which npm)
if [[ -z $IS_NPM_MISSING ]]; then
  echo "Installing Node and NPM"
else
  echo "Completely uninstalling Node and NPM"
  # get list of global npm modules to reinstall
  # omit the lib directory listing
  GLOBAL_MODULES=`npm -g list --depth 0 --parseable | xargs basename | sed -E 's/^(lib|npm)$//g'`
  if [[ -n $GLOBAL_MODULES ]]; then
    echo "Will reinstall these global npm modules:"
    echo $GLOBAL_MODULES
  fi
fi

# NVM will think it is still installed if NVM_DIR is still set
unset NVM_DIR

# erase all possible install paths
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf ~/{local,lib,include,node*,npm,.npm*}
sudo rm -rf /usr/local/bin/{node*,npm}
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/share/man/man1/node.1
sudo rm -rf /usr/local/lib/dtrace/node.d
sudo rm -rf ~/.npm
sudo rm -rf ~/.nvm
brew install node
sudo rm -Rf /usr/local/share/doc/node
sudo chown $USER /usr/local/share/systemtap/tapset
brew link --overwrite node

