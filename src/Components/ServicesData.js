const mk = require.context('../Images/serviceImages/modularKitchen', false);
const bt = require.context('../Images/serviceImages/bathRoom', false);
const fg = require.context('../Images/serviceImages/furnitureGoods', false);
const lr = require.context('../Images/serviceImages/livingRoom', false);
const br = require.context('../Images/serviceImages/bedRoom', false);
const ws = require.context('../Images/serviceImages/workSpace', false);
const mkList = mk.keys().map(element => mk(element));
const btList = bt.keys().map(element => bt(element));
const fgList = fg.keys().map(element => fg(element));
const lrList = lr.keys().map(element => lr(element));
const brList = br.keys().map(element => br(element));
const wsList = ws.keys().map(element => ws(element));

const images = [

    lrList,

    brList,

    btList,

    fgList,

    mkList,

    wsList,
]

const names = [

    "Living Room"
    ,
    "Bedroom"
    ,
    "Bathroom"
    ,
    "Furniture Goods"
    ,
    "Modular Kitchen"
    ,
    "Workspace"

]
export { images, names };