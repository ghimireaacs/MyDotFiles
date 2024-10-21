/**
 * @name FreeEmojis
 * @version 1.8.2
 * @description Link emojis if you don't have nitro! Type them out or use the emoji picker!
 * @author An0 (Original) & EpicGazel 
 * @source https://github.com/EpicGazel/DiscordFreeEmojis
 * @updateUrl https://raw.githubusercontent.com/EpicGazel/DiscordFreeEmojis/master/DiscordFreeEmojis.plugin.js
 */

/*@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("It looks like you've mistakenly tried to run me directly. \\n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else @*/


var FreeEmojis = (() => {

    'use strict';
    
    const { createElement, useState } = BdApi.React;
    const FormSwitch = BdApi.Webpack.getByKeys("FormSwitch").FormSwitch;
    
    const BaseColor = "#0cf";
    
    const DOM = BdApi.DOM;
    const hideNitroCSSString = `button[class*='emojiItemDisabled'] { 
                filter: none !important; 
                outline: dotted 4px rgba(255, 255, 255, 0.46); 
                outline-offset: -2px; 
                cursor: pointer !important;
            }
    
            /* Makes the dark background transparent */ 
            [class*="emojiLockIconContainer_"] {
            background: rgba(0,0,0,0) !important;
            scale: 0.01 !important;
            }
    
            /* Makes the emoji lock icon itself too small to see */
            [class*="emojiLockIcon_"] {
                width: 0 !important;
            }
    
            /* Hides lock on server icons */
            [class*="categoryItemLockIconContainer_"] {
                display: none;
            }
    
            /* Hides the "Unlock every emoji with Nitro - Get Nitro" pop-up */
            [class*="upsellContainer_"] {
                display: none;
            }
    
            /* Hides the divider between "Frequently Used" and server emojis */
            [class*="categorySectionNitroTopDivider_"] {
                display: none;
            }
    
            /* Makes the pink background behind "locked" emojis transparent. */
            [class*="categorySectionNitroLocked_"] {
                background-color: transparent;
            }
            `;
    const miscellaneousCSS = `/* Other misc rules */
                /* Make (normal) text emojis bigger */
                .emoji.jumboable {
                    width:150px;
                    height:150px;
                }
    
                /* Really big emoji/sticker/gif drawer */
                [class*="positionLayer_"] { /*.positionLayer_af5dbb*/
                    height: calc(100vh - 220px);
                }
    
                /* Hide send gift button */
                button[aria-label="Send a gift"] {
                    visibility: hidden;
                    display: none;
                }`;
    var css = "";
    
    var Discord;
    var Utils = {
        Log: (message) => { console.log(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
        Warn: (message) => { console.warn(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
        Error: (message) => { console.error(`%c[FreeEmojis] %c${message}`, `color:${BaseColor};font-weight:bold`, "") },
        Webpack: () => {
            let webpackExports;
    
            if(typeof BdApi !== "undefined" && BdApi?.findModuleByProps && BdApi?.findModule) {
                return { findModule: BdApi.findModule, findModuleByUniqueProperties: (props) => BdApi.findModuleByProps.apply(null, props) };
            }
            else if(Discord.window.webpackChunkdiscord_app != null) {
                Discord.window.webpackChunkdiscord_app.push([
                    ['__extra_id__'],
                    {},
                    req => webpackExports = req
                ]);
            }
            else if(Discord.window.webpackJsonp != null) {
                webpackExports = typeof(Discord.window.webpackJsonp) === 'function' ?
                Discord.window.webpackJsonp(
                    [],
                    { '__extra_id__': (module, _export_, req) => { _export_.default = req } },
                    [ '__extra_id__' ]
                ).default :
                Discord.window.webpackJsonp.push([
                    [],
                    { '__extra_id__': (_module_, exports, req) => { _module_.exports = req } },
                    [ [ '__extra_id__' ] ]
                ]);
            }
            else return null;
        
            delete webpackExports.m['__extra_id__'];
            delete webpackExports.c['__extra_id__'];
        
            const findModule = (filter) => {
                for(let i in webpackExports.c) {
                    if(webpackExports.c.hasOwnProperty(i)) {
                        let m = webpackExports.c[i].exports;
        
                        if(!m) continue;
        
                        if(m.__esModule && m.default) m = m.default;
        
                        if(filter(m)) return m;
                    }
                }
        
                return null;
            };
    
            const findModuleByUniqueProperties = (propNames) => findModule(module => propNames.every(prop => module[prop] !== undefined));
    
            return { findModule, findModuleByUniqueProperties };
        }
    };
    
    var pluginSettings = {
        useNativeEmojiSize: {
            name: "Use native emoji size",
            note: "Uploads emoji as their native size. Always scales down to 48px, the Discord emoji size, otherwise.",
            value: true,
            type: FormSwitch
        },
        hideNitroCss: {
            name: "Hide Nitro CSS",
            note: "Removes Nitro adds using CSS.",
            value: true,
            type: FormSwitch
        },
        enableMiscellaneousCSS:{
            name: "Enable Miscellaneous CSS properties",
            note: "Other CSS styles that you may or may not like. Bigger emojis, bigger emoji drawer, hide gift button...",
            value: false,
            type: FormSwitch
        }
    };
    
    var Initialized = false;
    var searchHook;
    var parseHook;
    var getEmojiUnavailableReasonHook;
    function Init()
    {
        Discord = { window: (typeof(unsafeWindow) !== 'undefined') ? unsafeWindow : window };
    
        const webpackUtil = Utils.Webpack();
        if(webpackUtil == null) { Utils.Error("Webpack not found."); return 0; }
        const { findModule, findModuleByUniqueProperties } = webpackUtil;
    
        let emojisModule = findModuleByUniqueProperties([ 'getDisambiguatedEmojiContext', 'searchWithoutFetchingLatest' ]);
        if(emojisModule == null) { Utils.Error("emojisModule not found."); return 0; }
    
        let messageEmojiParserModule = findModuleByUniqueProperties([ 'parse', 'parsePreprocessor', 'unparse' ]);
        if(messageEmojiParserModule == null) { Utils.Error("messageEmojiParserModule not found."); return 0; }
    
        let emojiPermissionsModule = findModuleByUniqueProperties([ 'getEmojiUnavailableReason' ]);
        if(emojiPermissionsModule == null) { Utils.Error("emojiPermissionsModule not found."); return 0; }
    
        searchHook = Discord.original_searchWithoutFetchingLatest = emojisModule.searchWithoutFetchingLatest;
        emojisModule.searchWithoutFetchingLatest = function() { return searchHook.apply(this, arguments); };
    
        parseHook = Discord.original_parse = messageEmojiParserModule.parse;
        messageEmojiParserModule.parse = function() { return parseHook.apply(this, arguments); };
    
        getEmojiUnavailableReasonHook = Discord.original_getEmojiUnavailableReason = emojiPermissionsModule.getEmojiUnavailableReason;
        emojiPermissionsModule.getEmojiUnavailableReason = function() { return getEmojiUnavailableReasonHook.apply(this, arguments); };
        
    
        Utils.Log("initialized");
        Initialized = true;
    
        return 1;
    }
    
    function Start() {
        if(!Initialized && Init() !== 1) return;
    
        const { original_parse, original_getEmojiUnavailableReason } = Discord;
    
        searchHook = function() {
            let result = Discord.original_searchWithoutFetchingLatest.apply(this, arguments);
            console.log({result, arguments})
            result.unlocked.push(...result.locked);
            result.locked = [];
            return result;
        }
    
        function replaceEmoji(parseResult, emoji, index) {
            let emojiUrl = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "webp"}${emoji.animated ? "" :"?quality=lossless&index=" + index}${pluginSettings.useNativeEmojiSize.value ? "" : (emoji.animated ? "?size=48" : "&size=48")}`;
            parseResult.content = parseResult.content.replace
                (`<${emoji.animated ? "a" : ""}:${emoji.originalName || emoji.name}:${emoji.id}>`,
                 `[󠄀](${emojiUrl}) `);
        }
    
        parseHook = function() {
            let result = original_parse.apply(this, arguments);
            let emojisSent = 0;
    
            if(result.invalidEmojis.length !== 0) {
                for(let emoji of result.invalidEmojis) {
                    let index = Math.floor(Math.random() * 100000);
                    replaceEmoji(result, emoji, index);
                }
                result.invalidEmojis = [];
            }
            let validNonShortcutEmojis = result.validNonShortcutEmojis;
            for (let i = 0; i < validNonShortcutEmojis.length; i++) {
                const emoji = validNonShortcutEmojis[i];
                if(!emoji.available) {
                    replaceEmoji(result, emoji, emojisSent);
                    emojisSent++;
                    validNonShortcutEmojis.splice(i, 1);
                    i--;
                }
            }
    
            return result;
        };
    
        getEmojiUnavailableReasonHook = function() {
            return null;
        }
    
        for (let key in pluginSettings) {
            const loadedSetting = BdApi.Data.load("FreeEmojis", key);
    
            if (loadedSetting == undefined) {
                BdApi.Data.save("FreeEmojis", key, pluginSettings[key].value);
            } else {
                pluginSettings[key].value = loadedSetting;
            }
        }

        // Set CSS
        if (pluginSettings.hideNitroCss.value)
            css += hideNitroCSSString;
     
         if (pluginSettings.enableMiscellaneousCSS.value)
             css += miscellaneousCSS;
    
        DOM.addStyle('FreeEmojis', css)	
    }
    
    function Stop() {
        if(!Initialized) return;
    
        searchHook = Discord.original_searchWithoutFetchingLatest;
        parseHook = Discord.original_parse;
        getEmojiUnavailableReasonHook = Discord.original_getEmojiUnavailableReason;
    
        DOM.removeStyle('FreeEmojis')
    }
    
    function GetSettingsPanel() {
        const settingsElement = () => {
    
            const [usePluginSettings, setPluginSettings] = useState(pluginSettings);
            const handleChange = (key, value) => {
                let updatedSettings = { ...usePluginSettings };
                updatedSettings[key].value = value
                setPluginSettings(updatedSettings);
                BdApi.Data.save("FreeEmojis", key, value);

                // Update CSS
                css = "";
                if (pluginSettings.hideNitroCss.value)
                    css += hideNitroCSSString;
             
                if (pluginSettings.enableMiscellaneousCSS.value)
                     css += miscellaneousCSS;

                // Reload CSS
                DOM.removeStyle('FreeEmojis')
                DOM.addStyle('FreeEmojis', css)

            }
    
            return Object.keys(pluginSettings).map((key) => {
                const { type } = pluginSettings[key];
                let outputElement;
    
                if (type == FormSwitch) {
                    let { name, note, value } = pluginSettings[key];
    
                    outputElement = createElement(FormSwitch, {
                        name: name,
                        children: name,
                        note: note,
                        value: value,
                        onChange: (v) => handleChange(key, v)
                    });
                }
    
                return outputElement;
            });
        };
    
        return createElement(settingsElement);
    }
    
    return function() { return {
        getName: () => "DiscordFreeEmojis",
        getShortName: () => "FreeEmojis",
        getDescription: () => "Link emojis if you don't have nitro! Type them out or use the emoji picker!",
        getVersion: () => "1.8.0",
        getAuthor: () => "An0 (Original) & EpicGazel",
    
        start: Start,
        stop: Stop,
        getSettingsPanel: GetSettingsPanel
    }};
    
    })();
    
    module.exports = FreeEmojis;
    
    /*@end @*/
    