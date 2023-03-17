/**
 * @name KeyboardClick-Modified
 * @author Grey Cat#4774
 * @authorId 367600690878611457
 * @description Used the version from SpoonMcForky and completly replaced the sounds with 8 new ones
 * @version 1.0.0
 * @updateUrl https://raw.githubusercontent.com/GreenCaat/BetterDiscord-Plugins/main/Plugins/KeyboardClick-Modified.plugin.js
 * @source https://raw.githubusercontent.com/GreenCaat/BetterDiscord-Plugins/main/Plugins/KeyboardClick-Modified.plugin.js
 * @website https://raw.githubusercontent.com/GreenCaat/BetterDiscord-Plugins/main/Plugins/KeyboardClick-Modified.plugin.js
 */
// Code is completly from SpoonMcForky, I only changed the links and editied the code a bit
                    const click1 = new Audio('https://www.dropbox.com/s/wcms44k05ehr0o1/1.wav?raw=1');
                    const click2 = new Audio('https://www.dropbox.com/s/9wuinx1izcmb2f1/2.wav?raw=1');
                    const click3 = new Audio('https://www.dropbox.com/s/kti3l6iuye2atnc/3.wav?raw=1');
                    const click4 = new Audio('https://www.dropbox.com/s/q8lnkhyyhed8rv1/4.wav?raw=1');
                    const click5 = new Audio('https://www.dropbox.com/s/zr7zxncfa4bx1fv/5.wav?raw=1');
                    const click6 = new Audio('https://www.dropbox.com/s/lezpc10vejf29b6/6.wav?raw=1');
                    const click7 = new Audio('https://www.dropbox.com/s/1udkpw0z7sqfdgv/7.wav?raw=1');
                    const click8 = new Audio('https://www.dropbox.com/s/4tst20uuh9f2zk4/8.wav?raw=1');
module.exports = (() => {
    const config = {
        info: {
            name: 'KeyboardClick',
            authors: [{
                name: 'Grey Cat#4774',
                discord_id: '367600690878611457',
                github_username: 'GreenCaat'
            }],
            version: '1.0.0',
            description: 'Used the version from SpoonMcForky and completly replaced the sounds with 8 new ones',
            github: 'https://github.com/GreenCaat/BetterDiscord-Plugins',
            github_raw: 'https://raw.githubusercontent.com/GreenCaat/BetterDiscord-Plugins/main/Plugins/KeyboardClick-Modified.plugin.js'
        },
        version: '1.0.0',
        changelogItems: [
            {
                version: '1.0.0',
                title: 'v1.0.0: Release!',
                type: 'added',
                items: [
                    'Replaced all sounds and added 8 new ones'
                ]
            }
        ],
        get changelog() {
            const item = this.changelogItems.find(item => item.version === this.version);
            if (!item) return item;
            return [item];
        },
        defaultConfig: [{
            type: "slider",
            id: "volume",
            name: "Volume",
            note: "Changes volume of clicks",
            value: 50,
            min: 0,
            max: 100,
            markers: Array.from(Array(11), (_, i) => 10 * i),
            stickToMarkers: true
        },
            {
            type: "textbox",
            id: "exceptions",
            name: "Exceptions (Requires Reload)",
            note: "Add keys here to stop them from making a click sound. Separate keys by a comma, no space {Key1,Key2}. Letter keys are formatted like this: \"KeyA\". Easily see key codes here: https://keycode.info",
            value: ",,ControlLeft,ControlRight,ShiftLeft,ShiftRight,AltLeft,AltRight,ArrowUp,ArrowRight,ArrowLeft,ArrowDown,CapsLock,MetaLeft,MetaRight,MediaPlayPause,",
        }]
    };

 return !global.ZeresPluginLibrary ? class {

        constructor() { this._config = config; }
        getName() { return config.info.name; }
        getAuthor() { return config.info.authors.map(a => a.name).join(', '); }
        getDescription() { return config.info.description; }
        getVersion() { return config.info.version; }
        load() {
            BdApi.showConfirmationModal('Library Missing', `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: 'Download Now',
                cancelText: 'Cancel',
                onConfirm: () => {
                    require('request').get('https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js', async (error, response, body) => {
                        if (error) return require('electron').shell.openExternal('https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js');
                        await new Promise(r => require('fs').writeFile(require('path').join(BdApi.Plugins.folder, '0PluginLibrary.plugin.js'), body, r));
                    });
                }
            });
        }
        start() {
            ZeresPluginLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), 'https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js');
        if (window.PluginUpdates && window.PluginUpdates.plugins) delete PluginUpdates.plugins['https://github.com/SpoonMcForky/BetterDiscordPlugins/blob/main/Plugins/KeyboardClick.plugin.js'];
         }
        stop() { }

    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            const {
                DiscordModules
            } = Api;
    
            const {
                DiscordConstants
            } = DiscordModules;
    

            return class clicker extends Plugin {
                
                onStart() {
                    var keyArray = this.createExceptions()
                    
                    document.addEventListener('keydown', clicking);
                    this.clicking = clicking;
                    
                        async function clicking(e) {
                        var num = Math.floor(Math.random() * 7) + 1 // Generate a random number, used later to determine which click sound will be played
                        function playSound(click) {
                            click5.pause()
                            click5.currentTime = 0
                            click1.pause()
                            click1.currentTime = 0
                            click2.pause()
                            click2.currentTime = 0
                            click3.pause()
                            click3.currentTime = 0
                            click4.pause()
                            click4.currentTime = 0
                            click6.pause()
                            click6.currentTime = 0
                            click7.pause()
                            click7.currentTime = 0
                            click8.pause()
                            click8.currentTime = 0
                            click.play(click)
                        }
                        async function click() {

                            if (keyArray.includes(e.code)) // Checks the array 'keyArray', and if the condition is met, do nothing
                                return
                            else if (e.code == 'Backspace') {
                                playSound(click5)
                            }
                            else if (num == 1) {
                                playSound(click1)
                            }
                            else if (num == 2) {
                                playSound(click2)
                            }
                            else if (num == 3) {
                                playSound(click3)
                            }
                            else if (num == 4) {
                                playSound(click4)
                            }
                            else if (num == 5) {
                                playSound(click6)
                            }
                            else if (num == 6) {
                                playSound(click7)
                            }
                            else if (num == 7) {
                                playSound(click8)
                            }
                        }
                        click()
                    }
                }
                stop() {
                    document.removeEventListener('keydown', this.clicking);
                }
                changeVolume() {
                    click1.volume = (this.settings.volume / 100);
                    click2.volume = (this.settings.volume / 100);
                    click3.volume = (this.settings.volume / 100);
                    click5.volume = (this.settings.volume / 100);
                    click4.volume = (this.settings.volume / 100);
                    click6.volume = (this.settings.volume / 100);
                    click7.volume = (this.settings.volume / 100);
                    click8.volume = (this.settings.volume / 100);
                }
                createExceptions() {
                    return this.settings.exceptions.split(",")
                }
                getSettingsPanel() {
                    const panel = this.buildSettingsPanel();
                    panel.addListener((id) => {
                        if (id == "volume") {
                            this.changeVolume()
                        } else if (id == "exceptions") {
                            this.createExceptions()
                        }

                    });
                    return panel.getElement();
                }
            
            }
        }
    
    return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
})();
