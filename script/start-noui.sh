# set vars
QTUM_PATH='./node_modules/bodhi-server/qtum/mac/bin'
RPC_PW='bodhi'

# start dev with no Electron windows
./node_modules/.bin/electron . --dev --encryptok --noui --qtumpath=$QTUM_PATH --rpcpassword=$RPC_PW 
