function Stack(capacity) {
  // implement me...
}

Stack.prototype.push = function(value) {
  // implement me...
};
// Time complexity:

Stack.prototype.pop = function() {
  // implement me...
};
// Time complexity:

Stack.prototype.peek = function() {
  // implement me...
};
// Time complexity:

Stack.prototype.count = function() {
  // implement me...
};function Stack(capacity){
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;

}
Stack.prototype.push= function(val){
    if (this._count < this._capacity){
        this._storage[this._count++] = val;
        return this._count;
    }
    return "Maximum Storage Reached";
}
 Stack.prototype.pop = function(){
     if (this._count > 0){
        var value = this._storage[--this._count];
        delete this._storage[this._count];
        return value;
     }
     return "empty"
 }
 Stack.prototype.count = function(){
     return this._count;
 }
 Stack.prototype.peek = function(){
     if (this._count > 0){
     return this._storage[this._count-1];
     }
     return "empty";
 }
 var myStack = new Stack(3);
