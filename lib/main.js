const cp = require('child_process')
const {AutoLanguageClient} = require('atom-languageclient')

class GoLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.go' ] }
  getLanguageName () { return 'Go' }
  getServerName () { return 'Go Language Server' }

  startServerProcess (projectPath) {
    this.logger.debug('starting go-langserver')
    const proc = cp.spawn('go-langserver', [])
    this.captureServerErrors(proc)
    proc.on('exit', code => {
      if (!proc.killed) {
        atom.notifications.addError('ide-go: go-langserver stopped unexpectedly', {
          dismissable: true,
          description: this.processStdErr ? `<code>${this.processStdErr}</code>` : `Exit code ${code}`
        })
      }
    })
    return proc
  }
}

module.exports = new GoLanguageClient()
