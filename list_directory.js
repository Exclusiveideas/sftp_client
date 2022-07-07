const Client = require("ssh2").Client;

const connSettings = {
    host: "myserver-direction.com",
    port: 22, // normal port is 22
    username: "exclusiveideas",
    password: "exclusiveideas"
}

const remotePath = "/portfolio/www/exclusiveideas";

const conn = new Client();

conn.on('ready', function() {
    conn.sftp(function(err, sftp) {
        if(err) throw err;
        // you'll be able to use the sftp here
        sftp.readdir(remotePath, (err, list) => {
            if(err) throw err;
            // list directory in the console.
            console.dir(list);
            // Don't forget to close the connection
            conn.end()
        })
    })
}).conn(connSettings)