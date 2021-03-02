
class FoodModel {
  constructor() {
    this.id = 0;
    this.db = [];
    this.details = ['fruit', 'vegetable', 'meat']
  } 

  //READ: will work for returning all items or specific
  get(id) {
    if(id){
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  //CREATE: create a record
  create(obj) {
    this.id++;
    let record = {
      id: this.id,
      data: {}
    }

    this.details.forEach(detail => record.data[detail] = obj[detail]);

    this.db.push(record);
    return record;
  }

  //UPDATE
  update(id, obj) {
    if(id){
      //target db
      //map over objects within db array
      this.db = this.db.map(record => {
        //if the id passed in the function equals the id of record at iteration, 
        if (record.id === id) {
          //loop thru the details, which is an array, within this record and
          //update value of the record detail to the detail passed in the object
          //or keep detail the same (this allows for one detail within the array to be updated)
          this.details.forEach(detail => record.data[detail] = obj[detail] || record.data[detail])
        }
        return record;
      })
      return this.db.find(record => record.id === id);
    }
  }

  //DELETE
  delete(id){
    if(id){
      //this filters all id's within db that DO NOT equal the id passed in the function 
      //AKA all non-deleted records
      this.db = this.db.filter(record => record.id !== id);
      //this finds and returns the deleted record IE the record with an id
      //that matches the id passed in the function
      return this.db.find(record => record.id === id);
    }
    return undefined;
  }
}

module.exports = FoodModel;