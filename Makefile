update-parrots:
	mkdir tmp
	pushd tmp && git clone git@github.com:jmhobbs/cultofthepartyparrot.com.git && popd
	cp -r tmp/cultofthepartyparrot.com/parrots .
	cp -r tmp/cultofthepartyparrot.com/guests .
	cp -r tmp/cultofthepartyparrot.com/flags .
	cp tmp/cultofthepartyparrot.com/parrots.json .
	cp tmp/cultofthepartyparrot.com/guests.json .
	cp tmp/cultofthepartyparrot.com/flags.json .
	rm -rf tmp
.PHONY: update-parrots
