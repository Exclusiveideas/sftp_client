const Client = require("ssh2").Client;

const connSettings = {
    host: "myserver-direction.com",
    port: 22, // norma lport is 22
    username: "exclusiveideas",
    password: "exclusiveideas"
}

const conn = new Client();

conn.on('ready', function() {
    conn.sftp(function(err, sftp) {
        if(err) throw err;
        // you'll be able to use the sftp here
    })
}).conn(connSettings)