update-parrots:
	mkdir tmp
	pushd tmp && git clone git@github.com:jmhobbs/cultofthepartyparrot.com.git
	cp -r tmp/guests .
.PHONY: update-parrots
