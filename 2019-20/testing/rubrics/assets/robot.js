// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset

specialCasesComplete = 0
function specialCasesCheck(mission) {

}

// Override function when calculating points for each mission
function specialCasesRecalc(mission) {
	
}

var load2020 = (function () {

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout

	addToBuffer("<h1>Robot Design</h1>")
	addToBuffer("<p>Directions: For each skill area, clearly mark the box that best describes the team's accomplishments. Teams should demonstrate everything at the level; if they are missing part, mark the level below. If the team does not demonstrate an area, put an 'X' in the first box for Not Demonstrated (ND). Please provide as many written comments as you can to acknowledge each team’s hard work and to help teams improve. When you have completed the evaluation, please circle the team’s areas of strength.</p>")
	startRubric()

	startrow()
	addLevels()
	closeRow()

	startrow()
	addSectionTitle("Mechanical Design")
	addSubSection("Durability - Evidence of structural integrity; ability to withstand rigors of competition","#CFE4AD")
	closeRow()

	startRow()
	addOption("durability","ND","A")
	addOption("durability","quite fragile; breaks a lot","B")
	addOption("durability","frequent or significant faults/repairs","C")
	addOption("durability","rare faults/repairs","D")
	addOption("durability","sound construction; no repairs","E")
	closeRow()

	startRow()
	addSubSection("Mechanical Efficiency - Economic use of parts and time; easy to repair and modify","#CFE4AD")
	closeRow()

	startRow()
	addOption("mechanicalEfficiency","ND","A")
	addOption("mechanicalEfficiency","excessive parts or time to repair/modify","B")
	addOption("mechanicalEfficiency","inefficient parts or time to repair/modify","C")
	addOption("mechanicalEfficiency","appropriate use of parts and time to repair/modify","D")
	addOption("mechanicalEfficiency","streamlined use of parts and time to repair/modify","E")
	closeRow()

	startRow()
	addSubSection("Mechanization - Ability of robot mechanisms to move or act with appropriate speed, strength and accuracy for intended tasks (propulsion and execution)","#CFE4AD")
	closeRow()

	startRow()
	addOption("mechanization","ND","A")
	addOption("mechanization","imbalance of speed, strength and accuracy on most tasks","B")
	addOption("mechanization","imbalance of speed, strength and accuracy on some tasks","C")
	addOption("mechanization","appropriate balance of speed, strength and accuracy on most tasks","D")
	addOption("mechanization","appropriate balance of speed, strength and accuracy on every task","E")
	closeRow()

	startRow()
	addComments("mechanicalDesign")
	closeRow()

	startrow()
	addSectionTitle("Programming")
	addSubSection("Programming Quality - Programs are appropriate for the intended purpose and would achieve consistent results, assuming no mechanical faults","#CFE4AD")
	closeRow()

	startRow()
	addOption("programmingQuality","ND","A")
	addOption("programmingQuality","would not achieve purpose AND would be inconsistent","B")
	addOption("programmingQuality","would not achieve purpose OR would be inconsistent","C")
	addOption("programmingQuality","should achieve purpose repeatedly","D")
	addOption("programmingQuality","should achieve purpose every time","E")
	closeRow()

	startRow()
	addSubSection("Programming Efficiency - Programs are modular, streamlined, and understandable","#CFE4AD")
	closeRow()

	startRow()
	addOption("programmingEfficiency","ND","A")
	addOption("programmingEfficiency","excessive code and difficult to understand","B")
	addOption("programmingEfficiency","inefficient code and challenge to understand","C")
	addOption("programmingEfficiency","appropriate code and easy to understand","D")
	addOption("programmingEfficiency","streamlined code and easy for anyone to understand","E")
	closeRow()

	startRow()
	addSubSection("Automation/Navigation - Ability of the robot to move or act as intended using mechanical and/or sensor feedback (with minimal reliance on driver intervention and/or program timing)","#CFE4AD")
	closeRow()

	startRow()
	addOption("automationNavigation","ND","A")
	addOption("automationNavigation","frequent driver intervention to aim AND retrieve robot","B")
	addOption("automationNavigation","frequent driver intervention to aim OR retrieve robot","C")
	addOption("automationNavigation","robot moves/acts as intended repeatedly w/ occasional driver intervention","D")
	addOption("automationNavigation","robot moves/acts as intended every time with no driver intervention","E")
	closeRow()

	startRow()
	addComments("programming")
	closeRow()

	startrow()
	addSectionTitle("Strategy & Innovation")
	addSubSection("Design Process - Ability to develop and explain improvement cycles where alternatives are considered and narrowed, selections tested, designs improved (applies to programming as well as mechanical design)","#CFE4AD")
	closeRow()

	startRow()
	addOption("designProcess","ND","A")
	addOption("designProcess","organization AND explanation need improvement","B")
	addOption("designProcess","organization OR explanation need improvement","C")
	addOption("designProcess","systematic and well-explained","D")
	addOption("designProcess","systematic, well-explained and well-documented","E")
	closeRow()

	startRow()
	addSubSection("Mission Strategy - Ability to clearly define and describe the team's game strategy","#CFE4AD")
	closeRow()

	startRow()
	addOption("missionStrategy","ND","A")
	addOption("missionStrategy","no clear goals AND no clear strategy","B")
	addOption("missionStrategy","no clear goals OR no clear strategy","C")
	addOption("missionStrategy","clear strategy to accomplish the team's well defined goals","D")
	addOption("missionStrategy","clear strategy to accomplish most/all game missions","E")
	closeRow()

	startRow()
	addSubSection("Innovation - Creation of new, unique, or unexpected feature(s) (e.g. designs, programs, strategies or applications) that are beneficial in performing the specified tasks","#CFE4AD")
	closeRow()

	startRow()
	addOption("innovtaionRD","ND","A")
	addOption("innovtaionRD","original feature(s) with no added value or potential","B")
	addOption("innovtaionRD","original feature(s) with some added value or potential","C")
	addOption("innovtaionRD","original feature(s) with the potential to add significant value","D")
	addOption("innovtaionRD","original feature(s) that add significant value","E")
	closeRow()

	startRow()
	addComments("strategyInnovation")
	closeRow()

	startRow()
	addStrengths("Mechanical Design","Programming","Strategy & Innovation")
	
	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("robotlist")
})();

