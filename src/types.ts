/**
 * Represents an Object containing file name.
 */
export interface IFile {
    /**
     * A `string`, containing the name of the file without path, such as "My Resume.rtf".
     */
    name: string;
    /**
     * The `File` object.
     */
    file: File;
}