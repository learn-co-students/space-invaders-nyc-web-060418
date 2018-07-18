class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = true
    this.phasersCharge = "uncharged"
    this.crew = crew
    if (this.crew.length !== 0){
      this.crew.forEach(function(crewMember){
        crewMember.currentShip = this
      }.bind(this));
      this.docked = false;
    }
  }
}
