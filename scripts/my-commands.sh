export OWNER=pifamcrypto.testnet

export CONTRACT=dev-1643188823293-86080097938277
near call $CONTRACT init '{"owner":"'$OWNER'"}' --accountId $CONTRACT


#make a call to define a new lottery
near call $CONTRACT define_lottery '{"minNumber":3, "maxNumber":321, "creator":"pifamcrypto.testnet"}' --accountId $CONTRACT

#make a call to join the current lottery
near call $CONTRACT join_lottery '{"player":"esz7.testnet", "number":13}' --accountId $CONTRACT
