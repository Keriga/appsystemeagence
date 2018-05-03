// Controllers de Visite
app

.controller("listeVICtrl", function($rootScope, $scope, $location, visiteService) {
	
		visiteService.getVisitesByAgent(function(callback) {
			$scope.listeVisites=callback;
		})
})

.controller("ajoutVICtrl", function($scope, $location, visiteService, biService, clService,agentService) {

		// Variables
		$scope.vi = { // Déclaration d'une visite
			date : "",
			heure : "",
			agent : undefined,
			client :  undefined,
			bienImmo :  undefined
		};
		
		biService.getAllBi(function(dataServer){
			$scope.listeBI=dataServer;	
			});
		
		clService.getAll(function(dataServer){
			$scope.listeClients=dataServer;	
			});
		
		agentService.getAll(function(dataServer){
			$scope.listeAgents=dataServer;	
			});
	
		// Fonction appelée via le bouton Ajouter
		$scope.ajouterVI = function() {
			
			console.log($scope.vi)
			visiteService.addVisite($scope.vi, function(callback) {
				if (callback == "OK") {
					$location.path("listVI");
				} else {
					$scope.message = "Erreur: la visite n'a pas pu etre ajoutee."
				}
			})
		};
})