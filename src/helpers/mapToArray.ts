export function mapToArray<T>(object: T[]): T[] {
    const array: T[] = [];

    for (const element in object) {
        array.push({
            ...object[element],
            id:element,
        });
    }
    return array
}