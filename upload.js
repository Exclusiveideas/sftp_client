const Client = require("ssh2").Client;
const fs = require("fs")

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
        const readStream = fs.createReadStream("path_to_local_file");
        const writeStream = fs.createWriteStream("path_to_remote_file");

        writeStream.on('close', () => {
            console.log("File succesfully uploaded")
        });

        writeStream.on('end', () => {
            conn.close();
            console.log("sftp connection closed");
        })

        // Initiate file transfer
        readStream.pipe(writeStream);
    })
}).conn(connSettings)