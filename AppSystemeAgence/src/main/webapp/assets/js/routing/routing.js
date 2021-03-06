// Configuration de la table de routage
app.config(function($routeProvider) {
	
	// ----- ClasseStandard
	$routeProvider
		.when("/listCS",{
			controller:"listeCSCtrl",
			templateUrl:"vues/classeStandard/listeCS.html"
		})
		.when("/addCS", {
			controller:"ajoutCSCtrl",
			templateUrl:"vues/classeStandard/ajoutCS.html"
		})
		.when("/updateCS", {
			controller:"modifCSCtrl",
			templateUrl:"vues/classeStandard/modifCS.html"
		})
		.when("/deleteCS", {
			controller:"supprCSCtrl",
			templateUrl:"vues/classeStandard/supprCS.html"
		})
		.when("/home", {		// Page choisie pour faire l'accueil
			controller:"rechCSCtrl",
			templateUrl:"vues/home.html"
		});
	
	// ----- BienImmobilier
	$routeProvider
	.when("/listBI",{
		controller:"listeBICtrl",
		templateUrl:"vues/bienImmobilier/listeBI.html"
	})
	.when("/listBICat",{
		controller:"listeBICatCtrl",
		templateUrl:"vues/bienImmobilier/listeBICat.html"
	})
	.when("/listBIProp",{
		controller:"listeBIPropCtrl",
		templateUrl:"vues/bienImmobilier/listeBIProp.html"
	})
	.when("/addBI", {
		controller:"ajoutBICtrl",
		templateUrl:"vues/bienImmobilier/ajoutBI.html"
	})
	.when("/updateBI", {
		controller:"modifBICtrl",
		templateUrl:"vues/bienImmobilier/modifBI.html"
	})
	.when("/deleteBI", {
		controller:"supprBICtrl",
		templateUrl:"vues/bienImmobilier/supprBI.html"
	})
	.when("/searchBI", {
		controller:"rechBICtrl",
		templateUrl:"vues/bienImmobilier/rechBI.html"
	});
	
	// ----- Client
	$routeProvider
	.when("/listCL",{
		controller:"listeCLCtrl",
		templateUrl:"vues/client/listeCL.html"
	})
	.when("/addCL", {
		controller:"ajoutCLCtrl",
		templateUrl:"vues/client/ajoutCL.html"
	})
	.when("/updateCL", {
		controller:"modifCLCtrl",
		templateUrl:"vues/client/modifCL.html"
	})
	.when("/deleteCL", {
		controller:"supprCLCtrl",
		templateUrl:"vues/client/supprCL.html"
	})
	.when("/searchCL", {
		controller:"rechCLCtrl",
		templateUrl:"vues/client/rechCL.html"
	});
	
	// ----- Proprietaire
	$routeProvider
	.when("/listPR",{
		controller:"listePRCtrl",
		templateUrl:"vues/proprietaire/listePR.html"
	})
	.when("/addPR", {
		controller:"ajoutPRCtrl",
		templateUrl:"vues/proprietaire/ajoutPR.html"
	})
	.when("/updatePR", {
		controller:"modifPRCtrl",
		templateUrl:"vues/proprietaire/modifPR.html"
	})
	.when("/deletePR", {
		controller:"supprPRCtrl",
		templateUrl:"vues/proprietaire/supprPR.html"
	})
	.when("/searchPR", {
		controller:"rechPRCtrl",
		templateUrl:"vues/proprietaire/rechPR.html"
	});
	
	// ----- Visite
	$routeProvider
	.when("/listVI",{
		controller:"listeVICtrl",
		templateUrl:"vues/visite/listeVI.html"
	})
	.when("/addVI", {
		controller:"ajoutVICtrl",
		templateUrl:"vues/visite/ajoutVI.html"
	})
	.when("/updateVI", {
		controller:"modifVICtrl",
		templateUrl:"vues/visite/modifVI.html"
	})
	.when("/deleteVI", {
		controller:"supprVICtrl",
		templateUrl:"vues/visite/supprVI.html"
	})
	.when("/searchVI", {
		controller:"rechVICtrl",
		templateUrl:"vues/visite/rechVI.html"
	});
	
	// ----- Page d'accueil
	$routeProvider
	.otherwise({
		redirectTo: "/home"
	});
})