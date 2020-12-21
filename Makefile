update-parrots:
	mkdir tmp
	pushd tmp && git clone git@github.com:jmhobbs/cultofthepartyparrot.com.git && popd
	cp -r tmp/cultofthepartyparrot.com/parrots .
	cp -r tmp/cultofthepartyparrot.com/guests .
	cp -r tmp/cultofthepartyparrot.com/flags .
	cp tmp/cultofthepartyparrot.com/parrots.yaml .
	cp tmp/cultofthepartyparrot.com/guests.yaml .
	cp tmp/cultofthepartyparrot.com/flags.yaml .
	rm -rf tmp
.PHONY: update-parrots
