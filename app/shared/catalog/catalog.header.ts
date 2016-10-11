/**
 * Created by Vladimir on 09.10.2016.
 */
export interface IHeader{
    externalName: string;
    innerName: string;
    visable: boolean;
}

export let headersCabel: IHeader[] = [
    {externalName : "Type", innerName : "name", visable: true},
    {externalName : "Size", innerName : "s", visable: true},
    {externalName : "r0, Om//mm2", innerName : "r0", visable: true},
    {externalName : "x0, Om//mm2", innerName : "x0", visable: true},
]