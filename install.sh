#http://xmodulo.com/check-internet-speed-command-line-linux.html

wget https://raw.github.com/gastrodia/speedtest-cli/master/speedtest_cli.py
chmod a+rx speedtest_cli.py
sudo mv speedtest_cli.py /usr/local/bin/speedtest-cli
sudo chown root:root /usr/local/bin/speedtest-cli
