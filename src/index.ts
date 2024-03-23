import { IFileNameCollection } from './types';

/**
 * Iterates through passed collection `allFiles` of type `File[] | IFileNameCollection[]` matching passed `newFileName` of type `string`.
 * If duplicate is found, return a new unique file name. Else, returns same name.
 * 
 * @param allFiles Array of objects of type `File | IFileNameCollection`.
 * @param newFileName File name of type `string`.
 * @returns Returns a unique `string` file name, if duplicate is found.
 */
export function getUniqueFileName(allFiles: File[] | IFileNameCollection[], newFileName: string): string {
    try {
        if (newFileName.indexOf('.') < 0) {
            throw new Error("Invalid file name");
        }
        var uniqueName: string = "";
        const counter: number = allFiles.filter(f => f.name == newFileName).length;
        if (counter === 0) {
            uniqueName = newFileName;
        }
        if (counter >= 1) {
            let _tempNameSubString: string = fileNameResolver(newFileName);
            var numericMatch: RegExpMatchArray = _tempNameSubString.match(/\s(\(\d\))+$/g);
            if (numericMatch) {
                var incrementor: number | any = Number(numericMatch[0].replace(/(?<!.*\(.*)\(|\)(?!.*\).*)/g, ''));
                if (isNaN(incrementor)) {
                    uniqueName = `${_tempNameSubString} (1).${newFileName.split('.')[newFileName.split('.').length - 1]}`;
                    return getUniqueFileName(allFiles, uniqueName);
                } else {
                    uniqueName = `${_tempNameSubString.replace(/(\(\d\))+$/g, '').trim()} (${incrementor + 1}).${newFileName.split('.')[newFileName.split('.').length - 1]}`;
                    return getUniqueFileName(allFiles, uniqueName);
                }
            } else {
                uniqueName = `${_tempNameSubString} (1).${newFileName.split('.')[newFileName.split('.').length - 1]}`;
                return getUniqueFileName(allFiles, uniqueName);
            }
        }
        return uniqueName;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Removes file extension from file name.
 * 
 * @param newFileName File name of type `string`.
 * @returns Returns file name of type `string` with the file extension sliced out.
 */
export function fileNameResolver(newFileName: string) {
    let _tempNameSubString: string = "";
    for (let i: number = 0; i < newFileName.split('.').length - 1; i++) {
        _tempNameSubString = newFileName.split('.').slice(0, -1).join('.')
    }
    return _tempNameSubString;
}

export * from './types'