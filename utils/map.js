'use strict';
const getHDPath = ({ hd, gif }) => hd || gif;
const getSDPath = ({ gif }) => gif;
const getParrotURL = (parrot, getPath) => `https://cultofthepartyparrot.com/${parrot.base}/${getPath(parrot)}`;
const getIconPath = (parrot, getPath) => `./${parrot.base}/${getPath(parrot)}`;
const getMarkdownSnippet = (parrot, getPath) => `![${parrot.name}](${getParrotURL(parrot, getPath)})`;



const mapBase = (parrot, getPath = getHDPath) => ({
  uid: parrot.gif,
  title: parrot.name,
  subtitle: parrot.tip || parrot.hd || parrot.gif,
  icon: {
    path: getIconPath(parrot, getPath),
  }
});

const mapForURL = (getPath = getHDPath) => parrot => ({
  ...mapBase(parrot, getPath),
  arg: getParrotURL(parrot, getPath),
});

const mapForMarkdown = (getPath = getHDPath) => parrot => ({
  ...mapBase(parrot, getPath),
  arg: getMarkdownSnippet(parrot, getPath),
});

module.exports = {
  mapForURL,
  mapForMarkdown,
  getHDPath,
  getSDPath,
};
