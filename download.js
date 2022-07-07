const Client = require("ssh2").Client;

const connSettings = {
    host: "myserver-direction.com",
    port: 22, // normal port is 22
    username: "exclusiveideas",
    password: "exclusiveideas"
}

const conn = new Client();

conn.on('ready', function() {
    conn.sftp(function(err, sftp) {
        if(err) throw err;

        // you'll be able to use the sftp here
        const remotePath = "/remote/file/path/file.txt";
        const localPath = "/local/file/path/file.txt";

        sftp.fastGet(remotePath, localPath, {}, (downloadErr) => {
            if(downloadErr) throw downloadErr;

            console.log("Succesfully downloaded file");
        });
    });
}).conn(connSettings)