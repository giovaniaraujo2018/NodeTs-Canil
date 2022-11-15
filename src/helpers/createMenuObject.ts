type MenuOptions = ' ' | 'all' | 'dog' | 'cat'| 'fish' | 'login';

export const createMenuObject = (activeMenu: MenuOptions)=> {
   let returnObject = {
    all:false,
    dog:false,
    cat:false,
    fish:false,
    login:false,
};

if(activeMenu !== ' ') {
    returnObject[activeMenu] = true;
}
   return returnObject;

}