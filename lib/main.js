const cp = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')
const {shell} = require('electron')
const {AutoLanguageClient, DownloadFile} = require('atom-languageclient')

class GoLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.go' ] }
  getLanguageName () { return 'Go' }
  getServerName () { return 'Go Language Server' }

  startServerProcess (projectPath) {
  }
}

module.exports = new GoLanguageClient()
