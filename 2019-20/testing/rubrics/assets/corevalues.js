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

	addToBuffer("<h1>Core Values</h1>")
	addToBuffer("<p>Directions: For each skill area, clearly mark the box that best describes the team's accomplishments. Teams should demonstrate everything at the level; if they are missing part, mark the level below. If the team does not demonstrate an area, put an 'X' in the first box for Not Demonstrated (ND). Please provide as many written comments as you can to acknowledge each team’s hard work and to help teams improve. When you have completed the evaluation, please circle the team’s areas of strength.</p>")
	startRubric()

	startrow()
	addLevels()
	closeRow()

	startrow()
	addSectionTitle("Inspiration")
	addSubSection("Discovery - Team explored and improved skills or ideas within all three aspects (Robot, Project, Core Values) of FIRST LEGO League; used creativity & persistence to solve problems","#EDBDAB")
	closeRow()

	startRow()
	addOption("discovery","ND","A")
	addOption("discovery","minimal examples / all examples from 1 aspect","B")
	addOption("discovery","some examples / examples from 2 aspects","C")
	addOption("discovery","multiple examples / examples from all 3 aspects","D")
	addOption("discovery","multiple examples of exploring new skills & ideas; extensive examples of improving in all 3 aspects","E")
	closeRow()

	startRow()
	addSubSection("Team Identity - Fun expression of team identity; team expresses how they enjoy FIRST LEGO League","#EDBDAB")
	closeRow()

	startRow()
	addOption("teamIdentity","ND","A")
	addOption("teamIdentity","minimal identity; minimal enjoyment","B")
	addOption("teamIdentity","some identity; enjoyment is unclear","C")
	addOption("teamIdentity","clear identity; team clearly expresses their enjoyment","D")
	addOption("teamIdentity","clear identity; team engages others in their enjoyment","E")
	closeRow()

	startRow()
	addSubSection("Impact - Team applied knowledge, skills and/or values learned in FIRST LEGO League to improve themselves and their world","#EDBDAB")
	closeRow()

	startRow()
	addOption("impact","ND","A")
	addOption("impact","unclear impact of FIRST LEGO League","B")
	addOption("impact","knowledge, values or skills impacted some team members","C")
	addOption("impact","knowledge, values or skills impacted all team members","D")
	addOption("impact","knowledge, values or skills impacted all team members AND team used values or skills to help others","E")
	closeRow()

	startRow()
	addComments("inspiration")
	closeRow()

	startrow()
	addSectionTitle("Teamwork")
	addSubSection("Effectiveness - Problem solving and decision making processes help team achieve their goals","#EDBDAB")
	closeRow()

	startRow()
	addOption("effectiveness","ND","A")
	addOption("effectiveness","team goals AND team processes unclear","B")
	addOption("effectiveness","team goals OR team processes unclear","C")
	addOption("effectiveness","clear team goals and processes","D")
	addOption("effectiveness","clear processes enable team to accomplish well defined goals","E")
	closeRow()

	startRow()
	addSubSection("Efficiency - Resources used relative to what the team accomplishes (time management, distribution of roles and responsibilities)","#EDBDAB")
	closeRow()

	startRow()
	addOption("efficiency","ND","A")
	addOption("efficiency","limited time management / role definition","B")
	addOption("efficiency","clear time management / role definition","C")
	addOption("efficiency","good time management / role definition allows team to avoid wasting effort OR resources","D")
	addOption("efficiency","excellent time management / role definition allows team to avoid wasting effort AND resources","E")
	closeRow()

	startRow()
	addSubSection("Kids Do the Work - Appropriate balance between team responsibility and coach guidance","#EDBDAB")
	closeRow()

	startRow()
	addOption("kidsDoTheWork","ND","A")
	addOption("kidsDoTheWork","limited team responsibility AND excessive coach guidance","B")
	addOption("kidsDoTheWork","limited team responsibility OR excessive coach guidance","C")
	addOption("kidsDoTheWork","Good balance between team responsibility and coach guidance","D")
	addOption("kidsDoTheWork","team independence with appropriate coach guidance","E")
	closeRow()

	startRow()
	addComments("teamwork")
	closeRow()

	startrow()
	addSectionTitle("Gracious Professionalism®")
	addSubSection("Respect & Inclusion - Consideration and appreciation for the contributions of all team members, especially when solving problems or resolving conflicts","#EDBDAB")
	closeRow()

	startRow()
	addOption("respectInclusion","ND","A")
	addOption("respectInclusion","limited consideration / appreciation for contributions","B")
	addOption("respectInclusion","consideration / appreciation for contributions of most team members","C")
	addOption("respectInclusion","clear consideration / appreciation for contributions of all team members","D")
	addOption("respectInclusion","all team members’ contributions actively welcomed, recognized & included","E")
	closeRow()

	startRow()
	addSubSection("Fairness & Integrity - Team members act and speak with fairness and integrity. Team competes in the spirit of friendly competition and helps others feel valued.","#EDBDAB")
	closeRow()

	startRow()
	addOption("fairnessIntegrity","ND","A")
	addOption("fairnessIntegrity","not evident with majority of team members","B")
	addOption("fairnessIntegrity","evident with majority of team members","C")
	addOption("fairnessIntegrity","clearly evident with all team members","D")
	addOption("fairnessIntegrity","clearly evident with all team members AND team encourages fairness & integrity in others","E")
	closeRow()

	startRow()
	addSubSection("Coopertition® Team competes in the spirit of friendly competition and cooperates with others","#EDBDAB")
	closeRow()

	startRow()
	addOption("coopertition","ND","A")
	addOption("coopertition","unclear or lack of team members cooperating with each other","B")
	addOption("coopertition","team members cooperate with each other","C")
	addOption("coopertition","team actively learns from and teaches teammates / celebrates other teams’ successes","D")
	addOption("coopertition","team actively helps, learns from, or collaborates with other teams AND celebrates other teams’ successes","E")
	closeRow()

	startRow()
	addComments("graciousProfessionalism")
	closeRow()

	startRow()
	addStrengths("Inspiration","Teamwork","Gracious Professionalism")
	
	/*
	window.onload = function() {
	check_missions()
	recalc(0,"advantage1",0)
	}
	*/

	writebuffer("cvlist")
})();

