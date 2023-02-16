fx_version 'cerulean'
game 'gta5'



ui_page 'html/html.html'

files {
  'html/html.html',
  'html/js.js',
  'html/css.css',
}

client_scripts {
  '@yCore/base/managers_utils.lua',

  'client.lua'
}

server_scripts {
  'config.lua',

}