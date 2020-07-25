// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer

// Defines a blank save for reset


var load2020 = (function () {

	// Override function in scoring system during the checking for button conflicts


	clearbuffer()

	// Draw the layout

	addToBuffer("<h1>Innovation Project</h1>")
	addToBuffer("<p>Directions: For each skill area, clearly mark the box that best describes the team's accomplishments. Teams should demonstrate everything at the level; if they are missing part, mark the level below. If the team does not demonstrate an area, put an 'X' in the first box for Not Demonstrated (ND). Please provide as many written comments as you can to acknowledge each team’s hard work and to help teams improve. When you have completed the evaluation, please circle the team’s areas of strength.</p>")
	startRubric()

	startrow()
	addLevels()
	closeRow()

	startRow()
	addSectionTitle("Research")
	addSubSection("Problem Identification * - Clear definition of the problem being studied","#D5EDEF")
	endrow()

	startRow()
	addOption("problemIdentification","ND","A")
	addOption("problemIdentification","unclear; few details","B")
	addOption("problemIdentification","partially clear; details missing","C")
	addOption("problemIdentification","mostly clear; detailed","D")
	addOption("problemIdentification","clear; very detailed","E")
	closeRow()

	startRow()
	addSubSection("Sources of Information - Quality and variety of data/evidence and sources cited","#D5EDEF")
	closeRow()

	startRow()
	addOption("sourcesOfInformation","ND","A")
	addOption("sourcesOfInformation","minimal quality; variety limited","B")
	addOption("sourcesOfInformation","quality OR variety need improvement; did not include professional(s)","C")
	addOption("sourcesOfInformation","sufficient quality and variety; included professional(s)","D")
	addOption("sourcesOfInformation","extensive quality and variety; included multiple professionals","E")
	closeRow()

	startRow()
	addSubSection("Problem Analysis - Depth to which the problem was studied and analyzed by the team, including extent of analysis of existing solutions","#D5EDEF")
	closeRow()

	startRow()
	addOption("problemAnalysis","ND","A")
	addOption("problemAnalysis","minimal study; no analysis","B")
	addOption("problemAnalysis","minimal study; some analysis","C")
	addOption("problemAnalysis","sufficient study and analysis","D")
	addOption("problemAnalysis","extensive study and analysis","E")
	closeRow()

	startRow()
	addComments("research")
	closeRow()

	startrow()
	addSectionTitle("Innovative Solution")
	addSubSection("Team Solution* - Clear explanation of the proposed solution and description of how it solves the problem","#D5EDEF")
	closeRow()

	startRow()
	addOption("teamSolution","ND","A")
	addOption("teamSolution","difficult to understand","B")
	addOption("teamSolution","some parts confusing","C")
	addOption("teamSolution","understandable","D")
	addOption("teamSolution","easy to understand by all","E")
	closeRow()

	startRow()
	addSubSection("Innovation - Degree to which the team's solution makes life better by improving existing options, developing a new application of existing ideas, or solving the problem in a completely new way.","#D5EDEF")
	closeRow()

	startRow()
	addOption("innovation","ND","A")
	addOption("innovation","existing solution/application","B")
	addOption("innovation","solution/application contains some original element(s)","C")
	addOption("innovation","original solution/application; potential added value","D")
	addOption("innovation","original solution/application; demonstrated added value","E")
	closeRow()

	startRow()
	addSubSection("Solution Development - Systematic process used to select, develop, evaluate, test, and improve the solution (Implementation could include cost, ease of manufacturing, etc.)","#D5EDEF")
	closeRow()

	startRow()
	addOption("solutionDevelopment","ND","A")
	addOption("solutionDevelopment","process AND explanation need improvement","B")
	addOption("solutionDevelopment","process OR explanation need improvement","C")
	addOption("solutionDevelopment","systematic process included evaluation","D")
	addOption("solutionDevelopment","systematic process included evaluation; implementation considered","E")
	closeRow()

	startRow()
	addComments("innovativeSolution")
	closeRow()

	startrow()
	addSectionTitle("Presentation")
	addSubSection("Sharing* - Degree to which the team shared their Project before the tournament with others who might benefit from the team's efforts","#D5EDEF")
	closeRow()

	startRow()
	addOption("sharing","ND","A")
	addOption("sharing","shared with family / friends","B")
	addOption("sharing","shared outside family / friends (such as classmates)","C")
	addOption("sharing","shared with one audience who may benefit OR one professional","D")
	addOption("sharing","shared with multiple audiences who may benefit OR multiple professionals","E")
	closeRow()

	startRow()
	addSubSection("Creativity - Imagination used to develop and deliver the presentation","#D5EDEF")
	closeRow()

	startRow()
	addOption("creativity","ND","A")
	addOption("creativity","minimally engaging OR unimaginative","B")
	addOption("creativity","engaging OR imaginative","C")
	addOption("creativity","engaging AND imaginative","D")
	addOption("creativity","very engaging AND exceptionally imaginative","E")
	closeRow()

	startRow()
	addSubSection("Presentation Effectiveness - Message delivery and organization of the presentation","#D5EDEF")
	closeRow()

	startRow()
	addOption("presentationEffectiveness","ND","A")
	addOption("presentationEffectiveness","unclear OR disorganized","B")
	addOption("presentationEffectiveness","partially clear; minimal organization","C")
	addOption("presentationEffectiveness","mostly clear; mostly organized","D")
	addOption("presentationEffectiveness","clear AND well organized","E")
	closeRow()

	startRow()
	addComments("presentaion")
	closeRow()

	startRow()
	addStrengths("Research","Innovative Solution","Presentation")
	
	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("projectlist")
})();

