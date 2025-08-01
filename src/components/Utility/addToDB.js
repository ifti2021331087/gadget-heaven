const getStoredReadList=()=>{
    const storedlist=localStorage.getItem('read-list');
    if(storedlist){
        const storedData=JSON.parse(storedlist);
        return storedData;
    }
    else return [];
}

const addToStoredReadList=(id)=>{
    const storedlist=getStoredReadList();
    if(storedlist.includes(id)){
        console.log(id,'already exists in the read list');
    }
    else{
        storedlist.push(id);
        const storedData=JSON.stringify(storedlist);
        localStorage.setItem('read-list',storedData);
    }
}


const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }
    return [];
};

const addToWishlist = (id) => {
    const wishlist = getStoredWishlist();
    if (!wishlist.includes(id)) {
        wishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
};
const removeFromCart = (id) => {
    let cart = getStoredReadList();
    cart = cart.filter(item => item !== id);
    localStorage.setItem('read-list', JSON.stringify(cart));
};

const removeFromWishlist = (id) => {
    let wishlist = getStoredWishlist();
    wishlist = wishlist.filter(item => item !== id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

export { addToStoredReadList, getStoredReadList, addToWishlist, getStoredWishlist, removeFromCart, removeFromWishlist };