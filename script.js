// Complete the js code
function Car(make, model) {
	
		this.make=make;
		this.model=model;
}
	getMakeModel(){
      return this.make +"make model" + this.model;
		}



function SportsCar(make, model, topSpeed) {
 super (make,model);
	this.topSpeed=topSpeed;
	getTopSpeed(){
		return this.topSpeed
	}
}
SportsCar(1000);
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
