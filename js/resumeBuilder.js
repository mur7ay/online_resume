var formattedName = HTMLheaderName.replace("%data%", "Shawn Murray");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

// // Top Header with My name and my role.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName)

var work = {
	"jobs" :
		[{
			"employer" : "Muve",
			"title" : "Co-founder, CEO",
			"location" : "Cincinnati, OH, US",
			"dates" : "Feb. 01, 2016 - Present",
			"description" : "Muve is a peer-to-peer, on-demand moving service for micro-moves. We started Muve to take the stress out of the moving process and while creating a more efficent, affordable solution to a ordinary mover.",
		},
		{
			"employer" : "6InchGutters.com",
			"title" : "CTO",
			"location" : "Cincinnati, OH, US",
			"dates" : "Oct. 15, 2016 - Present",
			"description" : "6InchGutters.com takes the middleman out of the process of purchasing gutters which saves the customer while purchasing and the installation. I designed and developed the website and we plan to develop an iOS and Android application in the near future."
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
	  $("#workExperience").append(HTMLworkStart);

	  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedworkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedworkDesc;

		$(".work-entry:last").append(formattedLocation);
	  $(".work-entry:last").append(formattedEmployerTitle);
	}
}

displayWork();

var education = {
	"education" :
	 [{
		"school" : "Arizona State University",
		"degree" : "BS",
		"dates" : "2015 - Present",
		"location" : "Tempe, AZ, US",
		"major" : "Computer Science"
	},
	{
		"school" : "University of Cincinnati",
		"degree" : "AS",
		"dates" : "2011 - 2014",
		"location" : "Cincinnati, OH, US",
		"major" : "Applied Science"
	}
  ]
}

function displayEducation() {
	for (edu in education.education) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.education[edu].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLschoolDates.replace("%data%", education.education[edu].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.education[edu].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.education[edu].major);
		$(".education-entry:last").append(formattedMajor);
	}
}

displayEducation();

var projects = {
	"projects" : [
		{
			"title" : "Muve",
			"dates" : "2016",
			"description" : "Designed and developed the website for Muve, a peer-to-peer, on-demand moving platform. HTML, CSS, JavaScript and Firebase was used for this project. The first initial iteration of the website was to simply provide information to the user and capture their information. Additionally, theres a form to sign individuals up as Muvers, which are the independent contractors performing the moving.",
			"images" : ["images/muve.jpg"]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(projectTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var projectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(projectDesc);

		var projectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(projectImages);
	}
}

projects.display();

// Using object literal notation
var bio = {
    "name": "Shawn Murray",
    "role": "Web Developer",
    "welcomeMessage": "Hello, I'm Shawn Murray",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "513-781-6780",
        "email": "mur7ay@me.com",
        "github": "github.com/mur7ay",
        "twitter": "twitter.com/mur7ay",
        "location": "Cincinnati, OH, US"
    },
    "skills": [
        "Front-End Web Development", "JavaScript", "Android Development", "Business Management"
    ]
}

// Contact information
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

// Contact Information right under header
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedPhone);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

// Appending contact info to the bottom as well.
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedPhone);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);


var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMessage);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

$("#mapDiv").append(googleMap);
