export function objectKeys<IObj>(obj: IObj) {
    const keys = Object.keys(obj)
    return keys as Array<keyof IObj>;
}