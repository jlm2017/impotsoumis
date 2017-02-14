import SeriesForBareme from './SeriesForBareme'
import NouveauBareme from './NouveauBareme'
import ParamLegislatif from './ParamLegislatif'
import CalculRFR from './CalculRFR'


const CalculImpot_JLM = function (sal_net, retraite, alloc_cho, couple, nbenf) {

 
    var res = CalculRFR(sal_net, retraite, alloc_cho, couple, nbenf);
		var RFR_Salarie = res.RFR
		
		console.log("RFR_Salarie");
		console.log(RFR_Salarie);

    var Rvn_Imposable_par_PF = Math.round(RFR_Salarie / (1 + couple));
    // A24
		console.log("A24");
		console.log(Rvn_Imposable_par_PF);

		var Sommes_par_Tranche = SeriesForBareme(Rvn_Imposable_par_PF, NouveauBareme);

    var Impot_par_PF_avant_CI_QF = 0;

    for (var serie of Sommes_par_Tranche) {
        Impot_par_PF_avant_CI_QF += serie.value;
    }
		// B24
		console.log("B24");
		console.log(Impot_par_PF_avant_CI_QF);
		
		var Impot_Total = Impot_par_PF_avant_CI_QF * (1+couple); //B24*(1+couple)
		// C24
		console.log("C24");
		console.log(Impot_Total); 
		
		var Impot_apres_CI_QF = Impot_Total-ParamLegislatif.Credit_impot_enfant*nbenf;
		// D24
		console.log("D24");
		console.log(Impot_apres_CI_QF); 
		
		var Impot_Du_apres_seuil_recouv = Impot_apres_CI_QF>0 
																			? Impot_apres_CI_QF > seuil_recouv 
																				? Impot_apres_CI_QF 
																				: 0 
																			: Impot_apres_CI_QF;
		//E24
		console.log("E24");
		console.log(Impot_Du_apres_seuil_recouv);
		
		var IR = Math.round(Impot_Du_apres_seuil_recouv) / 2;
		
		var CSG = Math.round(Impot_Du_apres_seuil_recouv) / 2;
		

    return { 'IR': IR, 'CSG': CSG };

}

export default CalculImpot_JLM
