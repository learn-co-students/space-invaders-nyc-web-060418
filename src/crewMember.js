
class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive(){
    if (this.currentShip !== "Looking for a Rig" && this.position === 'Pilot') {
      return this.currentShip.warpDrive = "engaged"
    }
    return "had no effect"

  }

  setsInvisibility(){
    if (this.currentShip !== "Looking for a Rig" && this.position === 'Defender') {
      return this.currentShip.cloaked = true
    }
    return "had no effect"

  }

  chargePhasers(){
    if (this.currentShip !== "Looking for a Rig" && this.position === 'Gunner') {
      return this.currentShip.phasersCharge = "charged"
    }
    return "had no effect"
  }

}
