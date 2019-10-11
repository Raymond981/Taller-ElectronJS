const { app, BrowserWindow } = requiere('electron')

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 400,
        height: 400,
        backgroundColor: '#fffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    })

    win.loadURL(`file://${__dirname}/dist/index.html`)

    win.webContents.openDevTools()

    //Liberamos los recursos que ya no se usen
    win.on('closed', function(){
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', function(){
    if(win === null){
        createWindow()
    }
})