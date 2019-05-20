module.exports = {
  succeed,
  fail,
  repair,
  get,
};


function succeed(item) {
  if(item.enhancement === 20){
    const newItem = {
      ...item
    }
    return newItem;
  } else if(succeed){
    const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1
    }
    return newItem
  }
}

function fail(item) {
  if(item.enhancement < 15){
    const newItem ={
      name: item.name,
      durability:item.durability -5,
      enhancement:item.enhancement
    }
    return newItem;
  } else if(item.enhancement > 16) {
    const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement -1,
    }
    return newItem;
  }else if(item.enhancement >= 15){
    const newItem ={
      name: item.name,
      durability:item.durability -10,
      enhancement:item.enhancement
    }
    return newItem
  } 
  else{ return item}
}

function repair(item) {
  const newItem = {
    name : item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}

function get(item) {
  return { ...item };
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}