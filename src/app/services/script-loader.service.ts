import { Injectable } from '@angular/core';
import * as $ from 'jquery';

declare let document: any;

interface Script {
    src: string;
    loaded: boolean;
}

@Injectable()
export class ScriptLoaderService {
    public _scripts: Script[] = [];

    /**
     * Lazy load list of scripts
     * @param tag where to add the scripts
     * @param scripts array with strings of src for scripts
     * @returns Promises with array of responses for scripts
     */
    loadScripts(tag, scripts, loadOnce?: boolean) {
        loadOnce = loadOnce || false;

        scripts.forEach((script: string) => {
            if (!this._scripts[script]) {
                this._scripts[script] = { src: script, loaded: false };
            }
        });

        const promises: any[] = [];
        scripts.forEach(
            (script) => promises.push(this.loadScript(tag, script, loadOnce)));

        return Promise.all(promises);
    }

    /**
     * Lazy load a single script
     * @param tag where to add the script
     * @param src src location of the script
     * @returns promise with the value of that script
     */
    loadScript(tag, src: string, loadOnce?: boolean) {
        loadOnce = loadOnce || false;

        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }

        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            } else {
                // load script tag
                const scriptTag = $('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', this._scripts[src].src);

                $(tag).append(scriptTag);

                this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    }
}
