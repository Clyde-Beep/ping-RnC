const { Plugin } = require('powercord/entities')
const { inject, uninject } = require('powercord/injector')
const { React, getModule } = require('powercord/webpack')
const insertText = e => getModule(['ComponentDispatch'], false).ComponentDispatch.dispatchToLastSubscribed("INSERT_TEXT", { content: e })

module.exports = class PingKyza extends Plugin {
    startPlugin() {
        document.body.addEventListener("keyup", this.keyup);
    }

    keyup(event) {
        if (event.key == 'F4') {
            insertText('<@391401181328572418>')
        }
    }

    pluginWillUnload() {
        document.body.removeEventListener("keyup", this.keyup);
    }
}
