<!DOCTYPE html>
<html>
  <head>
    <title> Kagoshimajs - Budget App for Homeless Developers</title>
    <meta charset='utf-8'>
  </head>
  <body>
    <h1>Tableau, vue d'ensemble</h1>
    <script>

    // creation du tableau principal, de la vue d'ensemble

    let budget_matrix = [
    "flight ticket",
    "nootropics", 
    "vitamins", 
    "self-storage",
    "food stock",
    "bus pass", 
    "gym pass",
    "misc"];

    // creation de la nomenclature (1 objet) des categories du budget sejour, des colonnes du tableau

    class expenses_category {
      constructor(objet, estimation, type, importance){
          this.objet = type de depense;
          this.estimation = estimation du montant;
          this.type = type;
          this.importance = importance;
          this.url = url source;
      }
    }

    // creation des categories (8 instances) du budget sejour, du contenu des colonnes du tableau

    let flight ticket = new budget_category("flight ticket", "600", "transportation", "incompressible");
    let racetams = new budget_category("nootropics", "300", "supplements", "primordial");
    let micronutriments = new budget_category("vitamins", "600", "supplements", "primordial");
    let box = new budget_category("self-storage", "600", "logement", "indispensable");
    let pasta = new budget_category("food stock", "600", "alimentation", "necessaire");
    let bus = new budget_category("bus pass", "600", "transportation", "comfort");
    let gym = new budget_category("gym pass", "600", "hygiene", "comfort");
    let misc = new budget_category("misc", "600", "extra", "ideal");


    */------------------------- FIN------------------------------------------------------/*

    // creation des sous-tableaux

    let nootropics = ['pramiracetam','phenylpiracetam','oxiracetam','noopept','theine caffeine','lions mane'];

    let micronutriments = ['Choline','Alpha GPC','Omega 3','Multivitamins','ALCAR',
      'Zinc','CoQ10','NAC','Vitamines D3','Probiotics','ALA','Mg|Ca|K','Melatonin'];

    console.log(vitamins);
    </script>
  </body>
</html>

