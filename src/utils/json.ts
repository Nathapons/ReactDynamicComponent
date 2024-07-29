const fs = require('fs');
const path = require('path');

export const getJsonData = (fileName: string, isLocal: boolean = true) => {
    const filePath = (isLocal)? path.join(process.cwd(), 'src', 'datas', fileName): fileName
    const stringJsonData = fs.readFileSync(filePath)
    const jsonData = JSON.parse(stringJsonData)

    return jsonData
}