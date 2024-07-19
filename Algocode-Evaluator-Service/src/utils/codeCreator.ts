export default function codeCreator(startingCode : string, middleCode : string, endCode: string) : string {
    return `
        ${startingCode}


        ${middleCode}

        ${endCode}
    `;
}

/**
 * for pythonm endCode can be passed as empty string
 * 
 * for java end code can be passed as empty string
 */