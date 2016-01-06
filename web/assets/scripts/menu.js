var remote = require('remote');
var ipc = require("electron").ipcRenderer;
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
  {
    label: 'Motion k',
    submenu: [
      {
        label: "Modo apresentação",
        accelerator: 'Alt+CmdOrCtrl+K',
        click: function() {
          ipc.send('kiosk');
        },
      },
      {
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: function () {
          ipc.send('quit');
        }
      }
    ],
  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'Sobre o Motion K',
        click: function() {
          ipc.send('about');
        },
      },
      {
        label: 'Guia de Utilização',
        click: function() {
          ipc.send('user-guide');
        }
      }
    ]
  }
]);

Menu.setApplicationMenu(menu);
