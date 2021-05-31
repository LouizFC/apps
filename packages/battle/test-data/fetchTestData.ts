import axios from "axios";
import fs from "fs";
import glob from "glob";
import tar from "tar";

const repo = 'https://github.com/atlasacademy/battle-test-data',
    hash = '8ea0c5c45717898a58be8ed8737023cbbcb9ef37',
    path = './test-data/data',
    tarPath = `${path}/${hash}.tar.gz`;

(async () => {
    if (fs.existsSync(tarPath)) {
        console.log("TEST DATA ALREADY EXISTS.");
        return;
    }

    console.log("DELETING OLD DATA");
    glob.sync(`${path}/*.tar.gz`).forEach(file => {
        fs.unlinkSync(file);
    });

    console.log("DOWNLOADING DATA");
    await new Promise<void>(resolve => {
        const file = fs.createWriteStream(tarPath);

        axios
            .get(`${repo}/tarball/${hash}`, {responseType: "stream"})
            .then(response => {
                response.data.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            });
    });

    console.log("EXTRACTING DATA");
    tar.x({
        cwd: path,
        file: tarPath,
        strip: 1,
        sync: true,
    });
})();