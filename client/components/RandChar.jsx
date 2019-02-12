import React, { Component } from 'react'
import { Generator } from "tiyl";

const generator = new Generator();
const Character = generator.generate();


export default class RandChar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Background: Character.background.name,
      BG_Reason: Character.background.reason,
      Align: Character.alignment,
      Ideal: Character.background.ideal,
      Race: Character.race.name,
      Age: Character.age,
      Class: Character.class.name,
      Cl_Reason: Character.class.reason
    }
  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark fixed-top bg-dark">
          <h1>Dungeons and Dragons character development has begun!</h1>
        </nav>

        <div className="jumbotron">
          <div className="container">
            <h1>This Is Your Life!</h1>
            <p>
              This is a generator that can help automate the process of rolling on all the character generation tables that can be found
              in the Dungeons &amp; Dragons 5th Edition Player Handbook, Volo's Guide to Monsters, and Xanathar's Guide to Everything.
        </p>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="form-group">
                  <label htmlFor="race">Race</label>
                  <select className="form-control" id="race" defaultValue={this.state.Race}>
                    <option value="Aarakocra">Aarakocra</option>
                    <option value="Aasimar">Aasimar</option>
                    <option value="Bugbear">Bugbear</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Elf">Elf</option>
                    <option value="Feral Tiefling">Feral Tiefling</option>
                    <option value="Firbolg">Firbolg</option>
                    <option value="Genasi">Genasi</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Goblin">Goblin</option>
                    <option value="Goliath">Goliath</option>
                    <option value="Half-Elf">Half-Elf</option>
                    <option value="Half-Orc">Half-Orc</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Hobgoblin">Hobgoblin</option>
                    <option value="Human">Human</option>
                    <option value="Kenku">Kenku</option>
                    <option value="Kobold">Kobold</option>
                    <option value="Lizardfolk">Lizardfolk</option>
                    <option value="Orc">Orc</option>
                    <option value="Tabaxi">Tabaxi</option>
                    <option value="Tiefling">Tiefling</option>
                    <option value="Tortle">Tortle</option>
                    <option value="Triton">Triton</option>
                    <option value="Yuan-ti Pureblood">Yuan-ti Pureblood</option>
                  </select>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="form-group">
                  <label htmlFor="class">Class</label>
                  <select className="form-control" id="class" defaultValue={this.state.Class}>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
                  </select>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="form-group">
                  <label htmlFor="alignment">Alignment</label>
                  <select className="form-control" id="alignment" defaultValue={this.state.Align}>
                    <option value="Lawful Good">Lawful Good</option>
                    <option value="Lawful Neutral">Lawful Neutral</option>
                    <option value="Lawful Evil">Lawful Evil</option>
                    <option value="Neutral Good">Neutral Good</option>
                    <option value="True Neutral">True Neutral</option>
                    <option value="Neutral Evil">Neutral Evil</option>
                    <option value="Chaotic Good">Chaotic Good</option>
                    <option value="Chaotic Neutral">Chaotic Neutral</option>
                    <option value="Chaotic Evil">Chaotic Evil</option>
                  </select>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="form-group">
                  <label htmlFor="background">Background</label>
                  <select className="form-control" id="background" defaultValue={this.state.Background}>
                    <option value="Acolyte">Acolyte</option>
                    <option value="Anthropologist">Anthropologist</option>
                    <option value="Archaeologist">Archaeologist</option>
                    <option value="Charlatan">Charlatan</option>
                    <option value="City Watch / Investigator">City Watch / Investigator</option>
                    <option value="Clan Crafter">Clan Crafter</option>
                    <option value="Cloistered Scholar">Cloistered Scholar</option>
                    <option value="Courtier">Courtier</option>
                    <option value="Criminal / Spy">Criminal / Spy</option>
                    <option value="Entertainer">Entertainer</option>
                    <option value="Faction Agent">Faction Agent</option>
                    <option value="Far Traveler">Far Traveler</option>
                    <option value="Folk Hero">Folk Hero</option>
                    <option value="Gladiator">Gladiator</option>
                    <option value="Guild Artisan / Merchant">Guild Artisan / Merchant</option>
                    <option value="Haunted One">Haunted One</option>
                    <option value="Hermit">Hermit</option>
                    <option value="Inheritor">Inheritor</option>
                    <option value="Knight">Knight</option>
                    <option value="Knight of the Order">Knight of the Order</option>
                    <option value="Mercenary Veteran">Mercenary Veteran</option>
                    <option value="Noble">Noble</option>
                    <option value="Outlander">Outlander</option>
                    <option value="Sage">Sage</option>
                    <option value="Sailor">Sailor</option>
                    <option value="Soldier">Soldier</option>
                    <option value="Urban Bounty Hunter">Urban Bounty Hunter</option>
                    <option value="Urchin">Urchin</option>
                    <option value="Uthgardt Tribe Member">Uthgardt Tribe Member</option>
                    <option value="Waterdhavian Noble">Waterdhavian Noble</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input className="form-control" id="age" type="number" defaultValue={this.state.Age}></input>
                </div>
              </div>
            </div>

            <div className="row">
              <a id="generate" href="/" className="btn btn-primary" role="button">I Don't Know?!
            <i className="fa fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="character"></div>
          <hr></hr>
        </div>
      </React.Fragment >
    )
  }
}
