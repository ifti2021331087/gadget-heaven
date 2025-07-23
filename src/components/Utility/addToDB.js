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

export {addToStoredReadList,getStoredReadList}