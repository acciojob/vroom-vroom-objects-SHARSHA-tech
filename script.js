// Complete the js code
function Car(make, model) {
	
		this.make=make;
		this.model=model;
}
	getMakeModel(){
      return this.make +" " + this.model;
		}



function SportsCar(make, model, topSpeed) {
Car.call(this,make,model);
	this.topSpeed=topSpeed;
}
	getTopSpeed(){
		return this.topSpeed
	
}
const myCar = new SportsCar("Ferrari", "F8", 211);
console.log(myCar.getMakeModel());  
console.log(myCar.getTopSpeed()); 
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
