const getEventsSaveId = () =>{
    const getEventsId = localStorage.getItem('events');
    if(getEventsId){
        return JSON.parse(getEventsId)
    }
    return [];
}

const saveEventsId = id =>{
    const getEventsId = getEventsSaveId();
    const existed = getEventsId.find(event => event.id === id)
    if(!existed){
        getEventsId.push(id);
        localStorage.setItem('events', JSON.stringify(getEventsId) )
    }
}

export {getEventsSaveId, saveEventsId};