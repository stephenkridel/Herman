// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron');

// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
process.once('loaded', () => {
	contextBridge.exposeInMainWorld('versions', process.versions);
});

// Exposing the filesystem built in electron.js, more properties
// can be added here to expose more functionality on the main thread
contextBridge.exposeInMainWorld('electron', {
	writeFile: content => {
		ipcRenderer.send('write-file', content);
	},
	getPath: () => {
		return ipcRenderer.invoke('get-path');
	},
	readFile: async () => {
		let file = await ipcRenderer.invoke('read-file');
		return file;
	}
});
